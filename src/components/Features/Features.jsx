import feature from "../../assets/features.svg";

const Features = ({ featureRef }) => {
  return (
    <div
      className="px-8 md:px-16 xl:px-56 flex md:flex-row flex-col items-center justify-between"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      ref={featureRef}
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-[1rem] text-[#0057A8] antialiased font-bold underline">
          Our Features
        </h2>
        <h4 className="text-[1.75rem] text-[#121212] antialiased mt-4 font-bold">
          Out of the box
        </h4>
        <div className="mt-6 ml-4">
          <ul className="flex flex-col gap-2 list-disc text-[1rem]">
            <li>Communicate any idea</li>
            <li>Customize the info you track</li>
            <li>Visualize, filter & sort any way you want</li>
            <li>Access from anywhere</li>
            <li>Sharing and Backup</li>
            <li>Access from anywhere</li>
          </ul>
        </div>
        <button className="bg-[#0057A8] text-[#fff] text-[1rem] py-[0.375rem] px-4 rounded-md hover:opacity-85 mt-14 max-w-[7.5rem] transition duration-500 ease-in-out hover:scale-125">
          Get Started
        </button>
      </div>
      <div>
        <img
          src={feature}
          className="md:w-[31.25rem] md:h-[36.25rem] w-[21.5rem] h-[18.75rem]"
          alt="feature"
        />
      </div>
    </div>
  );
};

export default Features;
