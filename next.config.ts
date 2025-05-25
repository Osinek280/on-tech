// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.on-tech.net.pl",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
