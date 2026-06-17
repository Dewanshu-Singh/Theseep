import React from 'react';
import './Recruiters.css';

const Recruiters = () => {
  const companies = [
    { name: 'Amazon', logo: '/amazon.webp' },
    { name: 'Microsoft', logo: '/microsoft.webp' },
    { name: 'Google', logo: '/google.webp' },
    { name: 'IBM', logo: '/ibm.webp' },
    { name: 'Deloitte', logo: '/Deloitte.jpg' },
    { name: 'Accenture', logo: '/Accenture.png' },
    { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
    { name: 'Infosys', logo: '/Infosys.png' },
    { name: 'Wipro', logo: '/wipro.png' },
    { name: 'Capgemini', logo: '/Capgemini.svg' }
  ];

  // We duplicate the array to create a seamless infinite scroll loop
  const marqueeLogos = [...companies, ...companies];

  return (
    <section className="recruiters-section section-padding">
      <div className="container">
        <div className="recruiters-header">
          <h2 className="section-title">🌟 Top Recruiters at <span className="text-gradient">VGU</span></h2>
        </div>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeLogos.map((company, index) => (
            <div className="marquee-item" key={`${company.name}-${index}`}>
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="company-logo"
                onError={(e) => {
                  // Fallback if logo fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="company-name-fallback" style={{ display: 'none' }}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
