import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Header from './views/Header';
import Footer from './views/Footer';
import Home from './views/home';
import Gallery from './views/Gallery';
import About from './views/About';
import FurnitureDetails from './views/FurnitureDetails';
import '../css/main.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Gallery />} />
          <Route path ="/about" element={<About />} />
          <Route path="/furniture-details" element={<FurnitureDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
