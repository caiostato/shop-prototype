/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "fakestoreapi.com",
  //       port: "",
  //       pathname: "/products",
  //     },
  //   ],
  // },
  reactStrictMode: true,
  env: {
    NEXT_MONGO_URL: process.env.NEXT_MONGO_URL,
  },
};

module.exports = nextConfig;
