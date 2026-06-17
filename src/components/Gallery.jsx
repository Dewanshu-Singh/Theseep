import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <h2 className="section-title">Experience <span className="text-gradient">Campus Life</span></h2>
        <p className="section-subtitle">
          Discover the vibrant environment at Vivekananda Global University, where learning meets world-class infrastructure.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item item-1">
            <img src="/img3.webp" alt="VGU Campus Overview" className="gallery-img" />
            <div className="gallery-overlay">
              <h3>World-Class Infrastructure</h3>
            </div>
          </div>
          <div className="gallery-item item-2">
            <img src="/img1.webp" alt="Students collaborating" className="gallery-img" />
            <div className="gallery-overlay">
              <h3>Collaborative Learning</h3>
            </div>
          </div>
          <div className="gallery-item item-3">
            <img src="/img2.webp" alt="Campus Facilities" className="gallery-img" />
            <div className="gallery-overlay">
              <h3>Modern Facilities</h3>
            </div>
          </div>
          <div className="gallery-item item-4">
            <img src="/img4.webp" alt="Academic Excellence" className="gallery-img" />
            <div className="gallery-overlay">
              <h3>Academic Excellence</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
