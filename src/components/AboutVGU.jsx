import React from 'react';
import { motion } from 'framer-motion';
import './AboutVGU.css';

const AboutVGU = () => {
  return (
    <section id="about-vgu" className="section-padding about-vgu-section">
      <div className="container">
        <div className="about-vgu-grid">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">
              Discover <br/>
              <span className="text-gradient">Vivekananda Global University</span>
            </h2>
            <div className="about-text-container">
              <p className="about-text">
                VGU is a premier institution known for its sprawling, lush green campus and state-of-the-art infrastructure. Our vibrant campus life fosters an environment of innovation, holistic development, and cultural diversity.
              </p>
              <p className="about-text">
                With modern laboratories, extensive libraries, and world-class sports facilities, we ensure a transformative educational journey that empowers every student to achieve their highest potential.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-badge">🌿 Lush Green Campus</div>
              <div className="highlight-badge">🏢 State-of-the-Art Labs</div>
              <div className="highlight-badge">🏅 World-Class Sports</div>
            </div>
          </motion.div>

          {/* Right Column: Image Collage */}
          <motion.div 
            className="about-images-collage"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="collage-shape shape-1"></div>
            <div className="collage-shape shape-2"></div>
            
            <div className="collage-image-wrapper img-main">
              <img src="/campus1.png" alt="VGU Campus Main" />
            </div>
            <div className="collage-image-wrapper img-secondary-1">
              <img src="/campus2.png" alt="VGU Campus Secondary" />
            </div>
            <div className="collage-image-wrapper img-secondary-2">
              <img src="/campus3.png" alt="VGU Campus Highlight" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutVGU;

