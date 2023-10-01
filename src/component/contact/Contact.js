import React from "react";
import {FaLocationDot} from "react-icons/fa6"
import {BsEnvelopeFill} from "react-icons/bs"
import {BiPhoneCall} from "react-icons/bi"



const Contact = ({contact}) => {
  return (
    <div id="contact" ref={contact}>
      <h1 className="text-sm font-light text-gray-500 uppercase pl-5 p-3 mt-10">
        Get in touch
      </h1>
      <h2 className="text-xl py-1   uppercase mb-4 p-5">Contact</h2>
      <div className="grid grid-cols-1 p-4 sm:grid-cols-2  " >
         <div className="flex flex-col sm:mt-14 md:gap-5  items-center" data-aos="zoom-out" data-aos-duration="1000">
         <div className="flex  gap-4 items-center p-2 ">
            <BsEnvelopeFill className="text-[#2C98F0] text-opacity-60 bg-[#F2F3F7] p-2 w-10 h-10  rounded"/>
            <h1 className="text-[#2C98F0] text-sm ">lakshmipriyan0606@gmail.com</h1>
         </div>
         <div className="flex  gap-4  items-center p-2 ">
            <FaLocationDot className="text-[#2C98F0] text-opacity-60 bg-[#F2F3F7] p-2 w-10 h-10  rounded"/>
            <h1 className="text-[#2C98F0] text-sm  w-[200px]"> Dharmapuri (Dt)  TamilNadu </h1>
         </div>
         <div className="flex   gap-4 items-center p-2 ">
            <BiPhoneCall className="text-[#2C98F0] text-opacity-60 bg-[#F2F3F7] p-2 w-10 h-10  rounded"/>
            <h1 className="text-[#2C98F0] text-sm  w-[200px]"> +91 7708561615 </h1>
         </div>
         </div>
         <div className="grid grid-cols-1 gap-4 p-3 my-4 " data-aos="zoom-in" data-aos-duration="1000">
            <input type="text" placeholder="Name" className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md "/>
            <input type="text" placeholder="Email" className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md "/>
            <input type="text" placeholder="Subject" className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md "/>
            <textarea  className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md  resize-y" placeholder="Message" />
          <button className="text-white bg-[#2C98F0] w-[50%] p-2 text-opacity-70 hover:text-opacity-100  cursor-pointer transition-all duration-500 rounded-md mx-auto  ">Send Message</button>
         </div>
      </div>
    </div>
  );
};

export default Contact;
