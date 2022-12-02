/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    transpilePackages: [
      "@web3modal/ethereum",
      "@web3modal/react",
      "@web3modal/ui",
      "@web3modal/core",
    ],

    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["polyplace.infura-ipfs.io", "loremflickr.com"],
  },
};

module.exports = nextConfig;
