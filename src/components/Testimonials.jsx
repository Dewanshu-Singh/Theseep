import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Play, X } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoTestimonials = [
    { id: 1, name: 'Nabambika', program: 'IIT Madras BS', type: 'Scholar Experience', videoId: 'dS48QUz0pN4' },
    { id: 2, name: 'Kritika Singh', program: 'IIT Madras BS', type: 'Scholar Experience', videoId: 'IIW2cgGJW9Y' },
    { id: 3, name: 'Alisha Mishra', program: 'IIT Madras BS', type: 'IIT BS Preparation', videoId: 'I45g6f3SYsY' },
    { id: 4, name: 'Aryan Sharma', program: 'IIT Madras BS', type: 'Dual Degree Model', videoId: 'u1IogmNvFd0' },
  ];

  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        
        {/* Success & Refund Assurance */}
        <motion.div 
          className="glass-panel assurance-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="assurance-header">
            <ShieldCheck size={32} className="shield-icon" />
            <div>
              <h2>SUCCESS & REFUND ASSURANCE</h2>
              <p>The SEEP Offline Scholar Success & Refund Assurance</p>
            </div>
          </div>
          <p className="assurance-text">
            The SEEP Offline Scholars (2025 Batch) have achieved a <strong>100% success rate</strong> in the IIT BS Qualifier, with 96% of students qualifying in the first attempt and the remaining 4% qualifying in the second attempt, after structured 4-week preparation and dedicated mentorship.
          </p>
          
          <div className="stats-row">
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>100%</h3>
              <p>Qualifier Success</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>96%</h3>
              <p>First Attempt</p>
            </motion.div>
            <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>4%</h3>
              <p>Second Attempt</p>
            </motion.div>
          </div>

          <div className="refund-notice">
            <strong>Refund Assurance:</strong> In the rare case that a student does not qualify for the IIT BS Degree in any attempt and chooses to discontinue from the university, The SEEP will ensure a full refund of the paid academic fee, along with the refund of the remaining hostel fee.
          </div>
        </motion.div>

        {/* Video Testimonials */}
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge" style={{ margin: '0 auto 1.5rem auto', display: 'inline-flex' }}>
            Student Testimonials
          </div>
          <h2 className="section-title">Hear From <span className="text-gradient">Scholars</span></h2>
          <p className="section-subtitle">
            Real experiences from students building their IIT-powered future with The SEEP.
          </p>
        </motion.div>

        <div className="video-testimonials-wrapper">
          <motion.div 
            className="video-testimonials-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              hidden: { opacity: 0 }
            }}
          >
            {videoTestimonials.map((video) => (
              <motion.div 
                className="glass-panel video-card" 
                key={video.id} 
                onClick={() => setActiveVideo(video.videoId)} 
                style={{ cursor: 'pointer' }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="video-thumbnail">
                  <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.name} onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`; }} />
                  <div className="video-overlay">
                    <motion.button 
                      className="play-button"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(128, 0, 0, 0.9)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={28} fill="currentColor" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Video Modal Overlay */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div 
              className="video-modal-overlay" 
              onClick={() => setActiveVideo(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="video-modal-content" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
                  <X size={28} />
                </button>
                <div className="video-modal-iframe-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&playsinline=1&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Testimonials;
