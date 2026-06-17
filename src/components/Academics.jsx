import React from 'react';
import { Database, MonitorPlay, Code, BrainCircuit, LineChart } from 'lucide-react';
import './Academics.css';

const Academics = () => {
  return (
    <section id="academics" className="academics-section">
      <div className="container">
        <h2 className="section-title">Choose Your <span className="text-gradient">Dual-Degree</span> Pathway</h2>
        <p className="section-subtitle">
          A revolutionary academic pathway integrating deep tech with practical engineering.
        </p>

        <div className="single-program-container">
          <div className="glass-panel program-card-wide">
            <div className="program-badge">Flagship Program</div>
            
            <div className="program-content-wide">
              {/* IIT Side */}
              <div className="degree-side">
                <div className="program-icon-wrap">
                  <Database className="program-icon" />
                </div>
                <h3>IIT BS in Data Science & Applications</h3>
                <p className="degree-desc">Foundation in statistics, machine learning, and pure data science directly from IIT Madras.</p>
              </div>

              <div className="plus-divider-wide">+</div>

              {/* VGU Side */}
              <div className="degree-side">
                <div className="program-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                  <MonitorPlay className="program-icon" />
                </div>
                <h4 className="uni-degree">B.Tech CSE <br/><span>(Data Science & AI)</span></h4>
                <p className="degree-desc">Hands-on engineering, software development, and direct campus placements at VGU.</p>
              </div>
            </div>

            <div className="program-highlights">
              <div className="highlight-item"><Code size={18}/> Full-Stack Dev</div>
              <div className="highlight-item"><BrainCircuit size={18}/> Artificial Intelligence</div>
              <div className="highlight-item"><LineChart size={18}/> Predictive Analytics</div>
            </div>

            <a 
              href="/Bs_Data_Science_Syllabus (8).pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary w-full mt-6"
            >
              View Complete Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
