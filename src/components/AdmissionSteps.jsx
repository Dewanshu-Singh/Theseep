import React from 'react';
import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Simple Steps to Become <span className="text-gradient">The SEEP Scholar</span></h2>
          <p className="section-subtitle">
            Apply, get shortlisted, complete university admission, and begin your IIT BS journey.
          </p>
        </motion.div>

        <div className="steps-container">
          <motion.div 
            className="steps-line"
            initial={{ opacity: 0, scaleY: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleY: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top left" }}
          ></motion.div>

          {steps.map((step, index) => (
            <motion.div 
              className="step-item" 
              key={index}
              initial={{ opacity: 0.3, scale: 0.95, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ margin: "-35% 0px -35% 0px" }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            >
              <motion.div 
                className="step-number"
                whileHover={{ scale: 1.25, y: -5, boxShadow: "0 10px 25px rgba(128, 0, 0, 0.5)" }}
              >
                {step.num}
              </motion.div>
              <motion.div 
                className="glass-panel step-content"
                whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)", borderColor: "rgba(128, 0, 0, 0.15)" }}
              >
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionSteps;
