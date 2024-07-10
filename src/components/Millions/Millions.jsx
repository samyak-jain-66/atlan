import flipkart from '../../assets/flipkart.svg';
import amazon from '../../assets/amazon.svg';
import uber from '../../assets/uber.svg';
import ola from '../../assets/ola.svg';
import hyundai from '../../assets/hyundai.svg';
import netflix from '../../assets/netflix.svg';
import nike from '../../assets/nike.svg';
import paytm from '../../assets/paytm.svg';
import tesla from '../../assets/tesla.svg';
import phonepe from '../../assets/phonepe.svg';
import sharechat from '../../assets/share-chat.svg';

const Millions = () => {
  return (
    <div
      className='flex flex-col gap-2 items-center justify-center'
      data-aos='slide-right'
      data-aos-duration='600'
      data-aos-easing='ease-in-out'
    >
      <h2 className='md:text-[45px] text-center text-[#121212] antialiased font-bold text-[22px]'>
        Millions Runs on Notes every day
      </h2>
      <div className='max-w-[490px] text-center mx-auto'>
        <h6 className='md:text-[16px] text-[#121212] antialiased text-[14px]'>
          Powering the world’s best teams, from next-generation startups to
          established enterprises.
        </h6>
      </div>
      <div className='max-w-[720px] flex items-center justify-center gap-6 mt-8 flex-wrap'>
        <img
          src={flipkart}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='flipkart'
        />
        <img
          src={amazon}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px] mt-3'
          alt='amazon'
        />
        <img
          src={uber}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='uber'
        />
        <img
          src={hyundai}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='hyundai'
        />
        <img
          src={netflix}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='netflix'
        />
        <img
          src={nike}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='nike'
        />
        <img
          src={paytm}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='paytm'
        />
        <img
          src={tesla}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='tesla'
        />
        <img
          src={phonepe}
          className='md:max-w-[130px] md:max-h-[130px] object-contain max-w-[100px] max-h-[100px]'
          alt='phonepe'
        />
        <img
          src={sharechat}
          className='md:max-w-[110px] md:max-h-[110px] object-contain max-w-[70px] max-h-[45px]'
          alt='sharechat'
        />
        <img
          src={ola}
          className='md:max-w-[89px] md:max-h-[55px] object-contain max-w-[70px] max-h-[45px]'
          alt='ola'
        />
      </div>
    </div>
  );
};

export default Millions;
