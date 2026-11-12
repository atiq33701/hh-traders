/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Old links keep working after the Caltex and Guard pages were renamed
  async redirects() {
    return [
      {
        source: "/products/caltex-delo",
        destination: "/products/caltex",
        permanent: true,
      },
      {
        source: "/products/guard-filter",
        destination: "/products/guard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
