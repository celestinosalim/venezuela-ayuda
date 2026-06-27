/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Turbopack ignores unrelated parent lockfiles.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
