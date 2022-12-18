/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    transpilePackages: ["@chakra-ui/react", "ipfs-http-client"],
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["polyplace.infura-ipfs.io", "loremflickr.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.infura-ipfs.io",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
