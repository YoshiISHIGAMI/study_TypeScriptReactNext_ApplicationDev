# すべてのクローラーを許可
User-agent: *
# http://localhost:3000/cart以下のページに訪れることを禁止する
Disallow: http://localhost:3000/cart
# http://localhost:3000/products/以下のページに訪れることを許可する
Allow: http://localhost:3000/products/
# SitemapのURLを指定する
Sitemap: http://localhost:3000/sitemap.xml