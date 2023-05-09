/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  images: {
    domains: [],
    loader: 'imgix',
    path: '/images/thumbs',
  },
  async redirects() {
    return [
      {
        source: '/thumbs/:path*',
        destination: '/images/thumbs/:path*',
        permanent: true,
      },
    ]
  },
  ...nextConfig,
})