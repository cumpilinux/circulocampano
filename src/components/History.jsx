
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, Heart } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      year: "1998",
      title: "Fundación del Club",
      description: "Un grupo de apasionados del tenis de mesa con raíces italianas fundó nuestro club.",
      icon: Heart
    },
    {
      year: "2005",
      title: "Primer Campeonato",
      description: "Ganamos nuestro primer campeonato regional, marcando el inicio de una era dorada.",
      icon: Trophy
    },
    {
      year: "2012",
      title: "Expansión",
      description: "Inauguramos nuevas instalaciones con 8 mesas profesionales y área de entrenamiento.",
      icon: Target
    },
    {
      year: "2024",
      title: "Comunidad Creciente",
      description: "Más de 150 miembros activos y programas para todas las edades.",
      icon: Users
    }
  ];

  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra <span className="bg-gradient-to-r from-[#009246] to-[#ce2b37] bg-clip-text text-transparent">Historia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde nuestros humildes comienzos hasta convertirnos en uno de los clubes más prestigiosos de la región
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#009246]"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#009246] to-[#ce2b37] p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-[#ce2b37] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#009246] via-gray-700 to-[#ce2b37] p-8 rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Tradición Italiana, Excelencia Deportiva</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Nuestro club combina la pasión y el espíritu competitivo italiano con la disciplina del tenis de mesa, 
            creando un ambiente único donde jugadores de todos los niveles pueden crecer y prosperar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
