import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ThankYou.css';

const ThankYou = () => {
  const location = useLocation();
  const email = location.state?.email || "your provided email";

  return (
    <div className="thank-you-container">
      {/* Background elements for attractive design */}
      <div className="ty-bg-blob ty-blob-1"></div>
      <div className="ty-bg-blob ty-blob-2"></div>

      <header className="thank-you-header">
        <div className="logo-container">
          <h2>
            <span className="first">First</span> <span className="india">India</span>
            <br />
            <span className="foundation">Foundation</span>
          </h2>
          <div className="logo-underline"></div>
        </div>
      </header>

      <main className="thank-you-main">
        <motion.div 
          className="thank-you-card"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="success-icon-wrapper"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
          >
            <CheckCircle className="success-icon" size={56} strokeWidth={2.5} />
          </motion.div>
          
          <h1 className="thank-you-title">
            Thank You for registering with <br/>
            <span className="highlight">First India Foundation</span>
          </h1>

          <p className="thank-you-message">
            We have sent you a verification link at <br/>
            <strong>{email}</strong>
            <br/><br/>
            Kindly click on the link to complete the verification process.
          </p>

          <Link to="/" className="back-btn">
            Back to Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default ThankYou;
