# AWS S3 Static Website Hosting Configuration

## Step 1: S3 Bucket Configuration

### Static Website Hosting Settings:
- **Index document**: `index.html`
- **Error document**: `index.html` (NOT 404.html for SPA)

### Why use index.html as error document?
For Single Page Applications, when someone visits `/login` directly, S3 returns a 404 because there's no actual `/login` file. By setting the error document to `index.html`, S3 will serve your React app, which can then handle the routing internally.

## Step 2: CloudFront Configuration (Recommended)

### Custom Error Pages:
1. **403 Forbidden**:
   - Response Page Path: `/index.html`
   - HTTP Response Code: `200`

2. **404 Not Found**:
   - Response Page Path: `/index.html` 
   - HTTP Response Code: `200`

### Why CloudFront?
- Better performance with global CDN
- Custom error page handling
- HTTPS support
- Custom domain support

## Step 3: Alternative Router Configurations

### Option A: Keep HashRouter (Simplest)
Current setup with `HashRouter` should work without server configuration.
URLs will be: `https://yourdomain.com/#/login`

### Option B: Switch to BrowserRouter (Clean URLs)
For clean URLs like `https://yourdomain.com/login`, use BrowserRouter with proper server configuration.

## Step 4: Build Configuration

Make sure your build process creates the necessary files:
- `index.html` - Main app entry point
- `404.html` - Copy of index.html for fallback (optional)

## Deployment Commands:

```bash
# Build the app
npm run build

# Upload to S3 (using AWS CLI)
aws s3 sync build/ s3://your-bucket-name --delete

# Or upload build folder contents manually via AWS Console
```
