/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config options

  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Accept-CH',
            value: 'Sec-CH-Partitioned-Cookies'
          },
          {
            key: 'Critical-CH',
            value: 'Sec-CH-Partitioned-Cookies'
          },
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=(), interest-cohort=(), third-party-cookies=()'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;