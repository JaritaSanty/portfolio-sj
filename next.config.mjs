/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "santiagojaramoya.info" },
      { protocol: "https", hostname: "santiagojaramoya.com" },
    ],
  },
};

export default nextConfig;
