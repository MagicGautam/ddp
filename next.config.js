/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/posts', // Replace with your API route path
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
      // Add more routes if needed
    ];
  },
}

module.exports = nextConfig;