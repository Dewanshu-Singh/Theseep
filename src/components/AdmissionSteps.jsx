import React from 'react';
import './AdmissionSteps.css';

const AdmissionSteps = () => {
  const steps = [
    { num: '1', title: 'Register', desc: 'Fill The SEEP application form.' },
    { num: '2', title: 'Shortlist', desc: 'Scholarship screening by The SEEP.' },
    { num: '3', title: 'IIT Process', desc: 'Complete IIT BS Degree registration.' },
    { num: '4', title: 'University', desc: 'Complete University admission.' },
    { num: '5', title: 'Start', desc: 'Begin IIT BS + University degree.' }
  ];

  return (
    <section id="admissions" className="section-padding steps-section">
      <div className="container">
        <h2 className="section-title">Simple Steps to Become <span className="text-gradient">The SEEP Scholar</span></h2>
        <p className="section-subtitle">
          Apply, get shortlisted, complete university admission, and begin your IIT BS journey.
        </p>

        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, index) => (
            <div className="step-item" key={index}>
              <div className="step-number">{step.num}</div>
              <div className="glass-panel step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionSteps;
