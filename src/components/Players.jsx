import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const Players = () => {
  const {
    toast
  } = useToast();
  const players = [{
    name: "Marco Rossi",
    role: "Capitán del Equipo",
    achievements: "Campeón Nacional 2023",
    ranking: "#1 Club",
    specialty: "Ataque ofensivo",
    icon: Award
  }, {
    name: "Sofia Bianchi",
    role: "Jugadora Destacada",
    achievements: "Subcampeona Regional 2024",
    ranking: "#2 Club",
    specialty: "Defensa estratégica",
    icon: Star
  }, {
    name: "Luca Ferrari",
    role: "Promesa Juvenil",
    achievements: "Mejor Jugador Sub-18",
    ranking: "#3 Club",
    specialty: "Velocidad y reflejos",
    icon: TrendingUp
  }, {
    name: "Giulia Romano",
    role: "Entrenadora Principal",
    achievements: "15 años de experiencia",
    ranking: "Coach",
    specialty: "Desarrollo técnico",
    icon: Award
  }, {
    name: "Alessandro Conti",
    role: "Jugador Veterano",
    achievements: "20+ años en el club",
    ranking: "#4 Club",
    specialty: "Mentoría y táctica",
    icon: Star
  }, {
    name: "Elena Marino",
    role: "Jugadora Emergente",
    achievements: "Revelación del Año 2024",
    ranking: "#5 Club",
    specialty: "Servicio potente",
    icon: TrendingUp
  }];
  const handlePlayerClick = () => {
    toast({
      title: "🚧 Perfil completo próximamente",
      description: "¡Estamos trabajando en los perfiles detallados de nuestros jugadores! 🚀"
    });
  };
  return <section id="jugadores" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="bg-gradient-to-r from-[#009246] to-[#ce2b37] bg-clip-text text-transparent">Jugadores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los talentosos atletas que representan el espíritu y la excelencia de nuestro club
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => {
          const Icon = player.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} onClick={handlePlayerClick} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <img alt={`${player.name} - ${player.role}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://horizons-cdn.hostinger.com/072dea1f-8783-4203-97e4-c7cdb9edab2d/emi-K3JgS.jpg" />
                  <div className="absolute top-4 right-4 flex space-x-1">
                    <div className="w-3 h-3 bg-[#009246] rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-[#ce2b37] rounded-full"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Icon className="w-5 h-5 text-[#009246]" />
                      <span className="text-sm font-medium">{player.ranking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">{player.name}</h3>
                  <p className="text-[#ce2b37] font-semibold mb-3">{player.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-[#009246] mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{player.achievements}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-[#009246] mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{player.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500 group-hover:text-[#009246] transition-colors">
                      Ver perfil completo →
                    </span>
                  </div>
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};
export default Players;