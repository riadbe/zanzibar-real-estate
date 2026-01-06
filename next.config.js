/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'ipfs.io', 'gateway.pinata.cloud', 'images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_INFURA_KEY: process.env.INFURA_KEY,
    NEXT_PUBLIC_CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  },
};

module.exports = nextConfig;
