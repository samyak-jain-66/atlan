import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "./App.css";
import "aos/dist/aos.css";
import Free from "./components/Free/Free";
import Millions from "./components/Millions/Millions";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Vision from "./components/Vision/Vision";
import Features from "./components/Features/Features";

const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Testimonials = React.lazy(() =>
  import("./components/Testimonial/Testimonial")
);
const Pricing = React.lazy(() => import("./components/Pricing/Pricing"));
const Movement = React.lazy(() => import("./components/Movement/Movement"));

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Header
        isScroll={isScroll}
        pricingRef={pricingRef}
        freeRef={freeRef}
        featureRef={featureRef}
        testimonialRef={testimonialRef}
      />
      <Hero />
      <div className="mt-20">
        <Millions />
      </div>
      <div className="mt-20">
        <Vision />
      </div>
      <div className="mt-10">
        <Features featureRef={featureRef} />
      </div>
      <div className="mt-10">
        <Movement />
      </div>
      <div className="mt-20">
        <Testimonials testimonialRef={testimonialRef} />
      </div>
      <Pricing pricingRef={pricingRef} />
      <Free freeRef={freeRef} />
      <Footer />
    </div>
  );
}

export default App;
