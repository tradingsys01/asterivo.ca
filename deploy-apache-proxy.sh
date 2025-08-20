#!/bin/bash

# Asterivo.ca Apache Proxy Deployment Script
# Server: root@167.86.77.166 (with existing Apache)

set -e

echo "🚀 Starting Apache proxy deployment..."

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

# Build and create archive
echo_info "Building and preparing deployment..."
npm run build
tar --exclude='node_modules' --exclude='.git' --exclude='.next/cache' \
    --exclude='deploy*.sh' --exclude='.env.local' \
    -czf asterivo-deploy.tar.gz .

# Upload and deploy
echo_info "Uploading to server..."
scp asterivo-deploy.tar.gz $SERVER:/tmp/

echo_info "Deploying with Apache proxy configuration..."
ssh $SERVER << 'ENDSSH'
    echo "🔧 Setting up Apache proxy deployment..."

    # Install Node.js 16.x if not present
    if ! command -v node &> /dev/null; then
        echo "Installing Node.js 16.x..."
        curl -fsSL https://rpm.nodesource.com/setup_16.x | bash -
        yum install -y nodejs
    fi

    # Install PM2 if not present  
    if ! command -v pm2 &> /dev/null; then
        echo "Installing PM2..."
        npm install -g pm2
    fi

    # Create application directory
    echo "Setting up application directory..."
    mkdir -p /var/www/asterivo.ca
    cd /var/www/asterivo.ca

    # Backup existing deployment
    if [ -d "current" ]; then
        mv current backup-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true
    fi

    # Extract new deployment
    echo "Extracting application..."
    mkdir -p current
    cd current
    tar -xzf /tmp/asterivo-deploy.tar.gz

    # Install dependencies
    echo "Installing dependencies..."
    npm ci --only=production

    # Create environment file
    cat > .env.production << EOF
NODE_ENV=production
EMAIL_USER=asterivo.ca@gmail.com
EMAIL_PASSWORD=pkxj ddot sttu rywd
PORT=3001
EOF

    # Set permissions
    chown -R apache:apache /var/www/asterivo.ca
    chmod -R 755 /var/www/asterivo.ca

    # Create PM2 config for port 3001
    cat > ecosystem.config.js << 'EOF_PM2'
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
      PORT: 3001
    }
  }]
};
EOF_PM2

    # Stop/start application
    echo "Starting application on port 3001..."
    pm2 stop asterivo-ca 2>/dev/null || true
    pm2 delete asterivo-ca 2>/dev/null || true
    pm2 start ecosystem.config.js
    pm2 save

    # Create Apache virtual host configuration
    echo "Configuring Apache proxy..."
    
    # Enable required Apache modules
    echo "LoadModule proxy_module modules/mod_proxy.so" >> /etc/httpd/conf.modules.d/00-proxy.conf 2>/dev/null || true
    echo "LoadModule proxy_http_module modules/mod_proxy_http.so" >> /etc/httpd/conf.modules.d/00-proxy.conf 2>/dev/null || true

    # Create virtual host for asterivo.ca
    cat > /etc/httpd/conf.d/asterivo.ca.conf << 'EOF_APACHE'
<VirtualHost *:80>
    ServerName asterivo.ca
    ServerAlias www.asterivo.ca
    ServerAlias 167.86.77.166

    # Security headers
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "no-referrer-when-downgrade"

    # Enable compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png|ico|woff2?|ttf|eot|svg)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>

    # Proxy configuration
    ProxyPreserveHost On
    ProxyRequests Off
    
    # Static files - serve directly from filesystem if they exist
    DocumentRoot /var/www/asterivo.ca/current/public
    
    # Proxy all other requests to Next.js
    ProxyPass /_next/ http://127.0.0.1:3001/_next/
    ProxyPassReverse /_next/ http://127.0.0.1:3001/_next/
    
    ProxyPass /api/ http://127.0.0.1:3001/api/
    ProxyPassReverse /api/ http://127.0.0.1:3001/api/
    
    # Proxy everything else to Next.js
    ProxyPass / http://127.0.0.1:3001/
    ProxyPassReverse / http://127.0.0.1:3001/
    
    # Error and access logs
    ErrorLog /var/log/httpd/asterivo.ca_error.log
    CustomLog /var/log/httpd/asterivo.ca_access.log combined
</VirtualHost>
EOF_APACHE

    # Test Apache configuration and restart
    echo "Testing and restarting Apache..."
    httpd -t
    systemctl restart httpd

    # Cleanup
    rm -f /tmp/asterivo-deploy.tar.gz

    echo "✅ Deployment completed!"
    echo "📊 Application status:"
    pm2 status
    
    echo ""
    echo "🌐 Website should be accessible at:"
    echo "  - http://167.86.77.166"
    echo "  - http://asterivo.ca (after DNS configuration)"
    
    echo ""
    echo "🔧 Monitoring commands:"
    echo "  pm2 logs asterivo-ca"
    echo "  systemctl status httpd"
    echo "  tail -f /var/log/httpd/asterivo.ca_access.log"
ENDSSH

rm -f asterivo-deploy.tar.gz

echo_success "🎉 Apache proxy deployment completed!"
echo_info "Testing website accessibility..."

# Test the deployment
sleep 3
if curl -s -o /dev/null -w "%{http_code}" http://167.86.77.166 | grep -q "200\|301\|302"; then
    echo_success "✅ Website is responding!"
else
    echo_warning "⚠️  Website might need a moment to start up"
fi

echo_info ""
echo_info "Next steps:"
echo_info "1. Configure DNS: asterivo.ca → 167.86.77.166"
echo_info "2. Set up SSL certificate with Let's Encrypt"
echo_info "3. Test email functionality"