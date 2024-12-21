/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV ===  "production";
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true},
  // assetPrefix: isProd ? '/iranfromiran.github.io/' : '',
  // basePath: isProd ? '/iranfromiran.github.io' : '',
  output: 'export',
}

// export default nextConfig;
module.exports = nextConfig
