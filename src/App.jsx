
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import History from '@/components/History';
import Gallery from '@/components/Gallery';
import Players from '@/components/Players';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Circulo Campano TMT - Pasión por el Ping Pong</title>
        <meta name="description" content="Descubre nuestro club de tenis de mesa Circulo Campano TMT. Conoce nuestra historia, jugadores destacados y únete a nuestra comunidad deportiva." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <History />
              <Gallery />
              <Players />
            </>
          } />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
