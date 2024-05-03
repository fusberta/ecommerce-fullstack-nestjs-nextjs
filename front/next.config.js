/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL,
        APP_NAME: process.env.APP_NAME,
    },
    images: {
        domains: ['loremflickr.com', 'istoreapple.ru', 'static.insales-cdn.com'],
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
