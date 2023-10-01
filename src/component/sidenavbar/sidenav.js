import React, { useState, useEffect, useCallback } from "react";
import profileImg from "../../images/profile-img.jpg";
import { FaTimes } from "react-icons/fa";

const Sidenav = ({ show, setShow }) => {
  const [active, setActive] = useState("");

  const handleClose = () => {
    setShow(!show);
  };

  const handleActive = (e) => {
    setActive(e.target.textContent);
  };

  const navList = ["Home", "About", "Service", "Skills", "Education", "Experience", "Work", "Blog", "Contact"];

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
    <div className="sidenav-container transition-all duration-700">
      <div
        className={
          show
            ? "fixed top-0 left-0 w-5/6 h-full sm:w-[60%] bg-[#F2F3F7] transition-all duration-1000 z-50"
            : "fixed top-0 -left-full w-5/6 h-full bg-[#F2F3F7]  transition-all duration-1000"
        }
      >
        {show ? (
          <section>
            <div className="flex justify-end items-end text-2xl text-gray-500 m-5">
              <FaTimes onClick={handleClose} className="cursor-pointer" />
            </div>

            <main className="flex flex-col gap-5 justify-center items-center">
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
              {navList.map((nav, index) => (
                <li
                  key={index}
                  onClick={handleActive}
                  className={active === nav ? "text-[#539FF0] list-none text-xl" : "cursor-pointer hover:text-[#539FF0] transition-colors text-lg duration-500 list-none"}
                >
                  {nav}
                </li>
              ))}
            </nav>
            <p className="text-center  p-3">
              © Copyright <span className="text-[#539FF0]">{year}</span> All rights reserved
            </p>
          </section>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidenav;
