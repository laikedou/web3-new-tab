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
      "@chakra-ui/react",
    ],

    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["polyplace.infura-ipfs.io", "loremflickr.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ipfs.w3s.link",
      },
    ],
  },
};

module.exports = nextConfig;
