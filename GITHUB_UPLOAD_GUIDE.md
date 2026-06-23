# Deployment Guide - Suraksha AI

This guide covers deploying Suraksha AI to various platforms.

## Table of Contents

1. [Local Development](#local-development)
2. [Manus Platform](#manus-platform)
3. [Vercel](#vercel)
4. [Netlify](#netlify)
5. [Docker](#docker)
6. [AWS](#aws)
7. [Google Cloud](#google-cloud)
8. [Azure](#azure)

---

## Local Development

### Prerequisites
- Node.js 18+
- pnpm 10.4.1+

### Setup

```bash
# Clone repository
git clone https://github.com/ANSHIT175/Suraksha-AI.git
cd Suraksha-AI

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Environment Variables

Create `.env.local`:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Suraksha AI
```

---

## Manus Platform (Recommended)

Suraksha AI is optimized for Manus platform deployment.

### Prerequisites
- Manus account
- GitHub repository

### Deployment Steps

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Manus:**
   - Visit [Manus Dashboard](https://manus.im)
   - Click "Create New Project"
   - Select "Connect GitHub Repository"
   - Choose your repository
   - Select branch (main)

3. **Configure Settings:**
   - Project name: Suraksha AI
   - Build command: `pnpm build`
   - Start command: `pnpm start`
   - Environment variables: Add any needed vars

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://[project-name].manus.space`

### Custom Domain

1. **In Manus Dashboard:**
   - Go to Settings → Domains
   - Click "Add Custom Domain"
   - Enter your domain (e.g., suraksha-ai.com)

2. **Update DNS Records:**
   - Add CNAME record pointing to Manus
   - Wait for DNS propagation (up to 48 hours)

### Environment Variables

Set in Manus Dashboard:

```
VITE_API_URL=https://api.suraksha-ai.com
VITE_APP_TITLE=Suraksha AI
JWT_SECRET=your_secret_key
```

---

## Vercel

### Prerequisites
- Vercel account
- GitHub repository

### Deployment

1. **Visit Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository

2. **Configure:**
   - Framework: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

3. **Environment Variables:**
   - Add in Vercel dashboard
   - Deploy

### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Netlify

### Prerequisites
- Netlify account
- GitHub repository

### Deployment

1. **Connect Repository:**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose repository

2. **Configure Build:**
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Install command: `pnpm install`

3. **Environment Variables:**
   - Add in Netlify dashboard
   - Deploy

### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
command = "pnpm build"
publish = "dist"

[build.environment]
NODE_VERSION = "18"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

---

## Docker

### Prerequisites
- Docker installed
- Docker Hub account (for registry)

### Dockerfile

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy files
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Build
RUN pnpm build

# Production stage
FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist
COPY server ./server

EXPOSE 3000

CMD ["pnpm", "start"]
```

### Build and Run

```bash
# Build image
docker build -t suraksha-ai:latest .

# Run container
docker run -p 3000:3000 suraksha-ai:latest

# Push to registry
docker tag suraksha-ai:latest your-username/suraksha-ai:latest
docker push your-username/suraksha-ai:latest
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  suraksha-ai:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      VITE_API_URL: http://localhost:3000
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

## AWS

### Using AWS Amplify

1. **Connect Repository:**
   - Visit AWS Amplify Console
   - Click "New app" → "Host web app"
   - Select GitHub
   - Authorize and select repository

2. **Configure Build:**
   - Build command: `pnpm build`
   - Build output directory: `dist`

3. **Deploy:**
   - Review settings
   - Click "Save and deploy"

### Using AWS S3 + CloudFront

1. **Build locally:**
```bash
pnpm build
```

2. **Create S3 bucket:**
```bash
aws s3 mb s3://suraksha-ai-bucket
```

3. **Upload files:**
```bash
aws s3 sync dist/ s3://suraksha-ai-bucket/
```

4. **Create CloudFront distribution:**
   - Origin: S3 bucket
   - Default root object: index.html
   - Error pages: Route to index.html for SPA

---

## Google Cloud

### Using Google Cloud Run

1. **Create Dockerfile** (see Docker section)

2. **Build and push:**
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/suraksha-ai
```

3. **Deploy:**
```bash
gcloud run deploy suraksha-ai \
  --image gcr.io/PROJECT_ID/suraksha-ai \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Using Firebase Hosting

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase:**
```bash
firebase init
```

3. **Deploy:**
```bash
firebase deploy
```

---

## Azure

### Using Azure App Service

1. **Create App Service:**
```bash
az appservice plan create \
  --name suraksha-ai-plan \
  --resource-group myResourceGroup \
  --sku B1 --is-linux
```

2. **Create Web App:**
```bash
az webapp create \
  --resource-group myResourceGroup \
  --plan suraksha-ai-plan \
  --name suraksha-ai-app \
  --runtime "NODE:18-lts"
```

3. **Deploy:**
```bash
az webapp up --name suraksha-ai-app
```

---

## Performance Optimization

### Build Optimization

```bash
# Analyze bundle
pnpm build --analyze

# Production build
pnpm build
```

### Caching

Add to deployment configuration:

```
Cache-Control: max-age=31536000, immutable  # JS/CSS files
Cache-Control: max-age=3600                 # HTML files
```

### CDN Configuration

- Use CDN for static assets
- Enable compression (gzip/brotli)
- Set appropriate cache headers

---

## Monitoring & Logging

### Application Monitoring

- Set up error tracking (Sentry, Rollbar)
- Monitor performance metrics
- Track user analytics

### Log Aggregation

- Collect logs from deployment platform
- Set up alerts for errors
- Monitor uptime and performance

---

## Troubleshooting

### Build Failures

```bash
# Clear cache
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Rebuild
pnpm build
```

### Runtime Errors

- Check environment variables
- Review application logs
- Test locally first

### Performance Issues

- Analyze bundle size
- Enable compression
- Use CDN for assets
- Optimize images

---

## Rollback

### Manus
- Go to Dashboard → Deployments
- Select previous version
- Click "Rollback"

### Vercel
- Go to Deployments
- Select previous deployment
- Click "Promote to Production"

### Netlify
- Go to Deploys
- Select previous deploy
- Click "Publish deploy"

---

## Maintenance

### Regular Updates

```bash
# Update dependencies
pnpm update

# Check for vulnerabilities
pnpm audit

# Fix vulnerabilities
pnpm audit --fix
```

### Backup

- Regular database backups
- Version control commits
- Environment variable backups

---

## Support

For deployment issues:
- Check platform documentation
- Review application logs
- Contact platform support
- Open GitHub issue

---

**Last Updated:** June 2026
**Version:** 1.0.0
