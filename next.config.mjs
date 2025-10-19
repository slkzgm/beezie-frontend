import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Force Next.js to treat this directory as the workspace root.
   * Prevents warnings when another pnpm-lock.yaml exists up the tree.
   */
  outputFileTracingRoot: path.join(__dirname),
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
