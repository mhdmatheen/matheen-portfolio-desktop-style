import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your other config options
  reactStrictMode: true, // optional
  swcMinify: true,       // optional
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development", // disable in dev mode
  },
});
