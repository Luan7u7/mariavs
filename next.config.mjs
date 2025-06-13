/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProduction ? "/mariavs" : "",
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // images: {
  //   unoptimized: true,
  // },
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
