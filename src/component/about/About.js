import React, { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import { BiGlobeAlt } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section id="about">
      <div className="my-7 p-7">
        <h1 className="text-lg font-light text-gray-500 uppercase">About us</h1>
        <h2 className="text-2xl py-1 font-semibold uppercase">Who am I ?</h2>
        <p className="text-gray-500 p-2 font-light">
          <span className="text-gray-800 font-semibold">I'm Lakshmi Priyan</span>, a dedicated frontend developer with a strong
          command of HTML, CSS, and JavaScript, along with proficiency in
          various frameworks. My passion lies in the art of crafting
          user-centric designs, where pixel-perfection meets seamless
          interactivity.
        </p>
        <p className="text-gray-500 p-2 font-light">
          My portfolio showcases a wide range of projects that highlight my
          commitment to responsive and engaging web experiences. With a keen eye
          for detail and a love for staying up-to-date with the latest
          technologies, I'm driven to create exceptional digital solutions that
          captivate users and elevate brands. Let's build captivating web
          journeys together!
        </p>
      </div>
      <div>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center p-5" >
            <div className="mt-3 shadow-2xl rounded w-full h-[150px] flex justify-center flex-col gap-5 p-5 border-b-[3px] border-b-blue-600" data-aos="zoom-in">
              <FaRegLightbulb className="text-2xl text-blue-600" />
              <h1 className="text-xl">Graphic Design</h1>
            </div>
            <div className="shadow-2xl rounded w-full h-[150px] flex justify-center flex-col gap-5 p-5 border-b-[3px] border-b-red-600" data-aos="zoom-in">
              <BiGlobeAlt className="text-2xl text-red-600" />
              <h1 className="text-xl">Web Design</h1>
            </div>
            <div className="shadow-2xl rounded w-full h-[150px] flex justify-center flex-col gap-5 p-5 border-b-[3px] border-b-yellow-500" data-aos="zoom-in">
              <BsDatabase className="text-2xl text-yellow-500" />
              <h1 className="text-xl">Software</h1>
            </div>
            <div className="shadow-2xl rounded w-full h-[150px] flex justify-center flex-col gap-5 p-5 border-b-[3px] border-b-purple-700" data-aos="zoom-in">
              <MdPhoneIphone className="text-2xl text-purple-700" />
              <h1 className="text-xl">Application</h1>
            </div>
          </div>
        </main>
        <section className="p-5 ">
          <div className="bg-[#F9BF3F] flex flex-col i gap-2 " >
            <h2 className="text-3xl font-extralight p-5" data-aos="zoom-in">I am happy to know you that 10+ projects done successfully!</h2>
            <button className="border w-32 p-1 uppercase text-base border-black ml-10 my-3 hover:border-white hover:bg-white hover:text-black transition-all duration-500">hire me</button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
