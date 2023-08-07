const SearchPage = () => {
  return (
    <Layout>
      ...
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <Link href="/">
            <a itemprop="item">
              <span itemprop="name">
                トップ
              </span>
            </a>
            <meta itemprop="position" content="1" />
          </Link>
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <Link href="/search">
            <a itemprop="item">
              <span itemprop="name">
                検索
              </span>
            </a>
            <meta itemprop="position" content="2" />
          </Link>
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <Link href="/search/clothes">
            <a itemprop="item">
              <span itemprop="name">
                トップス
              </span>
            </a>
            <meta itemprop="position" content="3" />
          </Link>
        </li>
      </ol>
        ...
    </Layout>
  )
}