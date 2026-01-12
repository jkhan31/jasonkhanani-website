/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed 'output: export' to enable ISR (Incremental Static Regeneration)
  // ISR requires Next.js server runtime and is not compatible with static export
  images: {
    unoptimized: true,     // Keep unoptimized for Sanity CDN
    domains: ['cdn.sanity.io'],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig
