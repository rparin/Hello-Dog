/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        pathname: "/breeds/**",
      },
      {
        protocol: "http",
        hostname: "localhost:3000",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
