import React, { useEffect  } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css" 
import resume from "./resume.pdf"
import { Link } from "react-scroll";
import Typed from "react-typed";


const Hero = ({hero}) => {

  useEffect(()=>{
    AOS.init({duration:3000})
  },[])


 

  return (
     <div className=" w-[100%] h-[650px] sm:h-[550px] lg:h-[650px] relative bg-black bg-opacity-90  dark:text-black dark:ml-1 dark:overflow-hidden grid "> 
        <div id="hero" ref={hero}>

        <div className="flex flex-col gap-4 mt-24  items-center  md:mt-48 lg:mt-52 lg:pl-0 xl:mt-[200px] pl-4 dark:pl-0 h-full text-white z-20 absolute mx-auto  md:left-[8%] lg:left-0 text-center  xl:left-[150px] 2xl:left-[30%] dark:mr-2    "  data-aos="fade-up" data-aos-duration="1000">

        <Typed
        className="text-2xl"
        strings={['Web Developer', 'FrontEnd Developer' ,"MERN Developer"]}
        typeSpeed={50} 
        backSpeed={30} 
        loop 
      />
      <h2 className="text-2xl md:text-3xl  mx-auto  text-white font-bold mb-4 dark:text-gray-300  "
          >
            Ready to create something amazing together?
          </h2>
          <p className="  mx-auto p-4 lg:p-1 text-lg sm:text-base  md:w-[600px] text-center  text-gray-300 mb-8 dark:text-gray-300">
          Explore my portfolio to see my work and skills. If you're interested in collaborating or have a project in mind, I'd love to hear from you!
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={6000}
              duration={2000}  
              className="border-2 mx-auto cursor-pointer dark:hover:text-white   border-white p-2 rounded hover:bg-white hover:text-black transition-all duration-500"
            >
              Get in Touch
            </Link>
            <a
            target="_blank"
            rel="noreferrer"
              href={resume}
              className="border-2 mx-auto cursor-pointer  border-white p-2 rounded hover:bg-white hover:text-black transition-all duration-500 "
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-6 my-5 text-xl md:text-3xl cursor-pointer transition-colors duration-500 ">
            <a href="https://github.com/lakshmipriyan0606" rel="noreferrer" target="_blank"> <FaGithub className="hover:text-white dark:hover:text-white "/></a>
            <a
              href="https://www.linkedin.com/in/lakshmipriyan0606/" rel="noreferrer" target="_blank"> <FaLinkedinIn className="hover:text-blue-700"/></a>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Hero;
