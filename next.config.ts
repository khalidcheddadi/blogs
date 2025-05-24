import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  typescript: {
    // تعطل الخطأ عند وجود أخطاء TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
