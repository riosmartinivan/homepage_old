/** @type {import('next').NextConfig} */
module.exports = async () => {
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    experimental: {
      appDir: true,
    },
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development",
      emotion: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "http.cat",
          port: "",
          pathname: "/**",
        },
      ],
    },
  }

  // noinspection JSMismatchedCollectionQueryUpdate
  const plugins = []

  return plugins.reduce((config, plugin) => plugin(config), nextConfig)
}
