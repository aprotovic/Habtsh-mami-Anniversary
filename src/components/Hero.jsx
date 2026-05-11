import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="hero" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("/assets/image2.png") no-repeat center top/cover',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cinematic Vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle, transparent 20%, rgba(0, 0, 0, 0.4) 100%)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 2, padding: '20px', marginTop: '250px' }}
      >
        <motion.h2 
          variants={itemVariants}
          style={{
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            color: '#D4AF37',
            marginBottom: '10px',
            fontWeight: 500,
            fontFamily: "'Playfair Display', serif",
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Happy 13th Anniversary
        </motion.h2>
        
        <motion.h1 
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            color: '#FFFFFF',
            marginBottom: '15px',
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 10px 20px rgba(0,0,0,0.5)'
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-block' }}
          >
            ሃብትሽ
          </motion.span>
          {' '}
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: '#C41E3A', display: 'inline-block' }}
          >❤️</motion.span>
          {' '}
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-block' }}
          >
            ማሚ
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          style={{
            fontSize: '1.1rem',
            color: '#f0f0f0',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: 300,
            letterSpacing: '1px',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            opacity: 0.9
          }}
        >
          13 Years of Love, Laughter & Beautiful Memories Together
        </motion.p>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ marginTop: '50px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span style={{ fontSize: '0.9rem', letterSpacing: '2px', color: '#ccc', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '20px', height: '2px', background: '#D4AF37', margin: '10px auto' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
