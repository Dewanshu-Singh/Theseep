import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Gift, XCircle, Info } from 'lucide-react';
import './Scholarship.css';

const Scholarship = () => {
  return (
    <section id="scholarship" className="scholarship-section section-padding">
      <div className="container">
        
        {/* Header Section */}
        <div className="scholarship-header">
          <div className="badge" style={{ margin: '0 auto 1.5rem auto', display: 'inline-flex', background: 'rgba(128, 0, 0, 0.1)', color: '#800000', border: '1px solid rgba(128, 0, 0, 0.2)' }}>
            Applicable for May 2026 Batch | Boys & Girls
          </div>
          <h2 className="section-title">The SEEP <span className="text-gradient">Scholarship Card</span></h2>
          <p className="section-subtitle">
            The SEEP provides complete financial support for the IIT BS Degree journey with a Baseline Guarantee of Zero-Cost IIT Education. Students also pursue their second degree from Vivekananda Global University (VGU), Jaipur — NAAC A+ University Campus.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="scholarship-grid">
          {/* Card 1: <= 1 LPA */}
          <motion.div 
            className="scholarship-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -15, rotateX: 5, rotateY: -5, scale: 1.03 }}
          >
            <div className="card-header">
              <h3>Family Income</h3>
              <div className="income-amount">≤ ₹1 LPA</div>
            </div>
            <div className="card-body">
              <ul className="benefits-list">
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>100%</strong> IIT BS Degree Fee Scholarship</span></li>
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>100%</strong> IIT UG Mentorship Fee Scholarship</span></li>
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>75%</strong> Advanced Specialization Scholarship</span></li>
                <li className="gift-item"><Gift className="gift-icon" size={20} /> <span><strong>20%</strong> University Degree Fee Scholarship</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: 1-5 LPA (Highlighted) */}
          <motion.div 
            className="scholarship-card popular-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -15, rotateX: 5, scale: 1.05 }}
          >
            <div className="popular-badge">Most Applicable</div>
            <div className="card-header">
              <h3>Family Income</h3>
              <div className="income-amount">₹1-5 LPA</div>
            </div>
            <div className="card-body">
              <ul className="benefits-list">
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>100%</strong> IIT BS Degree Fee Scholarship</span></li>
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>100%</strong> IIT UG Mentorship Fee Scholarship</span></li>
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>50%</strong> Advanced Specialization Scholarship</span></li>
                <li className="gift-item"><Gift className="gift-icon" size={20} /> <span><strong>10%</strong> University Degree Fee Scholarship</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: > 5 LPA */}
          <motion.div 
            className="scholarship-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -15, rotateX: 5, rotateY: 5, scale: 1.03 }}
          >
            <div className="card-header">
              <h3>Family Income</h3>
              <div className="income-amount">&gt; ₹5 LPA</div>
            </div>
            <div className="card-body">
              <ul className="benefits-list">
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>100%</strong> IIT BS Degree Fee Scholarship</span></li>
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>100%</strong> IIT UG Mentorship Fee Scholarship</span></li>
                <li><CheckCircle className="check-icon" size={20} /> <span><strong>25%</strong> Advanced Specialization Scholarship</span></li>
                <li className="nil-item"><XCircle className="nil-icon" size={20} /> <span>Additional benefits: Nil</span></li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Bottom Info Panel */}
        <div className="scholarship-info-panel">
          <div className="info-icon-wrapper">
            <Info size={28} />
          </div>
          <div className="info-content">
            <p>
              <strong>Zero-Cost IIT Education:</strong> IIT BS Degree fee and IIT BS offline mentorship fee are completely covered by First India Foundation under the IndiaAI Mission. The student pays ₹0 for these IIT BS components.
            </p>
            <p className="mt-2">
              <strong>Advanced Specialization</strong> is Optional and depends upon student's choice & performance in IIT BSc level.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Scholarship;
