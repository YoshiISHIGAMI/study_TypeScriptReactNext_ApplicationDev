...
import logger from 'utils/logger'

const HomePage = ({
  bookProducts,
  clothesProducts,
  shoesProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  ...
  logger.info('HomePageコンポーネントの描画関数内で呼ばれたログです')
  ...
}

export async function getStaticProps() {
  ...
  logger.info('getStaticProps内で呼ばれたログです')
  ...
}

export default HomePage