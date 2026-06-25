import React from 'react';
import { motion } from 'framer-motion';
import { Database, MonitorPlay, Code, BrainCircuit, LineChart } from 'lucide-react';
import './Academics.css';

const Academics = () => {
  return (
    <section id="academics" className="academics-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Choose Your <span className="text-gradient">Dual-Degree</span> Pathway</h2>
          <p className="section-subtitle">
            A revolutionary academic pathway integrating deep tech with practical engineering.
          </p>
        </motion.div>

        <div className="single-program-container">
          <motion.div 
            className="glass-panel program-card-wide"
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            whileHover={{ y: -8, rotateX: 4, scale: 1.02 }}
          >
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
                <h4 className="uni-degree">BTech CSE <br/><span>(Artificial Intelligence and Data Engineering)</span></h4>
                <p className="degree-desc">Hands-on engineering, software development, and direct campus placements at VGU.</p>
              </div>
            </div>

            <div className="program-highlights">
              <div className="highlight-item"><Code size={18}/> Full-Stack Dev</div>
              <div className="highlight-item"><BrainCircuit size={18}/> Artificial Intelligence</div>
              <div className="highlight-item"><LineChart size={18}/> Predictive Analytics</div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Bs_Data_Science_Syllabus (8).pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary w-full mt-6"
            >
              View Complete Curriculum
            </motion.a>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
