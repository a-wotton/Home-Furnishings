import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Gallery from './views/Gallery';
import FurnitureDetails from './views/FurnitureDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Gallery />} />
          <Route path="furniture-details" element={<FurnitureDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
