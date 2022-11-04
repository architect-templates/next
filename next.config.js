/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // https://github.com/vercel/next.js/tree/canary/examples/with-docker#using-docker
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.architect.io',
      },
    ],
  },
}

module.exports = nextConfig
