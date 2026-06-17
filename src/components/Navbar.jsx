import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Shield } from 'lucide-react';
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
        IITian Yuva Shakti Mission
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
          <a href="#scholarships" className="nav-link">Scholarships</a>
          <a href="#admissions" className="nav-link">Admissions</a>
          <a href="#academics" className="nav-link">Academics</a>
          <a href="#about" className="nav-link">About Us</a>
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
        <a href="#scholarships" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Scholarships</a>
        <a href="#admissions" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Admissions</a>
        <a href="#academics" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Academics</a>
        <a href="#about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
        <button className="btn btn-primary w-full mt-4">Apply Now</button>
      </div>
    </header>
  );
};

export default Navbar;
