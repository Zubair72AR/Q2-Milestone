/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Enable SWC-based minification (faster than Terser)
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during production builds
  },
};

export default nextConfig;
