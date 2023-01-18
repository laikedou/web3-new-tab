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

module.exports = () => {
  if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
      `${process.env.PWD}/node_modules/canvas/build/Release:`
    )
  ) {
    process.env.LD_LIBRARY_PATH = `${
      process.env.PWD
    }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
  }
  return nextConfig;
};
