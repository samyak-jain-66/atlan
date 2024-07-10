import React from "react";
import free from "../../assets/free.jpg";

const Free = ({ freeRef }) => {
  return (
    <div
      data-aos="slide-right"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
      ref={freeRef}
    >
      <h2 className="text-[61px] text-center text-[#121212] antialiased font-bold pt-10">
        Get Started for free
      </h2>
      <div className="max-w-[490px] text-center mx-auto">
        <h6 className="text-[16px] text-[#121212] antialiased">
          Play around with it first. Pay and add your team later.
        </h6>
      </div>
      <div className="flex items-center justify-center gap-5 mt-6">
        <button className="bg-[#121212] text-[#fff] py-2 px-6 rounded-md hover:opacity-85 transition duration-500 ease-in-out hover:scale-125">
          Try Free
        </button>
        <a href="http://www.google.com" className="text-[#0057A8] underline">
          Request Product Demo
        </a>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <img src={free} className="w-[950px] h-[400px]" alt="free" />
      </div>
    </div>
  );
};

export default Free;
