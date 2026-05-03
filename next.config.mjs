/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure that Framer Motion works with Next.js App Router
  transpilePackages: ['lucide-react'],
};

export default nextConfig;
