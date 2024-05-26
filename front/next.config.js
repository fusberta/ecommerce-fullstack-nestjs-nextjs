/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL,
    APP_NAME: process.env.APP_NAME,
  },
  images: {
    // remotePatterns: ['loremflickr.com', 'istoreapple.ru', 'static.insales-cdn.com', 'picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'istoreapple.ru',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'static.insales-cdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `http://localhost:4200/uploads/:path*`,
      },
    ]
  }
}

module.exports = nextConfig
