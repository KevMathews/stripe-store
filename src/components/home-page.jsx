import Hero from './hero/hero';
import Layout from './shared/layout';
import MainSection from './main-section/main-section';
import FeaturedCollection from './featured-collection/featured-collection';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  )
}

export default HomePage;