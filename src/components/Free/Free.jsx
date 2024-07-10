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
      <h2 className="md:text-[2.75rem] text-[1.5rem] text-center text-[#121212] antialiased font-bold pt-10">
        Get Started for free
      </h2>
      <div className="max-w-[30.5rem] text-center mx-auto">
        <h6 className="md:text-[1rem] text-[0.875rem] text-[#121212] antialiased">
          Play around with it first. Pay and add your team later.
        </h6>
      </div>
      <div className="flex items-center justify-center gap-5 mt-6">
        <button className="bg-[#121212] text-[#fff] py-2 px-6  md:text-[1.125rem] text-[0.75rem] rounded-md hover:opacity-85 transition duration-500 ease-in-out hover:scale-125">
          Try Free
        </button>
        <a
          href="http://www.google.com"
          className="text-[#0057A8] underline md:text-[1.125rem] text-[0.75px]"
        >
          Request Product Demo
        </a>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <img
          src={free}
          className="md:w-[59.5rem] md:h-[25rem] w-[43.75px]"
          alt="free"
        />
      </div>
    </div>
  );
};

export default Free;
