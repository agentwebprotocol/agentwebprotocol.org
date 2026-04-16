import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin workspace root so Turbopack doesn't walk up to ~/ and pick up a
  // stray package-lock.json as the root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
