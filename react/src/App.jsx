import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './views/Header';
import Footer from './views/Footer';
import Home from './views/home';
import Gallery from './views/Gallery';
import FurnitureDetails from './views/FurnitureDetails';
import '../css/main.css';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Gallery />} />
          <Route path="/furniture-details" element={<FurnitureDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
