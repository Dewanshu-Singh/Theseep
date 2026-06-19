import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Globe } from 'lucide-react';
import './WhyChooseVGU.css';

const WhyChooseVGU = () => {
  const reasons = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Industry-Focused Education',
      description: 'Programs designed with industry requirements in mind, ensuring students gain practical skills alongside academic knowledge.'
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Strong Placement Support',
      description: 'Dedicated training, internships, career guidance, and recruitment drives with leading national and international companies.'
    },
    {
      icon: <Award size={28} />,
      title: 'Recognized & Accredited',
      description: 'Approved by relevant regulatory bodies and committed to maintaining high academic standards and quality education.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Global Learning Opportunities',
      description: 'International collaborations, exchange programs, global certifications, and exposure to worldwide career opportunities.'
    }
  ];

  return (
    <section id="why-vgu" className="section-padding why-vgu-section" style={{ backgroundImage: 'url(/bg7.jpeg)' }}>
      <div className="section-overlay"></div>
      <div className="container relative-z">
        <motion.div 
          className="why-vgu-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose <span className="text-gradient">VGU?</span></h2>
          <p className="section-subtitle">
            Experience world-class education, unmatched global exposure, and a proven track record of successful placements.
          </p>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className={`reason-card-wrapper card-wrapper-${index + 1}`} key={index}>
              <motion.div 
                className="reason-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -15, rotateX: 10, rotateY: -5, scale: 1.02 }}
              >
                <div className="reason-icon-wrapper">
                  <div className="reason-icon">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
                <div className="card-shine"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVGU;
