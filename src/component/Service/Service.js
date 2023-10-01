import React, { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { BiLayer } from "react-icons/bi";
import "./service.css";
import bgImg from "../../images/cover_bg_1.jpg";
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <section className="my-9">
      <h1 className="text-lg font-light text-gray-500 uppercase pl-5 p-3">
        What I do?
      </h1>
      <h2 className="text-xl py-1  uppercase mb-11 p-5">

        Here are some of my expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:place-items-center  xl:grid-cols-3 place-items-center gap-9 sm:gap-14 p-4 ">
  <div className="w-full sm:h-[350px] lg:h-[400px] mt-5 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center border-b-4 border-blue-700 p-5" data-aos="zoom-in-right">
    <div className="hexagon flex text-3xl justify-center items-center absolute bottom-16 xl:bottom-16">
      <FaRegLightbulb className="text-white" />
    </div>
    <h1 className="text-xl font-semibold uppercase">Innovative Ideas</h1>
    <p className="text-center text-gray-500 font-light">
      Transform e-commerce by integrating virtual reality (VR) technology for immersive product exploration, allowing customers to virtually try before they buy, increasing conversion rates.
    </p>
  </div>
  <div className="w-full lg:h-[400px] mt-14 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center border-b-4 border-red-600 p-5" data-aos="zoom-in-left">
    <div className="hexagon2 flex text-3xl justify-center items-center absolute bottom-10 xl:bottom-16">
      <BsDatabase className="text-white" />
    </div>
    <h1 className="text-xl font-semibold uppercase">Software</h1>
    <p className="text-center text-gray-500 font-light">
      Experienced in developing and deploying web and mobile applications, leveraging modern frameworks and libraries. Strong problem-solving skills and a commitment to staying current with emerging technologies, ensuring efficient and innovative software solutions.
    </p>
  </div>
  <div className="w-full lg:h-[400px] mt-14 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center border-b-4 border-yellow-500 p-5" data-aos="zoom-in-right">
    <div className="hexagon3 flex text-3xl justify-center items-center absolute bottom-10 sm:bottom-14 lg:bottom-24">
      <BiLayer className="text-white" />
    </div>
    <h1 className="text-xl font-semibold uppercase">Web Design</h1>
    <p className="text-center text-gray-500 font-light">
      Experienced in designing websites that adapt seamlessly to various screen sizes and devices for optimal accessibility.
    </p>
  </div>
  <div className="w-full lg:h-[400px] mt-14 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center border-b-4 border-[#2FA499] p-5" data-aos="zoom-in-left">
    <div className="hexagon4 flex text-3xl justify-center items-center absolute bottom-10 xl:bottom-16">
      <MdPhoneIphone className="text-white" />
    </div>
    <h1 className="text-xl font-semibold uppercase">Application</h1>
    <p className="text-center text-gray-500 font-extralight">
      App technology refers to the use of software and hardware tools to develop, deploy. It encompasses programming languages, frameworks, and tools used to create user-friendly and functional applications.
    </p>
  </div>
</div>

      <section className="p-5">
        <div
          style={{
            backgroundAttachment: "fixed",
            backgroundImage: `url(${bgImg})`,
          }}
          className="bg-cover  bg-center h-[600px] w-full my-4 relative"
        >
          <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
          <div className="grid-cols-1 grid place-items-center gap-6">
            <div className="flex flex-col gap-3 justify-center items-center my-2 text-white  absolute  top-10 text-xl font-medium">
              <CountUp  className='text-[40px]'
                start={0}
                end={20}
                duration={3} 
              />
              <h2 className=" text-[19px] pt-2 text-[#ffffffb3] font-light">CUPS OF COFFEE</h2>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center my-2 text-white  absolute  top-40 text-xl font-medium">
            <CountUp  className='text-[40px]'
                start={0}
                end={10}
                duration={3} 
              />
              <h2 className=" text-[19px] pt-2 text-[#ffffffb3] font-light uppercase">Projects</h2>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center my-2 text-white  absolute  top-64 mt-4 text-xl font-medium">
            <CountUp  className='text-[40px]'
                start={0}
                end={5}
                duration={2} 
              />
              <h2 className=" text-[19px] pt-2 text-[#ffffffb3] font-light uppercase">clients</h2>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center my-2 text-white  absolute  top-96 mt-4 text-xl font-medium">
            <CountUp  className='text-[40px]'
                start={0}
                end={3}
                duration={2} 
              />
              <h2 className=" text-[19px] pt-2 text-[#ffffffb3] font-light uppercase">partners</h2>
            </div>
          </div>
          {/* <CountUp/> */}
        </div>
      </section>
    </section>
  );
};

export default Service;
