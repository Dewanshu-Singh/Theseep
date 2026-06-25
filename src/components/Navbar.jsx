import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="mission-text">IITian Yuva Shakti Mission</span>
            <span className="batch-highlight">
              <span className="pulse-dot"></span> Batch 2026
            </span>
          </div>
          <span className="top-bar-right">Call & WhatsApp: +91-8741999992 / help@theseep.org</span>
        </div>
      </div>
      <div className="container nav-container">
        <div className="logo-group">
          <div className="logo-shield">
            <img src="/logo.png" alt="First India Foundation Logo" className="nav-logo-image" />
          </div>
          <div className="logo-text-group">
            <h1 className="main-logo-text">First India Foundation</h1>
            <p className="sub-logo-text">Zero Cost IIT Degree Without JEE</p>
          </div>
        </div>

        <nav className="desktop-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#why-vgu" className="nav-link">University</a>
          <a href="#admissions" className="nav-link">Admissions</a>
          <a href="#academics" className="nav-link">Academics</a>
          <a href="#about-vgu" className="nav-link">About Us</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-primary nav-btn">
            Apply Now <ChevronRight size={16} />
          </button>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#why-vgu" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>University</a>
        <a href="#admissions" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Admissions</a>
        <a href="#academics" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Academics</a>
        <a href="#about-vgu" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
        <button className="btn btn-primary w-full mt-4">Apply Now</button>
      </div>
    </header>
  );
};

export default Navbar;
