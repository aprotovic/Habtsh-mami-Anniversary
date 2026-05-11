import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ target, label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target.replace(/,/g, ''));
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end) > 10 ? (totalMiliseconds / end) : 10;
      let step = Math.ceil(end / (totalMiliseconds / incrementTime));

      let timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="counter-item" style={{ textAlign: 'center', padding: '20px' }}>
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
          fontWeight: 700, 
          color: 'var(--gold)',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '10px'
        }}
      >
        {count.toLocaleString()}
      </motion.div>
      <div style={{ 
        textTransform: 'uppercase', 
        letterSpacing: '3px', 
        fontSize: '0.9rem', 
        color: '#666' 
      }}>
        {label}
      </div>
    </div>
  );
};

const Counter = () => {
  const startDate = new Date('2013-05-11');
  const today = new Date();
  
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.44); // Average month length
  const diffYears = Math.floor(diffDays / 365.25);

  return (
    <section className="counter-section" style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            fontSize: '2rem', 
            fontFamily: "'Playfair Display', serif", 
            marginBottom: '60px',
            color: '#2c2c2c'
          }}
        >
          Our Love Story in Numbers
        </motion.h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <CounterItem target={diffYears.toString()} label="Years" />
          <CounterItem target={diffMonths.toString()} label="Months" />
          <CounterItem target={diffDays.toString()} label="Days" />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            marginTop: '40px', 
            fontStyle: 'italic', 
            color: '#999' 
          }}
        >
          ... እና አሁንም በየሰከን ቆጥራችሁ የቀጠላችሁ።
        </motion.p>
      </div>
    </section>
  );
};

export default Counter;
