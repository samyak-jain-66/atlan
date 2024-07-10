import right from '../../assets/right.png';
import left from '../../assets/left.jpg';

const Movement = () => {
  return (
    <div>
      <h2 className='md:text-[45px] text-[21px] mt-10 text-center text-[#121212] antialiased font-bold break-words max-w-[820px] md:mx-auto mx-2'>
        Become part of a worldwide initiative Release your imagination
      </h2>
      <div className='max-w-[740px] text-center mx-auto mt-5'>
        <h6 className='md:text-[16px] text-[14px] text-[#121212] antialiased mx-5'>
          Our energetic community generates content, delivers courses, and
          organizes events worldwide. events all over the world. Be a part of
          our global influence and creativity !
        </h6>
      </div>
      <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-5 md:mt-10 mt-5'>
        <div className='px-8 py-6 bg-[#f6f5f4] rounded-xl w-[280px] border-[2px] border-[#f6f5f4]'>
          <h2 className='text-[#0057A8] antialiased md:text-[53px] text-[35px] font-bold'>
            5M+
          </h2>
          <h6 className='text-[16px] text-[#121212] antialiased'>
            community members
          </h6>
        </div>
        <div className='px-8 py-6 bg-[#f6f5f4] rounded-xl w-[280px] border-[2px] border-[#f6f5f4]'>
          <h2 className='text-[#0057A8] antialiased md:text-[53px] text-[35px] font-bold'>
            5M+
          </h2>
          <h6 className='text-[16px] text-[#121212] antialiased'>
            community members
          </h6>
        </div>
        <div className='px-8 py-6 bg-[#f6f5f4] rounded-xl w-[280px]  border-[2px] border-[#f6f5f4]'>
          <h2 className='text-[#0057A8] antialiased md:text-[53px] text-[35px] font-bold'>
            5M+
          </h2>
          <h6 className='text-[16px] text-[#121212] antialiased'>
            community members
          </h6>
        </div>
      </div>
      <div className='flex md:flex-row flex-col items-center justify-center md:gap-14 mt-5 gap-8'>
        <div className='pt-6 bg-[#f6f5f4] rounded-xl md:w-[433px] w-[100vw] md:h-[510px] border-[2px] border-[#f6f5f4]'>
          <div className='pl-8'>
            <h2 className='text-[#121212] antialiased text-[18px] font-bold'>
              An always-on support network
            </h2>
            <h6 className='text-[#121212] antialiased text-[16px]'>
              Swap setups and share tips in over 149 online communities.
            </h6>
            <button className='bg-[#0057A8] text-[#fff] py-[6px] px-4 rounded-md hover:opacity-85 mt-6 transition duration-500 ease-in-out hover:scale-125'>
              Get Started
            </button>
          </div>

          <div className='mt-14 md:block flex md:justify-normal justify-center pb-10'>
            <img
              src={left}
              className='rounded-xl sm:w-[500px] w-[350px] h-[318px]'
              alt='multiple_languages'
            />
          </div>
        </div>
        <div className='pt-6 bg-[#f6f5f4] rounded-xl md:w-[433px] w-[100vw] md:h-[510px] border-[2px] border-[#f6f5f4]'>
          <div className='pl-8'>
            <h2 className='text-[#121212] antialiased text-[18px] font-bold'>
              An always-on support network
            </h2>
            <h6 className='text-[#121212] antialiased text-[16px]'>
              Swap setups and share tips in over 149 online communities.
            </h6>
            <button className='bg-[#0057A8] text-[#fff] py-[6px] px-4 rounded-md hover:opacity-85 mt-5 transition duration-500 ease-in-out hover:scale-125'>
              Get Started
            </button>
          </div>
          <div className='mt-14 md:block flex md:justify-normal justify-center pb-10'>
            <img
              src={right}
              className='rounded-xl sm:w-[500px] w-[350px] h-[320px]'
              alt='multiple_languages'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
