import React from 'react';
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
        <div className="why-vgu-header animate-fade-in">
          <h2 className="section-title">Why Choose <span className="text-gradient">VGU?</span></h2>
          <p className="section-subtitle">
            Experience world-class education, unmatched global exposure, and a proven track record of successful placements.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              className="reason-card-wrapper" 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="reason-card">
                <div className="reason-icon-wrapper">
                  <div className="reason-icon">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
                <div className="card-shine"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVGU;
