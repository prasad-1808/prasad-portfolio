# Deployment Configuration

## For Vercel
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build/client",
  "framework": "react-router"
}
```

## For Netlify
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "build/client"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## For Railway/Render
No additional config needed, just ensure:
- Node.js version 18+
- Build command: `npm run build`
- Start command: `npm start`
