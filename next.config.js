/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
  {
    source: "/public/Map.html",
    source: "/public/simple-pie.html",
    destination: "/pages/api/myfile.js",
  },
],
}

module.exports = nextConfig
