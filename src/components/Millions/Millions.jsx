import React from "react";
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
      <h2 className="text-[45px] text-center text-[#121212] antialiased font-bold">
        Millions Runs on Notes every day
      </h2>
      <div className="max-w-[490px] text-center mx-auto">
        <h6 className="text-[16px] text-[#121212] antialiased">
          Powering the world’s best teams, from next-generation startups to
          established enterprises.
        </h6>
      </div>
      <div className="max-w-[720px] flex items-center justify-center gap-6 mt-8 flex-wrap">
        <img
          src={flipkart}
          className="max-w-[89px] max-h-[55px] object-contain" alt="flipkart"
        />
        <img
          src={amazon}
          className="max-w-[89px] max-h-[55px] object-contain mt-3" alt="amazon"
        />
        <img src={uber} className="max-w-[89px] max-h-[55px] object-contain" alt="uber"/>
        <img
          src={hyundai}
          className="max-w-[89px] max-h-[55px] object-contain" alt="hyundai"
        />
        <img
          src={netflix}
          className="max-w-[89px] max-h-[55px] object-contain"
          alt="netflix"
        />
        <img src={nike} className="max-w-[89px] max-h-[55px] object-contain" alt="nike"/>
        <img src={paytm} className="max-w-[89px] max-h-[55px] object-contain" alt="paytm"/>
        <img src={tesla} className="max-w-[89px] max-h-[55px] object-contain" alt="tesla"/>
        <img
          src={phonepe}
          className="max-w-[130px] max-h-[130px] object-contain" alt="phonepe"
        />
        <img
          src={sharechat}
          className="max-w-[110px] max-h-[100px] object-contain" alt="sharechat"
        />
        <img src={ola} className="max-w-[89px] max-h-[55px] object-contain" alt="ola"/>
      </div>
    </div>
  );
};

export default Millions;
