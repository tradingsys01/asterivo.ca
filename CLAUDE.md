- remote deployment server is 167.86.77.166
- keep this setup and use for later deployments for remote server
- use this conf for remore server : explain remote artchitecture , nodejs etc ports ...
- Remote Server Architecture

  Current Setup (Development-like)

  Internet → Nginx (Reverse Proxy) → Node.js/Next.js Dev Server
     ↓            ↓                        ↓
  Ports:       80/443                   3000

  Port Configuration

  1. Port 80 (HTTP)
    - Nginx listens here
    - Redirects to HTTPS (443) for domain access
    - Direct access for IP testing
  2. Port 443 (HTTPS)
    - Nginx with SSL certificates
    - Main public access point
    - Handles asterivo.ca and www.asterivo.ca
  3. Port 3000 (Internal)
    - Next.js development server
    - Only accessible internally
    - Running npm run dev with hot reload
## Deployment Instructions

### Clean Deployment Process
1. **Local Build**: Always run `npm run build` first to ensure production-ready code
2. **Create Clean Archive**: 
   ```bash
   tar --exclude='node_modules' \
       --exclude='.git' \
       --exclude='.next/cache' \
       --exclude='deploy*.sh' \
       --exclude='.env.local' \
       --exclude='test-*.js' \
       --exclude='*.tar.gz' \
       --exclude='*.log' \
       -czf clean-deployment.tar.gz .
   ```
3. **Upload**: `scp clean-deployment.tar.gz root@167.86.77.166:/tmp/`
4. **Deploy**: Extract to `/var/www/asterivo.ca/` (single clean directory)
5. **Copy Environment Variables**: **CRITICAL - Copy .env.local to production**
   ```bash
   # Copy local environment to remote server
   scp .env.local root@167.86.77.166:/var/www/asterivo.ca/
   ```

### Remote Server Management
- **Directory Structure**: Keep ONLY `/var/www/asterivo.ca/` - no scattered files
- **Process Management**: Run only ONE Next.js process: `npm run dev`
- **Port**: Always use port 3000 (as specified in architecture)
- **Clean Restart**: 
  ```bash
  pkill -f "next" && sleep 3
  cd /var/www/asterivo.ca
  PORT=3000 npm run dev > server.log 2>&1 &
  ```

### Deployment Checklist
- ✅ Clean `/var/www/` directory (remove scattered files)
- ✅ Single deployment in `/var/www/asterivo.ca/`
- ✅ One Next.js process on port 3000
- ✅ Test: https://asterivo.ca responds HTTP 200
- ✅ Nginx proxy: 80/443 → 3000

### Important Notes
- **Never** leave messy files scattered in `/var/www/`
- **Always** kill all processes before redeployment
- **Always** verify single process is running after deployment
- **Use** `npm run dev` (not production mode) for hot reload capability
- **CRITICAL**: Always copy `.env.local` with real credentials to production
- **Email**: Requires Gmail App Password in EMAIL_PASSWORD
- **API Keys**: Requires real ANTHROPIC_API_KEY for AI features

### Environment Variables Required
```bash
NODE_ENV=development
PORT=3000
EMAIL_USER=asterivo.ca@gmail.com
EMAIL_PASSWORD=your_gmail_app_password_here
ANTHROPIC_API_KEY=your_anthropic_key_here
NEXT_PUBLIC_CONTACT_API=enabled
```

### Deployment Verification
After deployment, verify:
- ✅ Site responds: https://asterivo.ca (HTTP 200)
- ✅ API works: Test contact form submission
- ✅ Email sends: Check server logs for "Email notification sent successfully"
- ✅ Single process: Only one next-server on port 3000
- copy env vars to prod when deploy