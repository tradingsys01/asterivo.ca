#!/bin/bash

# Asterivo.ca CentOS 7 Compatible Deployment Script
# Server: root@167.86.77.166

set -e

echo "🚀 Starting CentOS 7 compatible deployment..."

SERVER="root@167.86.77.166"
REMOTE_DIR="/var/www/asterivo.ca"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
echo_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
echo_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
echo_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Step 1: Build locally
echo_info "Building production version locally..."
npm run build

# Step 2: Create deployment archive (excluding problematic files)
echo_info "Creating deployment archive..."
tar --exclude='node_modules' \
    --exclude='.git' \
    --exclude='.next/cache' \
    --exclude='deploy*.sh' \
    --exclude='.env.local' \
    -czf asterivo-deploy.tar.gz .

# Step 3: Upload to server
echo_info "Uploading files to server..."
scp asterivo-deploy.tar.gz $SERVER:/tmp/

# Step 4: Deploy with CentOS 7 compatibility
echo_info "Deploying on CentOS 7 server..."
ssh $SERVER << 'ENDSSH'
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    BLUE='\033[0;34m'
    NC='\033[0m'

    echo_info() { echo -e "${BLUE}[REMOTE]${NC} $1"; }
    echo_success() { echo -e "${GREEN}[REMOTE]${NC} $1"; }
    echo_warning() { echo -e "${YELLOW}[REMOTE]${NC} $1"; }
    echo_error() { echo -e "${RED}[REMOTE]${NC} $1"; }

    # Update system packages
    echo_info "Updating system packages..."
    yum update -y

    # Install EPEL repository
    echo_info "Installing EPEL repository..."
    yum install -y epel-release

    # Install Node.js 16.x (compatible with CentOS 7)
    echo_info "Installing Node.js 16.x (CentOS 7 compatible)..."
    if ! command -v node &> /dev/null; then
        curl -fsSL https://rpm.nodesource.com/setup_16.x | bash -
        yum install -y nodejs
    fi

    # Check Node.js version
    echo_info "Node.js version: $(node --version)"
    echo_info "NPM version: $(npm --version)"

    # Install PM2 globally
    echo_info "Installing PM2..."
    npm install -g pm2

    # Install and configure Nginx
    echo_info "Installing and configuring Nginx..."
    if ! command -v nginx &> /dev/null; then
        yum install -y nginx
        systemctl enable nginx
    fi

    # Create directory structure
    echo_info "Setting up directory structure..."
    mkdir -p /var/www/asterivo.ca
    cd /var/www/asterivo.ca

    # Backup existing deployment
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
EMAIL_PASSWORD=pkxj ddot sttu rywd
EOF

    # Set proper file ownership (nginx user in CentOS 7)
    echo_info "Setting file permissions..."
    chown -R nginx:nginx /var/www/asterivo.ca/current
    chmod -R 755 /var/www/asterivo.ca/current

    # Create PM2 ecosystem file
    echo_info "Creating PM2 ecosystem configuration..."
    cat > ecosystem.config.js << 'EOF_ECO'
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
EOF_ECO

    # Stop and restart application
    echo_info "Managing application with PM2..."
    pm2 stop asterivo-ca 2>/dev/null || echo_warning "App not running"
    pm2 delete asterivo-ca 2>/dev/null || true
    pm2 start ecosystem.config.js
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup centos -u nginx --hp /var/lib/nginx

    # Create Nginx configuration
    echo_info "Setting up Nginx configuration..."
    cat > /etc/nginx/conf.d/asterivo.ca.conf << 'EOF_NGINX'
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
        proxy_pass http://127.0.0.1:3000;
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

    # Test and start Nginx
    echo_info "Testing and starting Nginx..."
    nginx -t
    systemctl restart nginx
    systemctl enable nginx

    # Open firewall for HTTP (if firewalld is running)
    if systemctl is-active --quiet firewalld; then
        echo_info "Opening firewall for HTTP traffic..."
        firewall-cmd --permanent --add-service=http
        firewall-cmd --permanent --add-service=https
        firewall-cmd --reload
    fi

    # Cleanup
    rm -f /tmp/asterivo-deploy.tar.gz

    echo_success "CentOS 7 deployment completed successfully!"
    echo_info "Application status:"
    pm2 status
    echo_info ""
    echo_info "Website is now live at:"
    echo_info "  - http://167.86.77.166"
    echo_info "  - http://asterivo.ca (configure DNS)"
    echo_info ""
    echo_info "To monitor:"
    echo_info "  pm2 logs asterivo-ca"
    echo_info "  systemctl status nginx"
ENDSSH

# Cleanup local files
rm -f asterivo-deploy.tar.gz

echo_success "🎉 CentOS 7 deployment completed!"
echo_info "Your website should now be accessible at: http://167.86.77.166"
echo_info ""
echo_info "Next steps:"
echo_info "1. Test the website: curl -I http://167.86.77.166"
echo_info "2. Configure DNS for asterivo.ca → 167.86.77.166"
echo_info "3. Set up SSL certificate with certbot"
echo_info "4. Test email functionality"