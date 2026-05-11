import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const symbols = ["❤️", "✨", "🌸", "💛", "🌹"];

const Particle = ({ x, delay, size, duration, symbol, drift, opacity }) => {
  return (
    <motion.div
      initial={{ y: "110vh", x, opacity: 0, rotate: 0 }}
      animate={{
        y: "-12vh",
        x: `calc(${x} + ${drift}px)`,
        opacity: [0, opacity, opacity * 0.7, 0],
        rotate: [0, 90, 220, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "fixed",
        zIndex: 0,
        pointerEvents: "none",
        fontSize: size,
        filter: "drop-shadow(0 8px 18px rgba(212,175,55,0.16))",
        willChange: "transform, opacity",
      }}
    >
      {symbol}
    </motion.div>
  );
};

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}vw`,
      delay: Math.random() * 18,
      size: `${12 + Math.random() * 22}px`,
      duration: 18 + Math.random() * 16,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      drift: -80 + Math.random() * 160,
      opacity: 0.28 + Math.random() * 0.42,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
    >
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  );
};

export default Particles;
