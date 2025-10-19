/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    /**
     * Allow SVG optimization for local assets.
     * Safe as long as all SVGs are checked into the repo under /public.
     */
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
