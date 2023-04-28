/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "super-space-defenders.s3.amazonaws.com",
      "super-space-defenders-unrevealed.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
