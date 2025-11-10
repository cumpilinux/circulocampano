
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      title: "Torneo Anual 2024",
      description: "Competencia intensa entre nuestros mejores jugadores"
    },
    {
      title: "Entrenamiento Juvenil",
      description: "Formando a la próxima generación de campeones"
    },
    {
      title: "Instalaciones Modernas",
      description: "Mesas profesionales y equipamiento de primera"
    },
    {
      title: "Celebración de Victoria",
      description: "Momentos inolvidables con nuestro equipo"
    },
    {
      title: "Sesión de Práctica",
      description: "Perfeccionando técnicas y estrategias"
    },
    {
      title: "Evento Comunitario",
      description: "Unidos por la pasión del tenis de mesa"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#009246] to-[#ce2b37] bg-clip-text text-transparent">Galería</span> de Momentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturando la emoción, la pasión y el compañerismo que define a nuestro club
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#009246] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-8 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-12 w-3 h-3 bg-[#ce2b37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
