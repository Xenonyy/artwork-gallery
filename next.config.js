const { withPlugins, optional } = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  i18n: {
    localeDetection: false,
    locales: ['en'],
    defaultLocale: 'en',
  },
  eslint: {
    dirs: ['src'],
  },
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['www.artic.edu'],
  },
};

const plugins = [
  [
    optional(() =>
      require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      }),
    ),
    {},
    [PHASE_PRODUCTION_BUILD],
  ],
];

module.exports = withPlugins(plugins, nextConfig);
