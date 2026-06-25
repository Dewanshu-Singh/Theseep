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
          <h2 className="section-title">Our <span className="text-gradient">Flagship Program</span></h2>
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
            
            <div className="program-content-wide" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="degree-side" style={{ flex: 'none', maxWidth: '600px', margin: '0 auto' }}>
                <div className="program-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                  <MonitorPlay className="program-icon" />
                </div>
                <h4 className="uni-degree" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>BTech CSE <br/><span style={{ fontSize: '1.2rem' }}>(Artificial Intelligence and Data Engineering)</span></h4>
                <p className="degree-desc" style={{ fontSize: '1.1rem' }}>Hands-on engineering, software development, and direct campus placements at VGU.</p>
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
