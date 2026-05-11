import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="message-section" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <motion.div 
          className="message-card glass"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(15px)',
            borderRadius: '24px',
            padding: '60px 40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Corner Borders */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '3px solid var(--gold)', borderLeft: '3px solid var(--gold)', borderRadius: '15px 0 0 0' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '3px solid var(--gold)', borderRight: '3px solid var(--gold)', borderRadius: '0 0 15px 0' }}></div>

          <motion.div variants={itemVariants} className="message-content">
            <h3 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: '1.8rem', 
              color: 'var(--romantic-red)', 
              marginBottom: '30px'
            }}>
              “ለተወደደው ወንድሜ ሃብትሽ እና ለውድ ባለቤቱ ማሚ እንኳን ለ13ኛ ዓመት የጋብቻ በዓላችሁ በሰላም አደረሳችሁ! 🎉❤️🥂
            </h3>
            
            <div style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
              <motion.p variants={itemVariants} style={{ marginBottom: '15px' }}>
                ከፊት ለፊታችሁ ብዙ የፍቅር፣ የደስታ፣ የሳቅ እና የቆንጆ ትውስታ ዓመታትን እመኝላችኋለሁ 💕✨
              </motion.p>
              <motion.p variants={itemVariants} style={{ marginBottom: '15px' }}>
                13 ዓመት በትዳር ውስጥ መቆየት ትልቅ ስኬት ነው፣ የእናንተ ግንኙነት ለሁላችንም ትልቅ አርአያ ነው 🤗💍
              </motion.p>
              <motion.p variants={itemVariants} style={{ marginBottom: '15px' }}>
                የእናንተ ፍቅር ለሁላችንም በተለይም ለእኔ ትልቅ መነሳሳት ነው ❤️🙏🏽
              </motion.p>
              <motion.p variants={itemVariants} style={{ marginBottom: '15px' }}>
                እርስ በእርሳችሁ የምትደጋገፉበት፣ የምትከባበሩበት እና የምትተሳሰቡበት መንገድ በእውነት ውብ ነው 🌹💖
              </motion.p>
              <motion.p variants={itemVariants} style={{ marginBottom: '15px' }}>
                ፍቅራችሁ በየቀኑ እየጠነከረ እንዲሄድ፣ ቤታችሁም ሁልጊዜ በሰላም፣ በደስታ እና በበረከት እንዲሞላ እመኛለሁ 🏡✨
              </motion.p>
              <motion.p variants={itemVariants} style={{ marginBottom: '30px', fontWeight: 600 }}>
                በልዩ ቀናችሁ ተደሰቱ፣ አብራችሁ ያሳለፋችሁትን አስደናቂ ጉዞም አክብሩ 🎂🎊🍾💞”
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants} style={{ marginTop: '20px' }}>
              <div style={{ width: '60px', height: '1px', background: 'var(--gold)', margin: '0 auto 20px' }}></div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#333' }}>
                በብዙ ፍቅር፣ ወንድማችሁ
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
