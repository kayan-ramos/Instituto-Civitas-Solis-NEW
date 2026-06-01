import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TrabalhoGlobal from './pages/TrabalhoGlobal';
import MissaoVisaoValores from './pages/MissaoVisaoValores';
import Instagram from './pages/Instagram';
import Contato from './pages/Contato';
import Livro from './pages/Livro';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabalho-global" element={<TrabalhoGlobal />} />
            <Route path="/missao-visao-valores" element={<MissaoVisaoValores />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/livro" element={<Livro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;