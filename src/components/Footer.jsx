import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo text-gradient">The SEEP</h2>
            <p className="footer-desc">
              Become an IITian with Us — Build Your Future, Power India's AI Revolution.
            </p>
            <div className="contact-info">
              <p>Call & WhatsApp: +91-8741999992</p>
              <p>Email: help@theseep.org</p>
            </div>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-col">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#why-vgu">University</a>
              <a href="#admissions">Admissions</a>
              <a href="#academics">Academics</a>
              <a href="#about-vgu">About Us</a>
            </div>
            
            <div className="footer-col">
              <h3>About The SEEP</h3>
              <a href="#about-vgu">Mission</a>
              <a href="#about-vgu">Objectives</a>
              <a href="#academics">NEP 2020</a>
              <a href="#admissions">Policies</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright &copy; 2026 First India Foundation | Powered by The SEEP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
