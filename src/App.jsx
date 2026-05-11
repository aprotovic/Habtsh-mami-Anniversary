import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Pause, Play, Sparkles } from 'lucide-react';
import Hero from './components/Hero';
import Message from './components/Message';
import Counter from './components/Counter';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const startJourney = () => {
    setShowOverlay(false);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Audio play failed:", err));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 20;
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  return (
    <div className="app-container">
      <Particles />
      
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'var(--cream)',
              zIndex: 3000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Heart size={60} color="#C41E3A" style={{ marginBottom: '30px' }} />
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#2c2c2c', marginBottom: '10px' }}>
                ሃብትሽ ❤️ ማሚ
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
                13 Years of Eternal Love
              </p>
              <button
                onClick={startJourney}
                style={{
                  padding: '15px 40px',
                  fontSize: '1.2rem',
                  background: 'var(--gold)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                በፍቅር ይክፈቱ (Open with Love)
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/assets/music.m4a" type="audio/x-m4a" />
        <source src="/assets/music.m4a" type="audio/mp4" />
      </audio>
      
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={toggleMusic}
        title="Toggle Anniversary Music"
      >
        {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      </button>

      <main>
        <Hero />
        <Message />
        <Counter />
        <Timeline />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
