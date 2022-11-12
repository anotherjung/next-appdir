/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    allowMiddlewareResponseBody: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders 
      },
    ]
  },
}

const securityHeaders = [
  {  key: 'X-DNS-Prefetch-Control', value: 'on'},
    {
     key: 'Strict-Transport-Security',
     value: 'max-age=63072000; includeSubDomains; preload'
   },
   {
     key: 'X-XSS-Protection',
     value: '1'
   },
   {
     key: 'X-Frame-Options',
     value: 'SAMEORIGIN'
   },
   {
     key: 'X-Content-Type-Options',
     value: 'nosniff'
   },
   {
     key: 'Referrer-Policy',
     value: 'strict-origin'
   }
 ]

module.exports = nextConfig
