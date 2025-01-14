/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',  // Ensure this matches your GitHub repo name
  assetPrefix: '/portfolio/', // Fixes missing assets issue
  trailingSlash: true, // Fixes static file routing
}

module.exports = nextConfig;
