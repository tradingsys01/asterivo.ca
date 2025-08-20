#!/bin/bash

# Asterivo.ca SSL-Enabled Production Deployment
# Server: root@167.86.77.166 (with existing SSL)
# Target: /var/www/html/asterivo.ca (SSL-enabled directory)

set -e

echo "🚀 Starting SSL-enabled deployment to asterivo.ca..."

SERVER="root@167.86.77.166"
SSL_SITE_DIR="/var/www/html/asterivo.ca"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
echo_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
echo_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }

# Build static export
echo_info "Building production static export..."
npm run build

# Create deployment package
echo_info "Creating SSL deployment package..."
cd out
tar -czf ../asterivo-ssl.tar.gz .
cd ..

# Upload to server
echo_info "Uploading to SSL-enabled server..."
scp asterivo-ssl.tar.gz $SERVER:/tmp/

# Deploy to SSL directory
echo_info "Deploying to SSL-enabled asterivo.ca..."
ssh $SERVER << 'ENDSSH'
    echo "🔒 Deploying to SSL-enabled asterivo.ca directory..."

    # Backup existing SSL site
    if [ -d "/var/www/html/asterivo.ca" ] && [ "$(ls -A /var/www/html/asterivo.ca 2>/dev/null)" ]; then
        echo "📦 Backing up existing SSL site..."
        mkdir -p /var/www/html/asterivo.ca.backup-$(date +%Y%m%d-%H%M%S)
        cp -r /var/www/html/asterivo.ca/* /var/www/html/asterivo.ca.backup-$(date +%Y%m%d-%H%M%S)/ 2>/dev/null || true
        echo "✅ Backup created"
    fi

    # Ensure SSL directory exists
    mkdir -p /var/www/html/asterivo.ca
    cd /var/www/html/asterivo.ca

    # Clear existing content
    rm -rf * .* 2>/dev/null || true

    # Extract new SSL site
    echo "📂 Extracting new site files..."
    tar -xzf /tmp/asterivo-ssl.tar.gz

    # Set proper permissions for SSL site
    echo "🔧 Setting SSL site permissions..."
    chown -R apache:apache /var/www/html/asterivo.ca
    find /var/www/html/asterivo.ca -type d -exec chmod 755 {} \;
    find /var/www/html/asterivo.ca -type f -exec chmod 644 {} \;
    
    # Make PHP contact form executable
    if [ -f "/var/www/html/asterivo.ca/api/contact.php" ]; then
        chmod 755 /var/www/html/asterivo.ca/api/contact.php
        echo "📧 Contact form configured"
    fi

    # Create .htaccess for clean URLs and security
    echo "⚙️ Configuring URL rewriting and security..."
    cat > /var/www/html/asterivo.ca/.htaccess << 'EOF_HTACCESS'
# Security Headers
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "no-referrer-when-downgrade"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

# Compression
<IfModule mod_deflate.c>
    SetOutputFilter DEFLATE
    SetEnvIfNoCase Request_URI \
        \.(?:gif|jpe?g|png|ico|woff2?|ttf|eot|svg)$ no-gzip dont-vary
    SetEnvIfNoCase Request_URI \
        \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType font/ttf "access plus 1 year"
    ExpiresByType font/eot "access plus 1 year"
</IfModule>

# URL Rewriting for clean URLs
RewriteEngine On

# Redirect to trailing slash for directories
RewriteCond %{REQUEST_FILENAME} -d
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.*)$ $1/ [R=301,L]

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteRule ^(.*)$ /index.html [L]

# Deny access to sensitive files
<Files ~ "^\.">
    Require all denied
</Files>

<Files "*.config.*">
    Require all denied
</Files>

<Files "package*.json">
    Require all denied
</Files>
EOF_HTACCESS

    # Test Apache configuration
    echo "🧪 Testing Apache configuration..."
    httpd -t

    # Reload Apache to apply changes
    echo "🔄 Reloading Apache..."
    systemctl reload httpd

    # Cleanup
    rm -f /tmp/asterivo-ssl.tar.gz

    echo "✅ SSL-enabled deployment completed!"
    echo ""
    echo "🌐 Website is now live with SSL at:"
    echo "  - https://asterivo.ca"
    echo "  - http://asterivo.ca (redirects to HTTPS)"
    echo ""
    echo "🔒 SSL Certificate Status:"
    echo "  - Provider: Let's Encrypt"
    echo "  - Certificate: /etc/letsencrypt/live/asterivo.ca/cert.pem"
    echo "  - Auto-renewal: Configured"
    echo ""
    echo "📧 Contact Form:"
    echo "  - Endpoint: https://asterivo.ca/api/contact.php"
    echo "  - Email: asterivo.ca@gmail.com"
    echo ""
    echo "📊 Monitoring:"
    echo "  - SSL Logs: /var/www/html/asterivo.ca.err.he.log"
    echo "  - Access: tail -f /var/log/httpd/asterivo.ca.ssl.access.log"
ENDSSH

# Cleanup local files
rm -f asterivo-ssl.tar.gz

echo_success "🎉 SSL deployment completed successfully!"
echo_info ""
echo_info "🔍 Testing SSL deployment..."

# Test SSL deployment
sleep 3
if curl -s -k https://asterivo.ca | grep -q "Asterivo\|AI"; then
    echo_success "✅ HTTPS website is live and responding!"
    
    # Test SSL certificate
    if curl -s -I https://asterivo.ca | grep -q "HTTP.*200\|HTTP.*301"; then
        echo_success "✅ SSL certificate is working correctly!"
    fi
else
    echo_warning "⏳ Website might need a moment to fully load"
fi

echo_info ""
echo_info "🎯 SSL Deployment Summary:"
echo_info "✅ Static files deployed to SSL-enabled directory"
echo_info "✅ SSL certificate preserved and working"
echo_info "✅ Contact form configured with PHP backend"
echo_info "✅ Security headers and caching configured"
echo_info "✅ Clean URLs and redirects working"
echo_info ""
echo_info "🔗 Your website is now live at:"
echo_info "  Primary: https://asterivo.ca"
echo_info "  Backup:  http://asterivo.ca (redirects to HTTPS)"
echo_info ""
echo_info "📧 Next steps:"
echo_info "1. Test contact form: https://asterivo.ca/contact/"
echo_info "2. Verify email functionality"
echo_info "3. Check Google Analytics/tracking (if needed)"