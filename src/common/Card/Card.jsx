import { FaCheck } from "react-icons/fa6";

function Card() {
  return (
    <div className="bg-white border-[1px] border-[lightgray] w-[30%] h-[480px] rounded-[15px] p-5 cursor-pointer hover:scale-110 transition duration-500 ease-in-out hover:shadow-md">
      <div className="flex flex-col">
        <span className="bg-black text-white w-max px-[15px] py-[2px] rounded-[10px] text-[12px] mb-[10px]">
          Pro
        </span>
        <p className="text-[15px] font-light mb-[40px]">
          Ideal for those who've already got their website up and running and
          are seeking assistance to enhance and update it further.
        </p>
        <p className="flex gap-1">
          <span className="text-[24px] font-semibold">&#36; 2500</span>
          <span className="text-[12px] font-normal mt-3">/month</span>
        </p>
        <hr className="mt-5" />
      </div>
      <div className="mt-[20px]">
        <ul className="text-[14px] leading-[25px]">
          <li className="flex gap-3 items-center">
            <span>
              <FaCheck />
            </span>
            <span>3-5 day turnaround</span>
          </li>
          <li className="flex gap-3 items-center">
            <span>
              <FaCheck />
            </span>
            <span>Native development</span>
          </li>
          <li className="flex gap-3 items-center">
            <span>
              <FaCheck />
            </span>
            <span>Task delivered one-by-one</span>
          </li>
          <li className="flex gap-3 items-center">
            <span>
              <FaCheck />
            </span>
            <span>Dedicated dashboard</span>
          </li>
          <li className="flex gap-3 items-center">
            <span>
              <FaCheck />
            </span>
            <span>Updated via Dashboard & Slack</span>
          </li>
        </ul>
        <hr className="mt-5" />
      </div>
      <div className="mt-[15px]">
        <button className="border-[1px] border-[lightgray] w-[100%] rounded-[8px] py-[6px] text-[15px] font-semibold hover:bg-black hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Card;
