/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  turbopack: {
    rules: {
      "*.mp3": {
        type: "asset",
      }
    }
  }
};

module.exports = nextConfig;
