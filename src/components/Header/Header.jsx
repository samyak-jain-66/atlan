import React from "react";

const Header = ({
  isScroll,
  pricingRef,
  freeRef,
  featureRef,
  testimonialRef,
}) => {
  const pricingScroll = () => {
    if (pricingRef && pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const freeScroll = () => {
    if (freeRef && freeRef.current) {
      freeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const featureScroll = () => {
    if (featureRef && featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const testimonialScroll = () => {
    if (testimonialRef && testimonialRef.current) {
      testimonialRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-6 py-4 fixed bg-[#fff] w-full z-20 ${
        isScroll ? "border-b-[1px] border-b-[#0000001a]" : ""
      }`}
    >
      <div>
        <h1 className="text-[24px] text-center text-[#121212] antialiased font-bold">
          Acme
        </h1>
      </div>
      <div className="flex items-center justify-center gap-8">
        <h6
          className="text-[16px] text-center text-[#050505] antialiased font-normal hover:bg-[#121212] hover:text-[#fff] hover:cursor-pointer rounded-md px-2 py-1 transition duration-500 ease-in-out"
          onClick={() => featureScroll()}
        >
          Features
        </h6>
        <h6
          className="text-[16px] text-center text-[#050505] antialiased font-normal hover:bg-[#121212] hover:text-[#fff] hover:cursor-pointer rounded-md px-2 py-1 transition duration-500 ease-in-out"
          onClick={() => freeScroll()}
        >
          Join Us
        </h6>
        <h6
          className="text-[16px] text-center text-[#050505] antialiased font-normal hover:bg-[#121212] hover:text-[#fff] hover:cursor-pointer rounded-md px-2 py-1 transition duration-500 ease-in-out"
          onClick={() => pricingScroll()}
        >
          Pricing
        </h6>
        <h6
          className="text-[16px] text-center text-[#050505] antialiased font-normal hover:bg-[#121212] hover:text-[#fff] hover:cursor-pointer rounded-md px-2 py-1 transition duration-500 ease-in-out"
          onClick={() => testimonialScroll()}
        >
          Testimonials
        </h6>
      </div>
      <div className="flex items-center justify-center gap-3">
        <h6 className="text-[16px] text-center text-[#050505] antialiased font-normal cursor-pointer">
          Log In
        </h6>
        <div className="text-[#0000001a]">|</div>
        <button className="bg-[#121212] text-[#fff] py-1 px-4 rounded-md hover:opacity-85">
          Try Free
        </button>
      </div>
    </div>
  );
};

export default Header;
