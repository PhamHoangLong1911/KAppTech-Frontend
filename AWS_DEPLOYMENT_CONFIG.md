# AWS S3 Static Website Configuration

## S3 Bucket Policy (for public access)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

## S3 Static Website Settings
- Index Document: `index.html`
- Error Document: `404.html`

## CloudFront Distribution Settings (Recommended)
- Default Root Object: `index.html`
- Custom Error Pages:
  - HTTP Error Code: 403
  - Error Page Path: `/index.html`
  - HTTP Response Code: 200
  - HTTP Error Code: 404
  - Error Page Path: `/index.html`
  - HTTP Response Code: 200

## Alternative: Using HashRouter

If you want to avoid server-side configuration, you can switch from BrowserRouter to HashRouter in your React app. This will use hash-based routing (e.g., `/#/login`) which doesn't require server configuration.
