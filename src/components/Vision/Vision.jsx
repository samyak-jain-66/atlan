import vision from "../../assets/vision.svg";

const Vision = () => {
  return (
    <div
      className="bg-[#f6f5f4] px-4 lg:px-8 xl:px-60 py-16 flex md:flex-row justify-between flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div>
        <img
          src={vision}
          className="md:w-[26.25rem] md:h-[26.25rem] rounded w-[21.875rem] h-[21.875rem]"
          alt="vision"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-[1rem] text-[#0057A8] antialiased font-bold underline">
          Our Vision
        </h2>
        <h4 className="text-[1.5rem] text-[#121212] antialiased mt-4 font-bold">
          Experience the difference
        </h4>
        <div className="mt-6">
          <ul className="flex flex-col gap-2 list-disc text-[1rem]">
            <li>User Centric Design</li>
            <li>Seamless Synchronization</li>
            <li>Collaboration</li>
            <li>Flexibility and Customization</li>
            <li>Security and Privacy</li>
          </ul>
        </div>
        <button className="bg-[#0057A8] text-[#fff] text-[1rem] py-[6px]  px-4 rounded-md hover:opacity-85 mt-14 max-w-[7.5rem] transition duration-500 ease-in-out hover:scale-125">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Vision;
