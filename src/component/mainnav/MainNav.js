import React, { useState } from "react";
import profileImg from "../../images/profile-img.jpg";

const MainNav = () => {
  const [active, setActive] = useState("");
  const year = new Date().getFullYear();

  const handleActive = (e, link) => {
    e.preventDefault();
    setActive(link);
  };

  const scrollToSection = (sectionId) => {
    console.log(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navList = [
    {
      id: 1,
      link: "Home",
      sectionId: "about", // Use the same ID as the section in the About component
    },
    // Add more navigation items with section IDs
  ];

  return (
    <div>
      <section className="fixed bg-[#F2F3F7] top-0 left-0 h-full lg:w-[30%] xl:w-[24%]">
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
            <h2 className="text-lg font-light  text-[#539FF0]">Frontend Developer</h2>
          </div>
        </main>
        <nav className="flex flex-col gap-4 justify-center items-center my-5">
          {navList.map((nav, index) => {
            return (
              <button
                key={index}
                onClick={(e) => {
                  handleActive(e, nav.link);
                  scrollToSection(nav.sectionId);
                }}
                className={
                  active === nav.link
                    ? "text-[#539FF0] list-none text-xl"
                    : "cursor-pointer hover:text-[#539FF0] transition-colors text-lg duration-500 list-none"
                }
              >
                {nav.link}
              </button>
            );
          })}
        </nav>
        <p className="text-center  p-3">
          © Copyright <span className="text-[#539FF0]">{year}</span> All rights reserved
        </p>
      </section>
    </div>
  );
};

export default MainNav;
