import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Experience = ({experience}) => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);


  return (
    <div className="p-4" id="experience" ref={experience}>
      <h1 className="text-sm font-light text-gray-500 uppercase pl-5 p-3 dark:text-white  dark:font-semibold">
        Experience
      </h1>
      <h2 className="text-xl py-1 font-light  uppercase mb-4 p-5 dark:text-white  dark:font-semibold">
        Work Experience
      </h2>
      <ol
        className="relative border-l border-gray-200 dark:border-gray-700"
        data-aos="fade-up" data-aos-duration="1000"
      >
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-3 h-3 text-blue-800  dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div data-aos="zoom-in" data-aos-duration="2000">
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Freelancer
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2023 - Now
            </time>
            <p className="text-sm font-normal text-gray-500">
              Engaged in freelancing on real-time projects, specializing in
              front-end and full-stack development. Collaborated with diverse
              clients to deliver customized web solutions, including e-commerce
              sites and interactive web applications, while gaining practical
              experience in project management and client communication.
            </p>
          </div>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-3 h-3 text-blue-800 text-2xl dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div data-aos="zoom-in"data-aos-duration="1000">
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              MERN Technology Learning Journey
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2023 - August 2023
            </time>
            <p className="text-sm font-normal text-gray-500 ">
              Enrolled in an intensive MERN (MongoDB, Express.js, React,
              Node.js) technology course, gaining comprehensive expertise in
              building full-stack web applications. Developed proficiency in
              database management, server-side scripting, and front-end
              development, enhancing my skills for real-world software
              development projects.
            </p>
          </div>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-3 h-3 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div data-aos="zoom-in"data-aos-duration="1000">
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Intership
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2023 - May 2023
          </time>
          <p className="text-sm font-normal text-gray-500 ">
            Engaged in a front-end internship at Artifix Information of
            Technology Private Limited in Bengaluru, focusing on HTML, CSS,
            React.js, and utilizing UI design with Tailwind CSS and Bootstrap.
            Actively contributed to the development of React.js components,
            gaining valuable front-end development experience.
          </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;