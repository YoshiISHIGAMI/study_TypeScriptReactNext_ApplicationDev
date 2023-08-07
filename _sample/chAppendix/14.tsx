# 画像用のGoogle botには/users以下のページに訪れることを禁止する
User-agent: Googlebot-Image
Disallow: http://localhost:3000/users

# すべてのクローラーに対して有効なルール
User-agent: *
Allow: /

Sitemap: http://localhost:3000/sitemap.xml