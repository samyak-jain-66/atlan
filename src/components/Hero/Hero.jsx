import one from '../../assets/1.svg';
import two from '../../assets/2.svg';

const Hero = () => {
  return (
    <div className='mt-32'>
      <div>
        <h2 className='md:text-[45px] text-center text-[#121212] antialiased font-bold text-[24px]'>
          Unleash the creativity
        </h2>
        <div className='mt-4 text-center max-w-[550px] mx-auto'>
          <h6 className='md:text-[24px] text-[#121212] antialiased text-[14px]'>
            Transform your thoughts into achievements with our notes app.
          </h6>
        </div>
        <div className='flex items-center justify-center mt-6 gap-10'>
          <button className='bg-[#0057A8] text-[#fff] py-2 px-8 rounded-md hover:opacity-85 transition duration-500 ease-in-out hover:scale-125 md:text-[18px] text-[12px]'>
            Try Free
          </button>
          <h6 className='md:text-[18px] text-[#0057A8] antialiased font-medium text-[12px]'>
            Request Demo
          </h6>
        </div>
      </div>
      <div className='lg:flex items-center justify-center overflow-hidden'>
        <img
          src={one}
          height={500}
          width={600}
          className='sm:w-[600px] sm:h-[500px] w-[350px] h-[300px] mx-auto'
          alt='hero_one'
        />
        <img
          src={two}
          height={500}
          width={600}
          className='sm:w-[600px] sm:h-[500px] w-[350px] h-[300px] mx-auto'
          alt='hero_two'
        />
      </div>
    </div>
  );
};

export default Hero;
