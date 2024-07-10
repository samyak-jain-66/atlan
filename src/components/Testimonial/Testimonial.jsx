import { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { testimonials } from "../../utils/Static";

const TestimonialCard = ({ name, image, testimonial }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mx-4 min-w-[18.75rem] max-w-[31.25rem]">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div className="text-lg font-semibold">{name}</div>
    </div>
    <div className="text-gray-600 text-[0.875rem]">{testimonial}</div>
  </div>
);

const Testimonials = ({ testimonialRef }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#f6f5f4] py-12 min-h-[80vh]"
      ref={testimonialRef}
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="md:text-[2.75rem] text-[1.5rem] text-center text-[#121212] antialiased font-bold break-words max-w-[820px] mx-auto mb-5">
        Words of praise from others about our presence.
      </h2>
      <div className="relative md:max-w-[62.5rem]">
        <div
          ref={scrollRef}
          className="flex lg:flex-row flex-col overflow-x-auto py-4 no-scrollbar lg:gap-0 gap-3"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <span
          onClick={scrollLeft}
          className="hidden absolute cursor-pointer lg:flex justify-center items-center pl-[0.25rem] left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-[#ccc] w-[2.25rem] h-[2.25rem] rounded-full"
        >
          <MdArrowBackIos />
        </span>
        <span
          onClick={scrollRight}
          className="hidden absolute cursor-pointer lg:flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-[#ccc] w-[2.25rem] h-[2.25rem] rounded-full"
        >
          <MdArrowForwardIos />
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
