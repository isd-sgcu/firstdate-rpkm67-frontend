/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  output: 'standalone',
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.BASE_DOMAIN_IMAGES ?? '*',
      },
      {
        protocol: 'https',
        hostname: 'rpkm67.spg1.cdn.digitaloceanspaces.com',
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
