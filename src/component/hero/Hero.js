import React, { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import bgImg from "../../images/bg1.png";
import AOS from "aos";
import "aos/dist/aos.css" 
import resume from "./resume.pdf"
import { Link } from "react-scroll";
import Typed from 'react-typed';
const Hero = ({hero}) => {

  useEffect(()=>{
    AOS.init({duration:3000})
  },[])

  return (
    <div id="hero" ref={hero}>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-full h-[600px] bg-center bg-cover md:h-[700px] lg:h-[800px]   lg:bg-center pl-2  lg:pl-0  bg-origin-padding md:bg-origin-content    md:bg-top md:bg-cover bg-fixed relative mt-12 lg:bg-contain xl:bg-no-repeat"
      >
        <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
        <div className="flex flex-col gap-4 mt-28 p-2 items-center  md:mt-48 lg:mt-52 lg:pl-0 xl:mt-[280px]  h-full text-white z-20 absolute  md:left-[8%] lg:left-0 text-center xl:left-36  "  data-aos="fade-up" data-aos-duration="1000">
       <h1 className="text-xl mt-10 font-semibold">I ' m   <Typed
        strings={['Front', 'Web']}
        typeSpeed={80}
        backSpeed={60}
        loop
        className="font-bold"
      /> Developer</h1>
      <h2 className="text-2xl md:text-3xl  mx-auto  text-white font-bold mb-4"
          >
            Ready to create something amazing together?
          </h2>
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={6000}
              duration={2000}  
              className="border-2 mx-auto cursor-pointer  border-white p-2 rounded hover:bg-white hover:text-black transition-all duration-500"
            >
              Get in Touch
            </Link>
            <a
            target="_blank"
            rel="noreferrer"
              href={resume}
              className="border-2 mx-auto cursor-pointer  border-white p-2 rounded hover:bg-white hover:text-black transition-all duration-500"
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
