import React from "react";
import projectData from "./projectData";
import { VscGithub } from "react-icons/vsc";
import { FaEye} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = ({project}) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div id="project" ref={project}>
      <h1 className="text-sm font-light text-gray-500 uppercase pl-5 p-3 mt-10 dark:text-white  dark:font-semibold">
       My work
      </h1>
      <h2 className="text-3xl py-1   uppercase mb-4 p-5 dark:text-white  dark:font-semibold">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-6 place-items-center p-5 " >
        {projectData.map((data, index) => (
          <div
            key={index}
            className="w-full h-full  relative shadow cursor-pointer group" data-aos="flip-right" >
            <div className="absolute w-full h-full group-hover:bg-black group-hover:bg-opacity-40 top-0 left-0 bg-opacity-30 shadow-xl transition-all duration-700">
              <div className="flex  gap-14 absolute  left-[30%] top-[35%] md:top-[45%]  md:left-27%] md:gap-20 text-2xl lg:gap-9  text-black opacity-0 group-hover:opacity-100  transition-all duration-700 ">
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-7 h-7  md:w-9 md:h-9    bg-black  rounded-full flex justify-center items-center "
                >
                  <FaEye className="  text-white text-opacity-70 hover:text-opacity-100" />
                </a>
                <a
                  href={data.giturl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-7 h-7 md:w-9 md:h-9 bg-black rounded-full flex justify-center items-center"
                >
                  <VscGithub className="text-white text-opacity-70 hover:text-opacity-100" />
                </a>
              </div>
              <h1 className="  transition-all duration-700 text-white opacity-0 group-hover:opacity-100 uppercase font-semibold flex justify-center items-end bg-black z-20 bg-opacity-50 md:p-2 ">
                {data.skills}
              </h1>
              <div></div>
            </div>
            <img
              src={data.img}
              alt="project-img"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
