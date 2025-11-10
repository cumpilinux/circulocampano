import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Hero = () => {
  const {
    toast
  } = useToast();
  const handleJoinClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀"
    });
  };
  return <section id="inicio" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#009246]/10 via-white to-[#ce2b37]/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#009246] rounded"></div>
              <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded"></div>
              <div className="w-8 h-8 bg-[#ce2b37] rounded"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bienvenido al <span className="bg-gradient-to-r from-[#009246] via-gray-700 to-[#ce2b37] bg-clip-text text-transparent">Circulo Campano TMT</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Donde la pasión italiana se encuentra con el tenis de mesa. Únete a nuestra familia deportiva y vive la emoción del ping pong.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleJoinClick} className="bg-[#009246] hover:bg-[#007a3a] text-white px-8 py-6 text-lg">
                Únete al Club
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('historia').scrollIntoView({
              behavior: 'smooth'
            })} className="border-[#ce2b37] text-[#ce2b37] hover:bg-[#ce2b37] hover:text-white px-8 py-6 text-lg">
                Nuestra Historia
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Jugadores de tenis de mesa en acción durante un partido competitivo" src="https://horizons-cdn.hostinger.com/072dea1f-8783-4203-97e4-c7cdb9edab2d/portadocirculocampano-tN9Vm.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#009246]/30 to-transparent"></div>
            </div>
            
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 0.5,
            type: "spring"
          }} className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-4 border-[#ce2b37]">
              <div className="text-4xl font-bold text-[#009246]">25+</div>
              <div className="text-gray-600 font-medium">Años de Historia</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;