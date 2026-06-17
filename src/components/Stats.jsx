import React, { useState, useEffect, useRef } from 'react';
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
            // Ease out quart for a smooth slow down at the end
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end); // Ensure it lands exactly on the target number
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
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

  return (
    <section className="stats-section section-padding">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              className="stat-card-wrapper" 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
