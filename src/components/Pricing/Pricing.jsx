import Card from "../../common/Card/Card";

function Pricing({ pricingRef }) {
  return (
    <div
      className="pt-28 pb-20"
      ref={pricingRef}
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
    >
      <div className="w-[80%] m-auto text-center">
        <h1 className="text-[45px] text-[#121212] antialiased font-semibold">
          Choose your right plan!
        </h1>
        <p className="text-[16px]  text-[#121212] antialiased">
          Select from best plans, ensuring a prefect match. Need more or less?
        </p>
        <p className="text-[16px]  text-[#121212] antialiased">
          Customize your subscription for a seamless fit!
        </p>
      </div>
      <div className="w-[80%] m-auto mt-[65px] flex gap-10 justify-center items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Pricing;
