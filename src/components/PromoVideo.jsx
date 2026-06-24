import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './PromoVideo.css';

const PromoVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="promo-video-section section-padding">
      <div className="container">
        <motion.div 
          className="promo-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge" style={{ margin: '0 auto 1rem auto', display: 'inline-flex' }}>
            About The Program
          </div>
          <h2 className="section-title">Discover <span className="text-gradient">The SEEP</span> Mission</h2>
          <p className="section-subtitle">
            Watch how The SEEP bridges the gap between regular university education and IIT academic excellence.
          </p>
        </motion.div>

        <motion.div 
          className="video-player-wrapper"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div className="video-decoration dec-1"></div>
          <div className="video-decoration dec-2"></div>
          
          <video 
            ref={videoRef}
            className="promo-video"
            controls={isPlaying}
            onPause={handleVideoPause}
            onPlay={handleVideoPlay}
            preload="metadata"
            poster="/campus1.png"
          >
            <source src="/SEEP.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div className="video-overlay" onClick={handlePlayClick}>
              <button className="custom-play-btn" aria-label="Play video">
                <Play size={36} fill="currentColor" style={{ marginLeft: '6px' }} />
              </button>
              <div className="video-overlay-text">Watch The SEEP Program Video</div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PromoVideo;
