#!/bin/bash

# Asterivo.ca Production Deployment Script
# Server: root@167.86.77.166

set -e  # Exit on any error

echo "🚀 Starting deployment to production server..."

SERVER="root@167.86.77.166"
PROJECT_DIR="asterivo.ca"
REMOTE_DIR="/var/www/asterivo.ca"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

echo_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

echo_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

echo_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Step 1: Build locally
echo_info "Building production version locally..."
npm run build

# Step 2: Create deployment archive
echo_info "Creating deployment archive..."
rm -f asterivo-deploy.tar.gz
tar --exclude='node_modules' \
    --exclude='.git' \
    --exclude='.next/cache' \
    --exclude='deploy*.sh' \
    --exclude='.env.local' \
    --exclude='test-*.js' \
    --exclude='asterivo-deploy.tar.gz' \
    -czf asterivo-deploy.tar.gz .

echo_success "Archive created: asterivo-deploy.tar.gz"

# Step 3: Upload to server
echo_info "Uploading files to server..."
scp asterivo-deploy.tar.gz $SERVER:/tmp/

# Step 4: Deploy on server
echo_info "Deploying on server..."
ssh $SERVER << 'ENDSSH'
    # Colors for remote output
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    BLUE='\033[0;34m'
    NC='\033[0m'

    echo_info() { echo -e "${BLUE}[REMOTE INFO]${NC} $1"; }
    echo_success() { echo -e "${GREEN}[REMOTE SUCCESS]${NC} $1"; }
    echo_warning() { echo -e "${YELLOW}[REMOTE WARNING]${NC} $1"; }

    # Install Node.js if not present
    if ! command -v node &> /dev/null; then
        echo_info "Installing Node.js..."
        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
        apt-get install -y nodejs
    fi

    # Install PM2 if not present
    if ! command -v pm2 &> /dev/null; then
        echo_info "Installing PM2..."
        npm install -g pm2
    fi

    # Create directory structure
    echo_info "Setting up directory structure..."
    mkdir -p /var/www/asterivo.ca
    cd /var/www/asterivo.ca

    # Backup existing deployment if it exists
    if [ -d "current" ]; then
        echo_info "Backing up current deployment..."
        mv current backup-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true
    fi

    # Extract new deployment
    echo_info "Extracting new deployment..."
    mkdir -p current
    cd current
    tar -xzf /tmp/asterivo-deploy.tar.gz
    
    # Install dependencies
    echo_info "Installing production dependencies..."
    npm ci --only=production

    # Create production environment file
    echo_info "Creating production environment configuration..."
    cat > .env.production << EOF
NODE_ENV=production
EMAIL_USER=asterivo.ca@gmail.com
EMAIL_PASSWORD=\${EMAIL_PASSWORD}
ANTHROPIC_API_KEY=\${ANTHROPIC_API_KEY}
EOF

    # Set correct permissions
    echo_info "Setting file permissions..."
    chown -R www-data:www-data /var/www/asterivo.ca/current
    chmod -R 755 /var/www/asterivo.ca/current

    # Install/update PM2 ecosystem file
    cat > ecosystem.config.js << 'EOF_ECOSYSTEM'
module.exports = {
  apps: [{
    name: 'asterivo-ca',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/asterivo.ca/current',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
EOF_ECOSYSTEM

    # Start/restart the application
    echo_info "Starting application with PM2..."
    pm2 stop asterivo-ca 2>/dev/null || echo_warning "App not running, starting fresh..."
    pm2 delete asterivo-ca 2>/dev/null || true
    pm2 start ecosystem.config.js
    pm2 save
    pm2 startup

    # Setup nginx if not configured
    if [ ! -f /etc/nginx/sites-available/asterivo.ca ]; then
        echo_info "Setting up Nginx configuration..."
        
        # Install nginx if not present
        if ! command -v nginx &> /dev/null; then
            apt-get update
            apt-get install -y nginx
        fi

        # Create nginx configuration
        cat > /etc/nginx/sites-available/asterivo.ca << 'EOF_NGINX'
server {
    listen 80;
    server_name asterivo.ca www.asterivo.ca 167.86.77.166;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Static files
    location /_next/static/ {
        alias /var/www/asterivo.ca/current/.next/static/;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location /static/ {
        alias /var/www/asterivo.ca/current/public/;
        expires 30d;
        add_header Cache-Control "public";
    }

    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
}
EOF_NGINX

        # Enable the site
        ln -sf /etc/nginx/sites-available/asterivo.ca /etc/nginx/sites-enabled/
        rm -f /etc/nginx/sites-enabled/default
        
        # Test and reload nginx
        nginx -t && systemctl reload nginx
        systemctl enable nginx
        
        echo_success "Nginx configured and enabled"
    fi

    # Cleanup
    rm -f /tmp/asterivo-deploy.tar.gz

    echo_success "Deployment completed successfully!"
    echo_info "Application is running on:"
    echo_info "  - http://167.86.77.166"
    echo_info "  - http://asterivo.ca (if DNS is configured)"
    echo_info ""
    echo_info "To check application status: pm2 status"
    echo_info "To view logs: pm2 logs asterivo-ca"
    echo_info "To restart: pm2 restart asterivo-ca"
ENDSSH

# Cleanup local files
echo_info "Cleaning up local deployment files..."
rm -f asterivo-deploy.tar.gz

echo_success "🎉 Deployment completed successfully!"
echo_info "Your website is now live at: http://167.86.77.166"
echo_info ""
echo_info "Next steps:"
echo_info "1. Configure DNS to point asterivo.ca to 167.86.77.166"
echo_info "2. Set up SSL certificate with Let's Encrypt"
echo_info "3. Test email functionality in production"
echo_info ""
echo_info "To monitor your application:"
echo_info "  ssh root@167.86.77.166"
echo_info "  pm2 status"
echo_info "  pm2 logs asterivo-ca"