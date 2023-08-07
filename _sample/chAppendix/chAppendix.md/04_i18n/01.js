/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // サポートしたい言語
    locales: ['ja', 'en'],
    // デフォルトで表示したい言語
    defaultLocale: 'jp',
    // ドメインで分ける場合はドメインごとの設定を記述する
    domains: [
      {
        domain: 'example.jp',
        defaultLocale: 'ja',
      },
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
    ],
  }
}

module.exports = nextConfig
