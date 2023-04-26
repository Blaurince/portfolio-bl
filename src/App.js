
import './App.css';
import About from './components/About';
import Gallery from './components/Gallery/GalleryCard';
import Footer from './components/Footer';
import Skill from './components/Skill';
import List from './components/List';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <About />
    <Header />
      <Footer />
      <Gallery />
      <Skill />
      </header>
    </div>
  );
}

export default App;
