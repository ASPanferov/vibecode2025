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
  // Temporary disable for local testing
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/vibecode2025',
  // assetPrefix: '/vibecode2025',
}

export default nextConfig
