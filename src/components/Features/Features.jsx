import React from "react";
import feature from "../../assets/features.svg";

const Features = ({ featureRef }) => {
  return (
    <div
      className="px-56 flex items-center justify-between"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      ref={featureRef}
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-[16px] text-[#0057A8] antialiased font-bold underline">
          Our Features
        </h2>
        <h4 className="text-[26px] text-[#121212] antialiased mt-4 font-bold">
          Out of the box
        </h4>
        <div className="mt-6 ml-4">
          <ul className="flex flex-col gap-2 list-disc">
            <li>Communicate any idea</li>
            <li>Customize the info you track</li>
            <li>Visualize, filter & sort any way you want</li>
            <li>Access from anywhere</li>
            <li>Sharing and Backup</li>
            <li>Access from anywhere</li>
          </ul>
        </div>
        <button className="bg-[#0057A8] text-[#fff] py-[6px] px-4 rounded-md hover:opacity-85 mt-14 max-w-[120px] transition duration-500 ease-in-out hover:scale-125">
          Get Started
        </button>
      </div>
      <div>
        <img src={feature} className="w-[500px] h-[580px]" alt="feature"/>
      </div>
    </div>
  );
};

export default Features;
