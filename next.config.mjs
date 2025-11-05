/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // output: 'export', // Commented out for dev mode
  // trailingSlash: true,
  // basePath: '/vibecode2025', // Commented out for dev mode
  // assetPrefix: '/vibecode2025', // Commented out for dev mode
}

export default nextConfig
