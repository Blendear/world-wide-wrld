/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/starting-page",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["https://new-dish-form-rho.vercel.app/dish-form"],
    // hook1 - /\ update with link to the websit eof this project, so that images are loaded on the live website too
  },
};

module.exports = nextConfig;
