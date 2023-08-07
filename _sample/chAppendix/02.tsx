const HomePage = ({
  bookProducts,
  clothesProducts,
  shoesProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('HomePageコンポーネントの描画で呼ばれたログです')
  ...
}

export async function getStaticProps() {
  ...
  console.log('getStaticProps内で呼ばれたログです')
  ...
}

export default HomePage