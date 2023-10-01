import React, { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import bgImg from "../../images/bg1.png";
import AOS from "aos";
import "aos/dist/aos.css" 
const Hero = () => {

  useEffect(()=>{
    AOS.init({duration:3000})
  },[])

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-full h-[600px] bg-center bg-cover md:h-[700px] lg:h-[800px]  lg:bg-center   bg-origin-padding md:bg-origin-content    md:bg-top md:bg-cover bg-fixed relative mt-12 lg:bg-contain xl:bg-no-repeat"
      >
        <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
        <div className="flex flex-col gap-4 mt-28 p-2 items-center  md:mt-48 lg:mt-52  xl:mt-[280px]  h-full text-white z-20 absolute  md:left-[8%] lg:left-0 text-center xl:left-36  "  data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl  mx-auto  text-white font-bold mb-4"
          >
            Ready to create something amazing together?
          </h2>
          <p className="  mx-auto  md:w-[600px] text-center  text-gray-300 mb-8">
            Explore my portfolio to see my work and skills. If you're interested
            in collaborating or have a project in mind, I'd love to hear from
            you!
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="#contact"
              className="border-2 mx-auto  border-white p-2 rounded hover:bg-white hover:text-black transition-all duration-500"
            >
              Get in Touch
            </a>
            <a
              href="#jv"
              className="border-2 mx-auto  border-white p-2 rounded hover:bg-white hover:text-black transition-all duration-500"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-6 my-5 text-xl md:text-3xl cursor-pointer transition-colors duration-500">
            <a href="https://github.com/lakshmipriyan0606" rel="noreferrer" target="_blank"> <FaGithub className="hover:text-white"/></a>
            <a
              href="https://www.linkedin.com/in/lakshmipriyan0606/" rel="noreferrer" target="_blank"> <FaLinkedinIn className="hover:text-blue-700"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
