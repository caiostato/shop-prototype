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
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

module.exports = nextConfig;
