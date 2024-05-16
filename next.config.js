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
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
};

module.exports = nextConfig;
