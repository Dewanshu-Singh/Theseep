import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Award } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: 'Classroom Academics',
      description: 'Full offline IIT BS learning with complete syllabus classes, revision, doubt-solving, and tests.'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'IIT BS Fee Covered',
      description: 'The SEEP funds the complete 100% IIT BS Degree Program Fee (means Zero Cost IIT) for all selected scholars.'
    },
    {
      icon: <Award size={24} />,
      title: 'Only University Fee',
      description: 'Students pay only the regular university degree fee (up to 20% Scholarship) as per university structure.'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Campus Network',
      description: 'Study at Vivekananda Global University, Jaipur. Co-Ed University campus for The SEEP Academic Pathway.'
    }
  ];

  return (
    <section id="scholarships" className="section-padding features-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">A Smarter Pathway to <span className="text-gradient">IITs</span></h2>
          <p className="section-subtitle">
            The SEEP bridges the gap between regular university education and IIT academic excellence through scholarship, mentorship, and campus-based learning.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className={`feature-card-wrapper card-wrapper-${index + 1}`} key={index}>
              <motion.div 
                className="glass-panel feature-card-inner" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
