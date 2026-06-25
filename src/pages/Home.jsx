import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import WhyChooseVGU from '../components/WhyChooseVGU';
import AboutVGU from '../components/AboutVGU';
import Stats from '../components/Stats';
import Recruiters from '../components/Recruiters';
import PromoVideo from '../components/PromoVideo';
import Academics from '../components/Academics';
import AdmissionSteps from '../components/AdmissionSteps';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CampusLife from '../components/CampusLife';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="app-container">
      <div className="global-bg">
        <div className="bg-blob-global global-blob-1"></div>
        <div className="bg-blob-global global-blob-2"></div>
        <div className="bg-blob-global global-blob-3"></div>
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <section style={{ backgroundColor: '#ffffff', padding: '0', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '28%', minWidth: '250px' }}>
            <img src="/pic1.png" alt="Highlight 1" style={{ height: '280px', width: 'auto', maxWidth: 'none', objectFit: 'contain' }} />
          </div>
          <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '32%', minWidth: '280px' }}>
            <img src="/changepic1.png" alt="Highlight 2" style={{ height: '320px', width: 'auto', maxWidth: 'none', objectFit: 'contain' }} />
          </div>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '28%', minWidth: '250px' }}>
            <img src="/changepic2.png" alt="Highlight 3" style={{ height: '280px', width: 'auto', maxWidth: 'none', objectFit: 'contain' }} />
          </div>
        </section>
        <Features />
        <WhyChooseVGU />
        <AboutVGU />
        <Stats />
        <Recruiters />
        <Academics />
        <AdmissionSteps />
        <Gallery />
        <CampusLife />
        <PromoVideo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
