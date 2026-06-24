import { motion } from 'framer-motion';
import { Users, MapPin } from 'lucide-react';
import './CampusLife.css';

const CampusLife = () => {
  return (
    <section className="section-padding campus-life-section">
      <div className="container">
        <div className="campus-life-grid">
          
          {/* Text Content Left Side */}
          <motion.div 
            className="campus-text-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              VGU Campus Life
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Experience A Vibrant <span className="text-gradient">Campus Life</span>
            </h2>
            <p className="campus-description">
              Spread across a lush green 34-acre campus, VGU offers state-of-the-art infrastructure, comfortable hostels, and a diverse community of students from across the globe.
            </p>

            <div className="campus-highlights" style={{ marginTop: '1.5rem', gap: '1rem' }}>
              <div className="campus-highlight-item" style={{ padding: '0.5rem' }}>
                <div className="highlight-icon" style={{ width: '40px', height: '40px' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>34-Acre Green Campus</h4>
                  <p style={{ fontSize: '0.85rem' }}>A serene environment for focused learning.</p>
                </div>
              </div>
              <div className="campus-highlight-item" style={{ padding: '0.5rem' }}>
                <div className="highlight-icon" style={{ width: '40px', height: '40px' }}>
                  <Users size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Diverse Community</h4>
                  <p style={{ fontSize: '0.85rem' }}>Connect with peers from diverse backgrounds.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Player Right Side */}
          <motion.div 
            className="campus-video-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="campus-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/no_VNgGSlcE?rel=0&playsinline=1"
                title="VGU Campus Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="campus-iframe"
              ></iframe>
            </div>
            
            {/* Decorative elements behind video */}
            <div className="campus-blob blob-1"></div>
            <div className="campus-blob blob-2"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CampusLife;
