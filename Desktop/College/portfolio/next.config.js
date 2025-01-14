/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',  // Ensure this matches your GitHub repo name
  assetPrefix: '/portfolio/',
}

module.exports = nextConfig;
