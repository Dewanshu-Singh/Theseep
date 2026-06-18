import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import WhyChooseVGU from './components/WhyChooseVGU';
import Stats from './components/Stats';
import Recruiters from './components/Recruiters';
import PromoVideo from './components/PromoVideo';
import Academics from './components/Academics';
import AdmissionSteps from './components/AdmissionSteps';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CampusLife from './components/CampusLife';
import Footer from './components/Footer';
import './App.css';

function App() {
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
        <Features />
        <WhyChooseVGU />
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
}

export default App;
