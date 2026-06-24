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
