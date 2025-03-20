import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import type { Module } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    // Optimize formats - prioritize AVIF for better compression
    formats: ['image/avif', 'image/webp'],
    
    // Optimize device sizes for common breakpoints and high-DPI displays
    deviceSizes: [
      640,  // sm
      768,  // md
      1024, // lg
      1280, // xl
      1536, // 2xl
      1920, // FHD
      2048, // 2K
      2560, // QHD
      3840, // 4K
    ],
    
    // Optimize thumbnail sizes
    imageSizes: [
      16,   // tiny thumbnails
      32,   // favicons
      48,   // small avatars
      64,   // medium avatars
      96,   // large avatars
      128,  // small thumbnails
      256,  // medium thumbnails
      384,  // large thumbnails
    ],
    
    // Remote patterns with strict domain allowlist
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'melkentech.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.melkentech.com',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: '**.melkentech.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    
    // Aggressive caching for static images
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    
    // SVG handling with security measures
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://challenges-api.cloudflare.com https://*.cloudflare.com; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https://challenges.cloudflare.com https://*.cloudflare.com; worker-src 'self' blob:;",
    
    // Limit maximum image dimension
    domains: [], // Deprecated: use remotePatterns instead
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  
  // Add response headers for better caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.cloudflare.com; style-src 'self' 'unsafe-inline' https://*.cloudflare.com; img-src 'self' data: https://*.cloudflare.com; font-src 'self' data:; connect-src 'self' https://*.cloudflare.com; frame-src 'self' https://*.cloudflare.com; worker-src 'self' blob:; frame-ancestors 'self';"
          },
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=(), interest-cohort=()'
          },
          {
            key: 'Accept-CH',
            value: 'Sec-CH-Partitioned-Cookies'
          },
          {
            key: 'Vary',
            value: 'Sec-CH-Partitioned-Cookies'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ];
  },
  
  // Optimize build output
  output: 'standalone',
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Experimental features
  experimental: {
    // CSS optimization
    optimizeCss: {
      cssModules: true,
      inlineThreshold: 3000, // inline if smaller than 3kb
      critters: {
        preload: 'media',
        pruneSource: true,
        reducedInlineStyles: true,
      },
    },
    
    // Turbo pack configuration
    turbo: {
      rules: {
        '*.test.*': ['ignore'],
        '*.spec.*': ['ignore'],
        '*.stories.*': ['ignore'],
        '*.min.*': ['raw'], // Skip processing for minified files
        '*.bundle.*': ['raw'], // Skip processing for bundled files
      },
      loaders: {
        '.svg': ['@svgr/webpack'],
        '.png': ['url-loader'],
        '.jpg': ['url-loader'],
        '.gif': ['url-loader'],
        '.woff2': ['url-loader'],
      },
    },
    
    // Additional experimental features
    scrollRestoration: true,
    optimisticClientCache: true,
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['melkentech.com']
    },
    optimizePackageImports: [
      'react-dom',
      'framer-motion',
      '@hotjar/browser',
      '@supabase/supabase-js',
    ],
    webpackBuildWorker: true,
  },
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|framer-motion)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module: Module) {
                const context = module.context;
                if (!context) return 'unknown';
                const match = context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                return match ? `npm.${match[1].replace('@', '')}` : 'unknown';
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
            shared: {
              name: 'shared',
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug'],
              },
              mangle: true,
              module: true,
            },
          }),
        ],
      };
      config.ignoreWarnings = [
        { module: /node_modules\/@marsidev\/react-turnstile/ },
        { message: /Quirks Mode/ },
        { message: /StorageType\.persistent is deprecated/ }
      ];
    }
    return config;
  },
  
  // Route prefetching behavior
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 5,
  },
};

// Enable bundle analysis in development
export default bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})(nextConfig);
