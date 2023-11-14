// next.config.js
module.exports = {
  images: {
    domains: ['beta.walmartvriddhi.org','walmartvriddhi.vercel.app','walmartvriddhi.org'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
