import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Particle = ({ id, x, delay, size, duration }) => {
  return (
    <motion.div
      initial={{ y: '110vh', x: x, opacity: 0, rotate: 0 }}
      animate={{ 
        y: '-10vh', 
        opacity: [0, 0.8, 0],
        rotate: 360
      }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: 'fixed',
        zIndex: 0,
        pointerEvents: 'none',
        fontSize: size,
        color: 'var(--gold)'
      }}
    >
      {Math.random() > 0.5 ? '❤️' : '✨'}
    </motion.div>
  );
};

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}vw`,
      delay: Math.random() * 20,
      size: `${10 + Math.random() * 20}px`,
      duration: 15 + Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {particles.map(p => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
};

export default Particles;
