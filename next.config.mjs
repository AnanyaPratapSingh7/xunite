/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/xunite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/xunite/' : '',
};

export default nextConfig;
