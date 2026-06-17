import React from 'react';
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
        <h2 className="section-title">A Smarter Pathway to <span className="text-gradient">IITs</span></h2>
        <p className="section-subtitle">
          The SEEP bridges the gap between regular university education and IIT academic excellence through scholarship, mentorship, and campus-based learning.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="glass-panel feature-card" key={index}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
