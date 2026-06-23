import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Building, TrendingUp } from 'lucide-react';
import './Stats.css';

const CountUp = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end); 
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    {
      icon: <GraduationCap size={32} />,
      endValue: 100,
      suffix: '+',
      label: 'Academic Programs'
    },
    {
      icon: <Briefcase size={32} />,
      endValue: 1682,
      suffix: '+',
      label: 'Placement Offers (2024-25)'
    },
    {
      icon: <Building size={32} />,
      endValue: 367,
      suffix: '+',
      label: 'Active Recruiters'
    },
    {
      icon: <TrendingUp size={32} />,
      endValue: 80,
      suffix: '%',
      label: 'Overall Placement Rate'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="stats-section section-padding">
      <div className="container">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              className="stat-card-wrapper" 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.05 }}
            >
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">
                    <CountUp end={stat.endValue} suffix={stat.suffix} duration={2500} />
                  </h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
                <div className="card-shine"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
