import React from "react";

const MovementCard = ({ heading, subHeading }) => {
  return (
    <div>
      <h2 className="text-[#121212] antialiased text-[18px] font-bold">
        {heading}
      </h2>
      <h6 className="text-[#121212] antialiased text-[16px]">{subHeading}</h6>
      <button className="bg-[#0057A8] text-[#fff] py-[6px] px-4 rounded-md hover:opacity-85 mt-6 transition duration-500 ease-in-out hover:scale-125">
        Get Started
      </button>
    </div>
  );
};

export default MovementCard;
