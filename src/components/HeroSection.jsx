import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">
            <span className="badge-dot"></span>
            Zero Cost IIT Degree Without JEE
          </div>
          
          <h1 className="hero-title">
            Become an <span className="text-gradient">IITian</span> with Us<br />
            An IIT Dream Career, Now at University
          </h1>
          
          <p className="hero-description">
            The SEEP Scholarship Pathway enables shortlisted students to pursue a 4-year IIT BS Degree along with a B.Tech/BBA from a NAAC A+ University, with full offline, campus-based classroom support.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary hero-btn">
              Apply Now <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <CheckCircle className="stat-icon" size={20} />
              <span>100% IIT BS Qualifier Success</span>
            </div>
            <div className="stat-item">
              <CheckCircle className="stat-icon" size={20} />
              <span>100% IIT BS Fee Funded</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel form-card">
            <div className="form-header">
              <h3>Start The SEEP Application</h3>
              <p>Primary Registration Form</p>
            </div>
            <form className="admission-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required className="form-input" />
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
              <button type="submit" className="btn btn-primary w-full submit-btn">
                Apply Now <ArrowRight size={18} />
              </button>
            </form>
            <div className="form-footer">
              <CheckCircle size={14} style={{ color: 'var(--success)' }} />
              <span>No hidden conditions for selected scholars.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
