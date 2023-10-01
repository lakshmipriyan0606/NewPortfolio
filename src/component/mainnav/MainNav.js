import React, {  useState } from "react";
import { Link } from "react-scroll";
import profileImg from "../../images/profile-img.jpg";

const MainNav = ({about,hero,service,skills,education,experience,project,contact}) => {
  const [active, setActive] = useState(null); 

  function handleClick(linkName,elmRef) {
    setActive(linkName); 
    window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior : "smooth"
    })
  }


  const year = new Date().getFullYear();

  return (
    <div>
      <section className="fixed bg-[#F2F3F7] top-0 left-0 h-full lg:w-[30%] xl:w-[24%]">
        <main className="flex flex-col gap-5 lg:mt-10 xl:mt-4 justify-center items-center">
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
        <nav className="flex flex-col gap-10 justify-center items-center my-3 xl:my-7">
        <button
            className={`${
              active === "hero"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("hero",hero)}
          >
            home
          </button>
          <button
            className={`${
              active === "about"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("about",about)}
          >
            About
          </button>
          <button
            className={`${
              active === "service"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("service",service)}
          >
            service
          </button>
          <button
            className={`${
              active === "skills"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("skills",skills)}
          >
            skills
          </button>
          <button
            className={`${
              active === "education"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("education",education)}
          >
           education
          </button>
          <button
            className={`${
              active === "experience"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("experience",experience)}
          >
           experience
          </button>
          <button
            className={`${
              active === "project"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("project",project)}
          >
            project
          </button>
          <button
            className={`${
              active === "contact"
                ? "text-[#539FF0] list-none uppercase"
                : "cursor-pointer hover:border-b-2 hover:border-[#539FF0] uppercase transition-colors  duration-500 list-none"
            }`}
            onClick={() => handleClick("contact",contact)}
          >
            contact
          </button>
        </nav>
        <p className="text-center p-3">
          © Copyright <span className="text-[#539FF0]">{year}</span> All rights reserved
        </p>
      </section>
    </div>
  );
};

export default MainNav;
