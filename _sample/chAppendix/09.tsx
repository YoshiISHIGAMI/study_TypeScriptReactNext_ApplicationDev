const SearchPage = () => {
  const jsonld = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    name: 'パンくずリスト',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: { name: 'トップ', '@id': 'https://localhost:3000/' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { name: '検索', '@id': 'https://localhost:3000/search' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          name: 'トップス',
          '@id': 'https://localhost:3000/search/clothes',
        },
      },
    ],
  }

  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
        />
      </Head>
      <ol>
        <li>
          <Link href="/">
            <a>トップ</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>検索</a>
          </Link>
        </li>
        <li>
          <Link href="/search/clothes">
            <a>トップス</a>
          </Link>
        </li>
      </ol>
        ...
    </Layout>
  )
}