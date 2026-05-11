import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '80px 0', 
      background: '#1a1a1a', 
      color: 'white', 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '8px'
          }}>
            Made with <Heart size={20} fill="#C41E3A" color="#C41E3A" /> የፍቅር ጉዞአችሁን የመሰከረ ጎይትኦም
          </p>
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#888', 
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            ግንቦት 3 2005 — ለዘላለም
          </p>
          
          <div style={{ 
            marginTop: '40px', 
            fontSize: '0.8rem', 
            color: '#444' 
          }}>
            © {new Date().getFullYear()} እንኳን ደስ አላችሁ🎂
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
