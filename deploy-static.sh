#!/bin/bash

# Asterivo.ca Static Deployment Script
# Server: root@167.86.77.166 (Apache with PHP)

set -e

echo "🚀 Starting static deployment to Apache server..."

SERVER="root@167.86.77.166"
SITE_DIR="/var/www/html/asterivo"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
echo_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }

# Build static export
echo_info "Building static export..."
npm run build

# Create deployment package
echo_info "Creating deployment package..."
cd out
tar -czf ../asterivo-static.tar.gz .
cd ..

# Upload to server
echo_info "Uploading static files to server..."
scp asterivo-static.tar.gz $SERVER:/tmp/

# Deploy on server
echo_info "Deploying static files..."
ssh $SERVER << 'ENDSSH'
    echo "📁 Setting up static website deployment..."

    # Create site directory
    mkdir -p /var/www/html/asterivo
    cd /var/www/html/asterivo

    # Backup existing site
    if [ -f "index.html" ]; then
        echo "Backing up existing site..."
        mkdir -p ../backup-$(date +%Y%m%d-%H%M%S)
        mv * ../backup-$(date +%Y%m%d-%H%M%S)/ 2>/dev/null || true
    fi

    # Extract new site
    echo "Extracting static files..."
    tar -xzf /tmp/asterivo-static.tar.gz

    # Set proper permissions
    echo "Setting file permissions..."
    chown -R apache:apache /var/www/html/asterivo
    find /var/www/html/asterivo -type d -exec chmod 755 {} \;
    find /var/www/html/asterivo -type f -exec chmod 644 {} \;
    
    # Make PHP contact form executable
    chmod 755 /var/www/html/asterivo/api/contact.php

    # Create Apache virtual host configuration
    echo "Configuring Apache virtual host..."
    cat > /etc/httpd/conf.d/asterivo.ca.conf << 'EOF_APACHE'
<VirtualHost *:80>
    ServerName asterivo.ca
    ServerAlias www.asterivo.ca
    DocumentRoot /var/www/html/asterivo

    # Security headers
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "no-referrer-when-downgrade"

    # Enable compression
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png|ico|woff2?|ttf|eot|svg)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>

    # Cache static assets
    <LocationMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
        Header append Cache-Control "public, immutable"
    </LocationMatch>

    # Handle trailing slashes and clean URLs
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
    
    # Fallback to index.html for SPA routing
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ /index.html [L]

    # PHP configuration for contact form
    <Directory "/var/www/html/asterivo/api">
        Options +ExecCGI
        AddHandler php-script .php
        DirectoryIndex contact.php
    </Directory>

    # Error and access logs
    ErrorLog /var/log/httpd/asterivo.ca_error.log
    CustomLog /var/log/httpd/asterivo.ca_access.log combined
    
    # Custom error pages
    ErrorDocument 404 /404.html
</VirtualHost>
EOF_APACHE

    # Test Apache configuration
    echo "Testing Apache configuration..."
    httpd -t

    # Restart Apache
    echo "Restarting Apache..."
    systemctl restart httpd

    # Cleanup
    rm -f /tmp/asterivo-static.tar.gz

    echo "✅ Static deployment completed successfully!"
    echo ""
    echo "🌐 Website is now live at:"
    echo "  - http://167.86.77.166"
    echo "  - http://asterivo.ca (after DNS configuration)"
    echo ""
    echo "📧 Email contact form ready at:"
    echo "  - /api/contact.php"
    echo ""
    echo "📋 Files deployed to: /var/www/html/asterivo"
    echo "📊 Apache logs: /var/log/httpd/asterivo.ca_*.log"
ENDSSH

# Cleanup local files
rm -f asterivo-static.tar.gz

echo_success "🎉 Static deployment completed successfully!"
echo_info ""
echo_info "Testing website..."

# Test the deployment
sleep 2
if curl -s http://167.86.77.166 | grep -q "Asterivo\|AI"; then
    echo_success "✅ Website is live and responding!"
else
    echo_info "⏳ Website might need a moment to fully load"
fi

echo_info ""
echo_info "🎯 Next steps:"
echo_info "1. Configure DNS: asterivo.ca → 167.86.77.166"
echo_info "2. Set up SSL certificate with certbot/Let's Encrypt"
echo_info "3. Test contact form: http://167.86.77.166/contact/"
echo_info "4. Test email functionality with real submissions"
echo_info ""
echo_info "🔧 Server management:"
echo_info "  - Apache status: systemctl status httpd"
echo_info "  - Apache logs: tail -f /var/log/httpd/asterivo.ca_access.log"
echo_info "  - Site files: /var/www/html/asterivo/"