
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/072dea1f-8783-4203-97e4-c7cdb9edab2d/7b8efb7d4f9f5a2134abd94feb3ef892.jpg" 
              alt="Logo del Circulo Campano TMT" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#009246] via-gray-700 to-[#ce2b37] bg-clip-text text-transparent">
              Circulo Campano TMT
            </span>
          </motion.div>

          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('historia')} className="text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Historia
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Galería
            </button>
            <button onClick={() => scrollToSection('jugadores')} className="text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Jugadores
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('historia')} className="block w-full text-left py-2 text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Historia
            </button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left py-2 text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Galería
            </button>
            <button onClick={() => scrollToSection('jugadores')} className="block w-full text-left py-2 text-gray-700 hover:text-[#009246] transition-colors font-medium">
              Jugadores
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
