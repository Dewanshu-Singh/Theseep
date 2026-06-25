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
        <section style={{ backgroundColor: '#f4f4f4', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '28%', minWidth: '250px' }}>
            <img src="/pic1.png" alt="Highlight 1" style={{ height: '180px', width: 'auto', maxWidth: 'none', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32%', minWidth: '280px' }}>
            <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
              <img src="/changepic1.png" alt="Highlight 2" style={{ height: '220px', width: 'auto', maxWidth: 'none', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '0.85rem', color: '#444', textAlign: 'center', margin: '4px 0 0', fontWeight: '500' }}>QS Asia (India Ranking): Placed 95th among all universities in India.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '28%', minWidth: '250px' }}>
            <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
              <img src="/changepic2.png" alt="Highlight 3" style={{ height: '180px', width: 'auto', maxWidth: 'none', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '0.85rem', color: '#444', textAlign: 'center', margin: '4px 0 0', fontWeight: '500' }}>NIRF Overall Rankings: Placed in the 151–200 band nationally.</p>
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
