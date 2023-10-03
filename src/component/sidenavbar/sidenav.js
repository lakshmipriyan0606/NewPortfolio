import React, { useState, useEffect, useCallback } from "react";
import profileImg from "../../images/profile-img.jpg";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Sidenav = ({ show, setShow }) => {

  const handleClose = () => {
    setShow(!show);
  };

  const [active, setActive] = useState(null); 

  function handleClick(linkName) {
    setActive(linkName); 
    setShow(!show)
  }

  const year = new Date().getFullYear();

  const handleTouchOutside = useCallback((event) => {
    if (show && event.target.closest(".sidenav-container") === null) {
      setShow(false);
    }
  }, [show, setShow]);

  useEffect(() => {
    if (show) {
      document.addEventListener("touchstart", handleTouchOutside);
    }

    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [show, handleTouchOutside]);

  return (
    <div className="sidenav-container transition-all duration-700 ">
      <div
        className={
          show
            ? "fixed top-0 left-0 w-5/6 h-full sm:w-[60%] bg-[#F2F3F7] transition-all duration-1000 z-50"
            : "fixed top-0 -left-full w-5/6 h-full bg-[#F2F3F7]  transition-all duration-1000"
        }
      >
        {show ? (
          <main className="flex flex-col justify-center items-centerh-full  ">
               <div className="flex justify-end items-end text-2xl text-gray-500 m-2 sm:p-4">
             <FaTimes onClick={handleClose} className="cursor-pointer" />
           </div>
          <section className=" sm:my-16 sm:p-2">
                <main className="flex flex-col gap-5 lg:mt-10 justify-center items-center">
          <div className="w-[150px] h-[150px] rounded-full">
            <img
              src={profileImg}
              alt="profile-img"
              className="w-full h-full object-cover object-top rounded-full shadow-md shadow-black"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Lakshmi Priyan</h1>
            <h2 className="text-lg font-light text-[#539FF0]">
              Frontend Developer
            </h2>
          </div>
        </main>
        <nav className="flex flex-col gap-4   text-[17px] sm:text-base sm:gap-10 justify-center items-center my-5 sm:my-8">
          <Link
            to="hero"
            className={`${
              active === "home"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={20}
            duration={4000}
            onClick={() => handleClick("home")}
          >
            home
          </Link>
          <Link
            to="about"
            className={`${
              active === "about"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
            onClick={() => handleClick("about")}
          >
            About
          </Link>
          <Link
            to="service"
            className={`${
              active === "service"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
            onClick={() => handleClick("service")}
          >
            service
          </Link>
          <Link
            to="skills"
            className={`${
              active === "skills"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
            onClick={() => handleClick("skills")}
          >
            skills
          </Link>
          <Link
            to="education"
            className={`${
              active === "education"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
            onClick={() => handleClick("education")}
          >
            education
          </Link>
          <Link
            to="experience"
            className={`${
              active === "experience"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
            onClick={() => handleClick("experience")}
          >
            experience
          </Link>
          <Link
            to="project"
            className={`${
              active === "project"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
            onClick={() => handleClick("project")}
          >
            project
          </Link>
          <Link
            to="contact"
            className={`${
              active === "contact"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            spy={true}
            smooth={true}
            offset={140}
            duration={2000}
            onClick={() => handleClick("contact")}
          >
            contact
          </Link>
        </nav>
            <p className="text-center  md:my-3">
              © Copyright <span className="text-[#539FF0]">{year}</span> All rights reserved
            </p>
          </section>
          </main>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidenav;
