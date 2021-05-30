import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section';
import FeaturedCollection from './components/featured-collection/featured-collection';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </div>
  );
}

export default App;
