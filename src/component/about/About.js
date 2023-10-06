import React, { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { GiLaptop} from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLayer } from "react-icons/bi";
import "./service.css";

const About = ({ about }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section ref={about} id="aabout">
      <div className="my-7 p-7">
        <h1 className="text-lg font-light text-gray-500 uppercase dark:text-white  dark:font-semibold ">About us</h1>
        <h2 className="text-2xl py-1 font-semibold uppercase">Who am I ?</h2>
        <p
          className="text-gray-500 p-2 font-light"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <span className="text-gray-800 dark:text-gray-400 font-semibold">
            I'm Lakshmi Priyan
          </span>
          , a dedicated frontend developer with a strong command of HTML, CSS,
          and JavaScript, along with proficiency in various frameworks. My
          passion lies in the art of crafting user-centric designs, where
          pixel-perfection meets seamless interactivity.
        </p>
        <p
          className="text-gray-500 p-2 font-light"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:place-items-center  xl:grid-cols-3 place-items-center gap-9 sm:gap-14 p-4 ">
            <div
              className="w-full sm:h-[350px] lg:h-[400px] mt-5 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center dark:bg-[#111827] border-b-4 border-blue-700 p-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="hexagon flex text-3xl justify-center items-center absolute bottom-16 xl:bottom-16">
                <FaRegLightbulb className="text-white" />
              </div>
              <h1 className="text-xl font-semibold uppercase dark:text-white">
                Innovative Ideas
              </h1>
              <p className="text-center text-gray-500 font-light">
              Web developers innovate by designing visually appealing and user-friendly interfaces. This involves creating layouts, selecting color schemes, and designing interactive elements to enhance user experience.
              </p>
            </div>
            <div
              className="w-full lg:h-[400px] mt-14 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center border-b-4 border-red-600 p-5 dark:bg-[#111827]"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="hexagon2 flex text-3xl justify-center items-center absolute bottom-10 xl:bottom-16">
                <BsDatabase className="text-white" />
              </div>
              <h1 className="text-xl font-semibold uppercase dark:text-white">Software</h1>
              <p className="text-center text-gray-500 font-light">
                Experienced in developing and deploying web and mobile
                applications, leveraging modern frameworks and libraries. Strong
                problem-solving skills and a commitment to staying current with
                emerging technologies, ensuring efficient and innovative
                software solutions.
              </p>
            </div>
            <div
              className="w-full lg:h-[400px] mt-14 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center border-b-4 border-yellow-500 p-5 dark:bg-[#111827]"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="hexagon3 flex text-3xl justify-center items-center absolute bottom-10 sm:bottom-14 lg:bottom-24">
                <BiLayer className="text-white" />
              </div>
              <h1 className="text-xl font-semibold uppercase dark:text-white">Web Design</h1>
              <p className="text-center text-gray-500 font-light">
                Experienced in designing websites that adapt seamlessly to
                various screen sizes and devices for optimal accessibility.
              </p>
            </div>
            <div
              className="w-full lg:h-[400px] mt-14 bg-white shadow-2xl flex flex-col gap-6 justify-center items-center border-b-4 border-[#2FA499] p-5 dark:bg-[#111827]"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="hexagon4 flex text-3xl justify-center items-center absolute bottom-10 xl:bottom-16">
                <GiLaptop className="text-white" />
              </div>
              <h1 className="text-xl font-semibold uppercase dark:text-white">Web Development</h1>
              <p className="text-center text-gray-500 font-extralight">
              Web development involves using programming languages, frameworks, and tools to create and maintain websites and web applications. It encompasses software and hardware resources to design, build, and deploy user-friendly online platforms.
              </p>
            </div>
          </div>
        </main>
        <section className="p-5 ">
          <div className="bg-[#F9BF3F] dark:bg-[#F5FFC8] flex flex-col i gap-2 ">
            <h2 className="text-3xl lg:text-lg lg:font-medium font-extralight p-5" data-aos="zoom-in">
             I'm excited to share that I'm familiar with 15 web technologies!
            </h2>
            <button className="border w-32 p-1 uppercase text-base border-black ml-10 my-3 hover:border-white hover:bg-white hover:text-black transition-all duration-500">
              hire me
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
