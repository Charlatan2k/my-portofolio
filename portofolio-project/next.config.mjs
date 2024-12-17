/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/my-portofolio/' : '',
  basePath: isProd ? '/my-portofolio' : '',
  output: 'export',
};

export default nextConfig;
