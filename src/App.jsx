import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Cities from './pages/cities';
import NotFound from './pages/notFound';
import StandarLayout from './layouts/StandardLayout';
import './App.css';

const data = [
  { name: 'Buenos Aires', img: '/images/buenosaires.webp' },
  { name: 'Ciudad de México', img: '/images/ciudadDeMexico.jpg' },
  { name: 'Lima', img: '/images/lima.jpg' },
  { name: 'Cartagena', img: '/images/cartagena.jpg' },
  { name: 'Cabo', img: '/images/ciudadDelCabo.jpg' },
  { name: 'Barcelona', img: '/images/barcelona.jpg' },
  { name: 'Florencia', img: '/images/florencia.jpg' },
  { name: 'Hội An', img: '/images/hoiAn.jpg' },
  { name: 'Cairo', img: '/images/cairo.jpg' },
  { name: 'Chiang Mai', img: '/images/barcelona.jpg' },
  { name: 'Roma', img: '/images/roma.jpg' },
  { name: 'Kioto', img: '/images/kioto.jpg' },
];

function App() {
  return (
    <Router> 
      <Routes>
        <Route element={<StandarLayout />}>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Slider data={data} />
              </>
            } 
          />          
          <Route path="/cities" element={<cities />} />
          <Route path="*" element={<notFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
