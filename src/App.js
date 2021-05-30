import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section';
import FeaturedCollection from './components/featured-collection/featured-collection';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
      <Footer />
    </div>
  );
}

export default App;
