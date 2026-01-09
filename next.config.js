/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Enable webpack 5 features
  webpack: (config, { isServer }) => {
    // Add any custom webpack configuration if needed
    return config;
  },
}

module.exports = nextConfig
