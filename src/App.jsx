import './App.css';
import Free from './components/Free/Free';
import Millions from './components/Millions/Millions';
import Movement from './components/Movement/Movement';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useEffect, useState, useRef } from 'react';
import Hero from './components/Hero/Hero';
import Vision from './components/Vision/Vision';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonial/Testimonial';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isScroll, setIsScroll] = useState(false);
  const pricingRef = useRef(null);
  const freeRef = useRef(null);
  const featureRef = useRef(null);
  const testimonialRef = useRef(null);

  const handleScroll = (e) => {
    if (!isScroll) setIsScroll(true);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <Header
        isScroll={isScroll}
        pricingRef={pricingRef}
        freeRef={freeRef}
        featureRef={featureRef}
        testimonialRef={testimonialRef}
      />
      <Hero />
      <div className='mt-20'>
        <Millions />
      </div>
      <div className='mt-20'>
        <Vision />
      </div>
      <div className='mt-10'>
        <Features featureRef={featureRef} />
      </div>
      <div className='mt-10'>
        <Movement />
      </div>
      <div className='mt-20'>
        <Testimonials testimonialRef={testimonialRef} />
      </div>
      <Pricing pricingRef={pricingRef} />
      <Free freeRef={freeRef} />
      <Footer />
    </div>
  );
}

export default App;
