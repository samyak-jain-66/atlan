import { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    name: "Eric Smith",
    image: "https://i.redd.it/8fqzw8yxpkp11.jpg",
    testimonial:
      "I have been buying proxies here for a long time, I can vouch for the quality of the product and the prices are always nice as well.",
  },
  {
    name: "Cameron99",
    image: "https://i.redd.it/8fqzw8yxpkp11.jpg",
    testimonial:
      "This is the best proxy in my experience. Other proxies quickly became unusable and very frustrating (they are expensive). So I recommend this proxy.",
  },
  {
    name: "Perry Park",
    image: "https://i.redd.it/8fqzw8yxpkp11.jpg",
    testimonial:
      "Been using this service for a long time. Took 5 proxies for FB, quality is great, high speed. Service and proxies are top notch.",
  },
  {
    name: "Perry Park",
    image: "https://i.redd.it/8fqzw8yxpkp11.jpg",
    testimonial:
      "Been using this service for a long time. Took 5 proxies for FB, quality is great, high speed. Service and proxies are top notch.",
  },
];

const TestimonialCard = ({ name, image, testimonial }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mx-4 min-w-[300px] max-w-[300px]">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div className="text-lg font-semibold">{name}</div>
    </div>
    <div className="text-gray-600 text-[14px]">{testimonial}</div>
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
      <h2 className="text-[45px] text-center text-[#121212] antialiased font-bold break-words max-w-[820px] mx-auto mb-5">
        Words of praise from others about our presence.
      </h2>
      <div className="relative max-w-[1000px]">
        <div ref={scrollRef} className="flex overflow-x-auto py-4 no-scrollbar">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <span
          onClick={scrollLeft}
          className="absolute cursor-pointer flex justify-center items-center pl-[5px] left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-[#ccc] w-[35px] h-[35px] rounded-full"
        >
          <MdArrowBackIos />
        </span>
        <span
          onClick={scrollRight}
          className="absolute cursor-pointer flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-[#ccc] w-[35px] h-[35px] rounded-full"
        >
          <MdArrowForwardIos />
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
