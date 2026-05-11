import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/assets/image2.png", alt: "Anniversary Cake", title: "Celebration Cake", zoom: 1, position: 'center top' },
    { src: "/assets/Amu & aku.jpg", alt: "Amu & aku", title: "Family Love", zoom: 1.1 },
    { src: "/assets/Picture-2026-05-11 20.58.37.jpg", alt: "Memory 1", title: "Eternal Bond", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 20.59.22.jpg", alt: "Memory 2", title: "Sweet Moments", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 20.59.45.jpg", alt: "Memory 3", title: "Beautiful Journey", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 20.59.58.jpg", alt: "Memory 4", title: "Together Always", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.00.15.jpg", alt: "Memory 5", title: "Life's Blessing", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.22.06.jpg", alt: "Memory 6", title: "Happy Times", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.22.08.jpg", alt: "Memory 7", title: "Shared Laughter", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.22.09.jpg", alt: "Memory 8", title: "Growing Together", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.22.10.jpg", alt: "Memory 9", title: "Home of Love", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.22.20.jpg", alt: "Memory 10", title: "Our Children", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.23.20.jpg", alt: "Memory 11", title: "Family Bond", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.36.32.jpg", alt: "Memory 12", title: "Golden Memories", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.37.06.jpg", alt: "Memory 13", title: "Precious Moments", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.37.53.jpg", alt: "Memory 14", title: "Love's Light", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.38.28.jpg", alt: "Memory 15", title: "Joyful Hearts", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.46.33.jpg", alt: "Memory 16", title: "Graceful Years", zoom: 1.3 },
    { src: "/assets/Picture-2026-05-11 21.46.50.jpg", alt: "Memory 17", title: "Forever Love", zoom: 1.3 }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImg(images[index]);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIdx);
    setSelectedImg(images[nextIdx]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIdx);
    setSelectedImg(images[prevIdx]);
  };

  return (
    <section className="gallery-section" style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            fontFamily: "'Playfair Display', serif", 
            marginBottom: '60px' 
          }}
        >
          Captured Memories
        </motion.h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  filter: 'saturate(1.4) brightness(1.1) contrast(1.15) sepia(0.05)', // High-def 4K look
                  transform: `scale(${img.zoom || 1})`,
                  objectPosition: img.position || 'center center'
                }}
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(196, 30, 58, 0.8), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '30px',
                  color: 'white'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{img.title}</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>ሃብትሽ & ማሚ</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.95)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}
          >
            <button 
              onClick={() => setSelectedImg(null)}
              style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              <X size={40} />
            </button>

            <button 
              onClick={prevImage}
              style={{ position: 'absolute', left: '30px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', cursor: 'pointer', padding: '10px', borderRadius: '50%' }}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              style={{ maxWidth: '80%', maxHeight: '70%', position: 'relative' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.src} 
                alt={selectedImg.alt} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  borderRadius: '10px',
                  transform: 'scale(1)',
                  filter: 'saturate(1.2) brightness(1.05) contrast(1.1) drop-shadow(0 0 20px rgba(0,0,0,0.5))' // High-def finish
                }}
              />
              <div style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem' }}>{selectedImg.title}</h3>
                <p style={{ opacity: 0.7 }}>ሃብትሽ & ማሚ</p>
              </div>
            </motion.div>

            <button 
              onClick={nextImage}
              style={{ position: 'absolute', right: '30px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', cursor: 'pointer', padding: '10px', borderRadius: '50%' }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
