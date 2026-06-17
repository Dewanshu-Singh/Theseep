import React, { useState } from 'react';
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
        <div className="glass-panel assurance-box">
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
            <div className="stat-card">
              <h3>100%</h3>
              <p>Qualifier Success</p>
            </div>
            <div className="stat-card">
              <h3>96%</h3>
              <p>First Attempt</p>
            </div>
            <div className="stat-card">
              <h3>4%</h3>
              <p>Second Attempt</p>
            </div>
          </div>

          <div className="refund-notice">
            <strong>Refund Assurance:</strong> In the rare case that a student does not qualify for the IIT BS Degree in any attempt and chooses to discontinue from the university, The SEEP will ensure a full refund of the paid academic fee, along with the refund of the remaining hostel fee.
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="testimonials-header">
          <div className="badge" style={{ margin: '0 auto 1.5rem auto', display: 'inline-flex' }}>
            Student Testimonials
          </div>
          <h2 className="section-title">Hear From <span className="text-gradient">Scholars</span></h2>
          <p className="section-subtitle">
            Real experiences from students building their IIT-powered future with The SEEP.
          </p>
        </div>

        <div className="video-testimonials-wrapper">
          <div className="video-testimonials-scroll">
            {videoTestimonials.map((video) => (
              <div className="glass-panel video-card" key={video.id} onClick={() => setActiveVideo(video.videoId)} style={{ cursor: 'pointer' }}>
                <div className="video-thumbnail">
                  <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.name} onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`; }} />
                  <div className="video-overlay">
                    <div className="video-info">
                      <ShieldCheck className="video-badge" size={24} />
                      <div>
                        <h4>{video.name} {video.program}</h4>
                        <p>The SEEP: Be Future Ready</p>
                      </div>
                    </div>
                    <button className="play-button">
                      <Play size={28} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal Overlay */}
        {activeVideo && (
          <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
                <X size={28} />
              </button>
              <div className="video-modal-iframe-container">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
