/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.BASE_DOMAIN_IMAGES ?? '*',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_FIRST_DATE_DATE: process.env.FIRST_DATE_DATE,
    NEXT_PUBLIC_RUP_PEUN_DATE: process.env.RUP_PEUN_DATE,
  },
};

export default nextConfig;
