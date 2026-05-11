import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div style={{
      display: 'flex',
      justifyContent: isEven ? 'flex-start' : 'flex-end',
      width: '100%',
      marginBottom: '50px',
      position: 'relative'
    }}>
      {/* Central Line Dot */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '16px',
        height: '16px',
        background: 'var(--gold)',
        borderRadius: '50%',
        border: '4px solid white',
        boxShadow: '0 0 0 4px rgba(212, 175, 55, 0.2)',
        zIndex: 2
      }}></div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: '45%',
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          textAlign: isEven ? 'right' : 'left',
          border: '1px solid rgba(0,0,0,0.02)'
        }}
      >
        <span style={{
          color: 'var(--gold)',
          fontWeight: 600,
          fontSize: '0.9rem',
          letterSpacing: '2px',
          display: 'block',
          marginBottom: '10px'
        }}>
          {date}
        </span>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          marginBottom: '10px',
          color: '#2c2c2c'
        }}>
          {title}
        </h3>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          {description}
        </p>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const items = [
    {
      date: "ግንቦት 3 2005",
      title: "የፍቅር ጉዞ መጀመሪያ",
      description: "ሁለት ልቦች አንድ ሆነው አስደናቂ ጉዞ የጀመሩበት። ለዘላለም ፍቅርና አብሮነት ቃል የተገባበት።"
    },
    {
      date: "The Growth",
      title: "ፍቅር የተገነባበት ቤት",
      description: "ልቦችን በፍቅር፣ በክብር እና በጋራ ህልሞች የሞላው። እጅ ለእጅ ተያይዞ የህይወት ፈተናዎችን ማለፍ።"
    },
    {
      date: "ቤተሰብን ማሳደግ",
      title: "ልጆች መውለድ",
      description: "በቤተሰባችን ህይወት የደስታ እና የፍቅር የመጨመር ጊዜ  ።"
    },
    {
      date: "ዛሬ ግንቦት 3 2018",
      title: "13 ዓመታት ሆነን ዛሬ",
      description: "ለዘላለም አብረን የምንኖርበት ቃልኪዳን የፈጸምንበት 13ኛ ዓመት"
    }
  ];

  return (
    <section className="timeline-section" style={{ padding: '100px 0', background: 'var(--cream)', overflow: 'hidden' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '80px'
          }}
        >
          13 Beautiful Years Together
        </motion.h2>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Central Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}></div>

          {items.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
