import React from "react";
import vision from "../../assets/vision.svg";

const Vision = () => {
  return (
    <div
      className="bg-[#f6f5f4] px-60 py-16 flex justify-between"
      data-aos="fade-left"
      data-aos-duration="300"
      data-aos-easing="ease-in-out"
    >
      <div>
        <img src={vision} className="w-[420px] h-[420px] rounded" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-[16px] text-[#0A85D1] antialiased font-bold underline">
          Our Vision
        </h2>
        <h4 className="text-[26px] text-[#121212] antialiased mt-4 font-bold">
          Experience the difference
        </h4>
        <div className="mt-6 ml-4">
          <ul className="flex flex-col gap-2 list-disc">
            <li>User Centric Design</li>
            <li>Seamless Synchronization</li>
            <li>Collaboration</li>
            <li>Flexibility and Customization</li>
            <li>Security and Privacy</li>
          </ul>
        </div>
        <button className="bg-[#0083fa] text-[#fff] py-[6px] px-4 rounded-md hover:opacity-85 mt-14 max-w-[120px] transition duration-500 ease-in-out hover:scale-125">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Vision;
