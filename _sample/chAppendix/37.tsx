// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rootPaths: ["./src"],
  async headers() {
    return [
      {
        // すべてのページに設定
        source: "/(.*)",
        // 使用するセキュリティヘッダを指定
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          ...
        ],
      },
    ]
  }
}

module.exports = nextConfig