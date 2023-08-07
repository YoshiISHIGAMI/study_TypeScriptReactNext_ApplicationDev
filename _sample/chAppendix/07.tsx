...
import Head from 'next/head'

const HomePage = ({
  bookProducts,
  clothesProducts,
  shoesProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>
      <Head>
        <title>Gihyo C2C</title>
        <meta
          name="description"
          content="Gihyo C2Cは実践的なNext.jsアプリケーション開発で使われるデモアプリです。"
        />
        <meta property="og:site_name" content="Gihyo C2C" />
        <meta property="og:title" content="Gihyo C2Cのトップページ" />
        <meta
          property="og:description"
          content="Gihyo C2Cは実践的なNext.jsアプリケーション開発で使われるデモアプリです。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta
          property="og:image"
          content="http://localhost:3000/thumbnail.png"
        />
        <meta property="og:locale" content="ja_JP" />
      </Head>
      <Layout>
      ...
      </Layout>
    </React.Fragment>
  )
}
...