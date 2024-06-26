/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL,
    APP_NAME: process.env.APP_NAME,
    IMAGE_URL: process.env.IMAGE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_URL, 
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.IMAGE_URL}/uploads/:path*`,
      },
    ]
  }
}

module.exports = nextConfig
