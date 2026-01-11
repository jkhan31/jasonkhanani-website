/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',        // Enable static HTML export
  images: {
    unoptimized: true,     // Required for static export (no Image Optimization API)
    domains: ['cdn.sanity.io'],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,     // Better compatibility for static sites
}

module.exports = nextConfig
