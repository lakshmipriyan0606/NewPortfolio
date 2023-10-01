import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import logo from "../../images/logo.png";

const Home = ({ show, setShow }) => {
  function handleSideNav() {
    setShow(!show);
  }

  return (
    <section>
      <div className="flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-white">
        <h1 className="p-3">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] object-fill"
          />
        </h1>
        <LiaBarsSolid
          className="text-3xl font-extrabold mr-4 shadow-2xl text-black cursor-pointer" 
          onClick={handleSideNav}
        />
      </div>
    </section>
  );
};

export default Home;
