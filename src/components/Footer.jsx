
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Redes sociales próximamente",
      description: "¡Estamos configurando nuestras redes sociales! Vuelve pronto 🚀",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://horizons-cdn.hostinger.com/072dea1f-8783-4203-97e4-c7cdb9edab2d/7b8efb7d4f9f5a2134abd94feb3ef892.jpg" 
                alt="Logo del Circulo Campano TMT" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <span className="text-2xl font-bold">Circulo Campano TMT</span>
            </div>
            <p className="text-gray-400 mb-6">
              Donde la pasión italiana se encuentra con la excelencia del tenis de mesa. Únete a nuestra familia deportiva.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-2 bg-[#009246] rounded"></div>
              <div className="w-8 h-2 bg-white rounded"></div>
              <div className="w-8 h-2 bg-[#ce2b37] rounded"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-xl font-bold mb-6 block">Contacto</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#009246] mt-1 flex-shrink-0" />
                <p className="text-gray-400">Av. Italia 1234, Ciudad</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#009246] mt-1 flex-shrink-0" />
                <p className="text-gray-400">+34 123 456 789</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#009246] mt-1 flex-shrink-0" />
                <p className="text-gray-400">info@circulocampanotmt.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xl font-bold mb-6 block">Síguenos</span>
            <p className="text-gray-400 mb-6">
              Mantente al día con nuestras últimas noticias, eventos y logros.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-700 hover:bg-[#009246] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-700 hover:bg-[#ce2b37] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={handleSocialClick}
                className="w-10 h-10 bg-gray-700 hover:bg-[#009246] rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Circulo Campano TMT. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Hecho con</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#009246] rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-[#ce2b37] rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">y pasión</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
