import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import emailjs from "emailjs-com";

const Contact = ({ contact }) => {
  const [form, setForm] = useState({
    values: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleChange = (e) => {
    let value = e.target.value;
    setForm((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [e.target.name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.values.name ||
      !form.values.email ||
      !form.values.subject ||
      !form.values.message
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const templateParams = {
        to_email: "lakshmipriyan0606@gmail.com",
        from_name: form.values.name,
        from_email: form.values.email,
        subject: form.values.subject,
        message: form.values.message,
      };

      // Using emailjs to send email
      await emailjs.send(
        "service_q9mqyxp",
        "template_sb2nlnx",
        templateParams,
        "UzJvmwoRUqMLPZ_s3"
      );

      alert("Thanks For your Response");

      setForm({
        values: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div id="contact" ref={contact}>
      <div className="grid grid-cols-1 p-4 sm:grid-cols-2  ">
        <div
          className="flex flex-col sm:mt-14 md:gap-5  items-center"
          data-aos="fade-down"        >
          <div className="flex  gap-4 items-center p-2 ">
            <BsEnvelopeFill className="text-[#2C98F0] text-opacity-60 bg-[#F2F3F7] p-2 w-10 h-10  rounded" />
            <h1 className="text-[#2C98F0] text-sm ">
              lakshmipriyan0606@gmail.com
            </h1>
          </div>
          <div className="flex  gap-4  items-center p-2 ">
            <FaLocationDot className="text-[#2C98F0] text-opacity-60 bg-[#F2F3F7] p-2 w-10 h-10  rounded" />
            <h1 className="text-[#2C98F0] text-sm  w-[200px]">
              {" "}
              Dharmapuri (Dt) TamilNadu{" "}
            </h1>
          </div>
          <div className="flex   gap-4 items-center p-2 ">
            <BiPhoneCall className="text-[#2C98F0] text-opacity-60 bg-[#F2F3F7] p-2 w-10 h-10  rounded" />
            <h1 className="text-[#2C98F0] text-sm  w-[200px]">
              {" "}
              +91 7708561615{" "}
            </h1>
          </div>
        </div>
        <form className="flex gap-5 flex-col my-9" onSubmit={handleSubmit}  data-aos="fade-up"
          data-aos-duration="1000">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md "
            onChange={handleChange}
            value={form.values.name}
            name="name"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md "
            value={form.values.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md "
            value={form.values.subject}
            onChange={handleChange}
            name="subject"
          />
          <textarea
            className="bg-[#F2F3F7] border-none outline-none placeholder:p-2 text-lg focus:border-none w-full rounded-md resize-y"
            placeholder="Message"
            value={form.values.message}
            onChange={handleChange}
            name="message"
          />
          <button
            type="submit"
            className="text-white bg-[#2C98F0] w-[50%] p-2 text-opacity-70 hover:text-opacity-100  cursor-pointer transition-all duration-500 rounded-md mx-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
