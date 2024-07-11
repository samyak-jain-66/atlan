import React from "react";
import right from "../../assets/right.png";
import left from "../../assets/left.jpg";
import { communityData } from "../../utils/Static";

const MovementCard = React.lazy(() =>
  import("../../common/MovementCard/MovementCard")
);
const Community = React.lazy(() => import("../../common/Community/Community"));

const Movement = () => {
  return (
    <div>
      <h2 className="md:text-[2.75rem] text-[1.25rem] mt-10 text-center text-[#121212] antialiased font-bold break-words max-w-[820px] md:mx-auto mx-2">
        Become part of a worldwide initiative Release your imagination
      </h2>
      <div className="max-w-[46.25rem] text-center mx-auto mt-5">
        <h6 className="md:text-[1rem] text-[0.875rem] text-[#121212] antialiased mx-5">
          Our energetic community generates content, delivers courses, and
          organizes events worldwide. events all over the world. Be a part of
          our global influence and creativity !
        </h6>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-5 md:mt-10 mt-5">
        {communityData?.map((item) => {
          return (
            <Community
              heading={item?.heading}
              subHeading={item?.subHeading}
              key={item?.id}
            />
          );
        })}
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-14 mt-5 gap-8">
        <div className="pt-6 bg-[#f6f5f4] rounded-xl md:w-[27rem] w-[100vw] md:h-[31.875rem] border-[2px] border-[#f6f5f4]">
          <div className="pl-8">
            <MovementCard
              heading={"  An always-on support network"}
              subHeading={
                " Swap setups and share tips in over 149 online communities."
              }
            />
          </div>
          <div className="mt-14 md:block flex md:justify-normal justify-center pb-10">
            <img
              src={left}
              className="rounded-xl sm:w-[31.25rem] w-[21.875rem] h-[19.875rem]"
              alt="multiple_languages"
            />
          </div>
        </div>
        <div className="pt-6 bg-[#f6f5f4] rounded-xl md:w-[27rem] w-[100vw] md:h-[31.875rem] border-[2px] border-[#f6f5f4]">
          <div className="pl-8">
            <MovementCard
              heading={"  An always-on support network"}
              subHeading={
                " Swap setups and share tips in over 149 online communities."
              }
            />
          </div>
          <div className="mt-14 md:block flex md:justify-normal justify-center pb-10">
            <img
              src={right}
              className="rounded-xl sm:w-[31.25] w-[29rem] h-[20rem]"
              alt="multiple_languages"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
