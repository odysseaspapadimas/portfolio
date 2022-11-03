/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 images: {
    domains: ['media4.giphy.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
