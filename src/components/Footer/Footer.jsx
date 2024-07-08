import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border border-t-[1px] min-h-[250px] px-56 pt-12 pb-16">
      <div className="flex gap-3 justify-center">
        <div className="flex flex-1 flex-col text-justify">
          <h1 className="text-[0.9375rem] font-semibold text-[#3f3f3f]">
            Acme
          </h1>
          <div className="flex gap-3 mt-[25px]">
            <span className="cursor-pointer">
              <FaInstagram size={20} />
            </span>
            <span className="cursor-pointer">
              <FaTwitter size={20} />
            </span>
            <span className="cursor-pointer">
              <FaLinkedin size={20} />
            </span>
            <span className="cursor-pointer">
              <FaFacebook size={20} />
            </span>
            <span className="cursor-pointer">
              <FaYoutube size={20} />
            </span>
          </div>
          <div className="flex gap-3 mt-[20px]">
            <p className="text-[0.8750rem]">©️ 2024 Acme</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col text-justify gap-3">
          <h1 className="text-[0.9375rem] font-semibold text-[#3f3f3f]">
            Company
          </h1>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">About us</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Careers</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Security</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Status</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">
              Terms & Privacy
            </span>
          </a>
        </div>
        <div className="flex flex-1 flex-col text-justify gap-3">
          <h1 className="text-[0.9375rem] font-semibold text-[#3f3f3f]">
            Download
          </h1>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">
              iOS & Android
            </span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">
              Mac & Windows
            </span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Calendar</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Web Clipper</span>
          </a>
        </div>
        <div className="flex flex-1 flex-col text-justify gap-3">
          <h1 className="text-[0.9375rem] font-semibold text-[#3f3f3f]">
            Resources
          </h1>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Help center</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Pricing</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Blog</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Community</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">
              Integrations
            </span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Templates</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Affiliates</span>
          </a>
        </div>
        <div className="flex flex-1 flex-col text-justify gap-3">
          <h1 className="text-[0.9375rem] font-semibold text-[#3f3f3f]">
            Acme for
          </h1>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Enterprise</span>
          </a>
          <a href="#" className="w-max">
            <span className="text-[#3f3f3f] text-[0.8750rem]">
              Small business
            </span>
          </a>
          <a href="#" className="w-max pb-[20px]">
            <span className="text-[#3f3f3f] text-[0.8750rem]">Personal</span>
          </a>
          <h1 className="text-[0.9375rem] font-semibold text-[#3f3f3f] flex items-center gap-2">
            <p>Explore more</p>
            <span>
              <FaArrowRight />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
