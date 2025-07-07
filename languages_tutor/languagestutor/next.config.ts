import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'],
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
