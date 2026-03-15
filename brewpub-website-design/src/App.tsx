import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cervejas from './pages/Cervejas';
import BeerCategory from './pages/BeerCategory';
import Menu from './pages/Menu';
import Brewpub from './pages/Brewpub';
import Eventos from './pages/Eventos';
import Reservas from './pages/Reservas';
import Contacto from './pages/Contacto';

export function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#1a1a1a', minHeight: '100vh' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cervejas" element={<Cervejas />} />
            <Route path="/cervejas/:category" element={<BeerCategory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/brewpub" element={<Brewpub />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* 404 */}
            <Route path="*" element={
              <div style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#d97706', fontSize: '6rem', fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: 1 }}>404</p>
                  <h2 style={{ color: '#fef3c7', fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Página não encontrada</h2>
                  <p style={{ color: '#fef3c7', opacity: 0.5, marginBottom: '2rem', fontSize: '0.9rem' }}>A cerveja que procuras não existe... mas temos muitas outras!</p>
                  <a href="/" className="btn-primary">Voltar ao Início</a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
