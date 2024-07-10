import flipkart from "../../assets/flipkart.svg";
import amazon from "../../assets/amazon.svg";
import uber from "../../assets/uber.svg";
import ola from "../../assets/ola.svg";
import hyundai from "../../assets/hyundai.svg";
import netflix from "../../assets/netflix.svg";
import nike from "../../assets/nike.svg";
import paytm from "../../assets/paytm.svg";
import tesla from "../../assets/tesla.svg";
import phonepe from "../../assets/phonepe.svg";
import sharechat from "../../assets/share-chat.svg";

const Millions = () => {
  return (
    <div
      className="flex flex-col gap-2 items-center justify-center"
      data-aos="slide-right"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
    >
      <h2 className="md:text-[2.75rem] text-center text-[#121212] antialiased font-bold text-[1.5rem]">
        Millions Runs on Notes every day
      </h2>
      <div className="max-w-[30.5rem] text-center mx-auto">
        <h6 className="md:text-[1rem] text-[#121212] antialiased text-[0.875rem]">
          Powering the world’s best teams, from next-generation startups to
          established enterprises.
        </h6>
      </div>
      <div className="max-w-[45rem] flex items-center justify-center gap-6 mt-8 flex-wrap">
        <img
          src={flipkart}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="flipkart"
        />
        <img
          src={amazon}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem] mt-3"
          alt="amazon"
        />
        <img
          src={uber}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="uber"
        />
        <img
          src={hyundai}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="hyundai"
        />
        <img
          src={netflix}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="netflix"
        />
        <img
          src={nike}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="nike"
        />
        <img
          src={paytm}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="paytm"
        />
        <img
          src={tesla}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="tesla"
        />
        <img
          src={phonepe}
          className="md:max-w-[8.125rem] md:max-h-[8.125rem] object-contain max-w-[6.25rem] max-h-[6.25rem]"
          alt="phonepe"
        />
        <img
          src={sharechat}
          className="md:max-w-[6.875] md:max-h-[6.875] object-contain max-w-[4.375] max-h-[2.75rem]"
          alt="sharechat"
        />
        <img
          src={ola}
          className="md:max-w-[5.56rem] md:max-h-[3.5rem] object-contain max-w-[4.3rem] max-h-[2.75rem]"
          alt="ola"
        />
      </div>
    </div>
  );
};

export default Millions;
