import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you', { state: { email } });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="badge">
            <span className="badge-dot"></span>
            Zero Cost IIT Degree Without JEE
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Become an <span className="text-gradient">IITian</span> with Us<br />
            An IIT Dream Career, Now at University
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description">
            The SEEP Scholarship Pathway enables shortlisted students to pursue a 4-year IIT BS Degree along with a B.Tech/BBA from a NAAC A+ University, with full offline, campus-based classroom support.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="btn btn-primary hero-btn"
            >
              Apply Now <ArrowRight size={18} />
            </motion.button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-stats">
            <div className="stat-item">
              <CheckCircle className="hero-stat-icon" size={24} />
              <span>100% IIT BS Qualifier Success</span>
            </div>
            <div className="stat-item">
              <CheckCircle className="hero-stat-icon" size={24} />
              <span>100% IIT BS Fee Funded</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="glass-panel form-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="form-header">
              <h3>Start The SEEP Application</h3>
              <p>Primary Registration Form</p>
            </div>
            <form className="admission-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="form-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required className="form-input" />
              </div>
              <div className="form-group">
                <select required defaultValue="" className="form-input">
                  <option value="" disabled>Select Program</option>
                  <option value="p1">IIT BS in Data Science + B.Tech</option>
                  <option value="p2">IIT BS in Management + BBA</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn btn-primary w-full submit-btn"
              >
                Apply Now <ArrowRight size={18} />
              </motion.button>
            </form>
            <div className="form-footer">
              <CheckCircle size={14} style={{ color: 'var(--success)' }} />
              <span>No hidden conditions for selected scholars.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
