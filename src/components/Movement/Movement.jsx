import React from "react";
import right from "../../assets/right.png";
import left from "../../assets/left.jpg";

const Movement = () => {
  return (
    <div>
      <h2 className="text-[45px] text-center text-[#121212] antialiased font-bold break-words max-w-[820px] mx-auto">
        Become part of a worldwide initiative Release your imagination
      </h2>
      <div className="max-w-[740px] text-center mx-auto mt-5">
        <h6 className="text-[16px] text-[#121212] antialiased">
          Our energetic community generates content, delivers courses, and
          organizes events worldwide. events all over the world. Be a part of
          our global influence and creativity !
        </h6>
      </div>
      <div className="flex items-center justify-center gap-10 mt-10">
        <div className="px-8 py-6 bg-[#f6f5f4] rounded-xl w-[280px] border-[2px] border-[#f6f5f4]">
          <h2 className="text-[#0A85D1] antialiased text-[53px] font-bold">
            5M+
          </h2>
          <h6 className="text-[16px] text-[#121212] antialiased">
            community members
          </h6>
        </div>
        <div className="px-8 py-6 bg-[#f6f5f4] rounded-xl w-[280px] border-[2px] border-[#f6f5f4]">
          <h2 className="text-[#0A85D1] antialiased text-[53px] font-bold">
            5M+
          </h2>
          <h6 className="text-[16px] text-[#121212] antialiased">
            community members
          </h6>
        </div>
        <div className="px-8 py-6 bg-[#f6f5f4] rounded-xl w-[280px]  border-[2px] border-[#f6f5f4]">
          <h2 className="text-[#0A85D1] antialiased text-[53px] font-bold">
            5M+
          </h2>
          <h6 className="text-[16px] text-[#121212] antialiased">
            community members
          </h6>
        </div>
      </div>
      <div className="flex items-center justify-center gap-14 mt-5">
        <div className="pl-8 pt-6 bg-[#f6f5f4] rounded-xl w-[433px] h-[510px] border-[2px] border-[#f6f5f4]">
          <h2 className="text-[#121212] antialiased text-[18px] font-bold">
            An always-on support network
          </h2>
          <h6 className="text-[#121212] antialiased text-[16px]">
            Swap setups and share tips in over 149 online communities.
          </h6>
          <button className="bg-[#0083fa] text-[#fff] py-[6px] px-4 rounded-md hover:opacity-85 mt-6 transition duration-500 ease-in-out hover:scale-125">
            Get Started
          </button>
          <div className="mt-14">
            <img src={left} className="rounded-xl" />
          </div>
        </div>
        <div className="pl-8 pt-6 bg-[#f6f5f4] rounded-xl w-[433px] h-[515px] border-[2px] border-[#f6f5f4]">
          <h2 className="text-[#121212] antialiased text-[18px] font-bold">
            An always-on support network
          </h2>
          <h6 className="text-[#121212] antialiased text-[16px]">
            Swap setups and share tips in over 149 online communities.
          </h6>
          <button className="bg-[#0083fa] text-[#fff] py-[6px] px-4 rounded-md hover:opacity-85 mt-5 transition duration-500 ease-in-out hover:scale-125">
            Get Started
          </button>
          <div className="mt-12">
            <img src={right} className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
