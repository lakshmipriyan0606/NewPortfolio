import React from "react";
import skillist from "./skillList";

const Skills = ({skills}) => {



  return (
    <section>
      <div id="skills" ref={skills}>
        <h1 className="text-sm font-light text-gray-500 uppercase pl-5 p-3">
          My Specialty
        </h1>
        <h2 className="text-xl py-1  uppercase mb-2 p-5">
         My skills
        </h2>
      </div>
      <div>
        <p className="p-3 text-gray-600 font-light" data-aos="fade-up" data-aos-duration="1000">
        Front-end technology and responsive design skills are crucial assets for any website developer. Proficiency in front-end technologies like HTML, CSS, and JavaScript enables the creation of visually appealing and interactive web pages. Moreover, the ability to implement responsive design ensures that websites adapt seamlessly to various screen sizes and devices, providing an optimal user experience. These skills encompass a deep understanding of user interface principles, efficient code organization, and the use of frameworks and libraries such as Bootstrap ,TailwindCSS or React. Mastering front-end and responsive design is essential for crafting modern, user-friendly websites that cater to a diverse audience and effectively convey the intended message.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-5 my-3">
        {
            skillist.map(skill=>{
                return <img key={skill.id} className="w-10 h-10 shadow-2xl shadow-black" src={skill.skill} alt="skill-img" data-aos="flip-right"/>
            })
        }
      </div>
    </section>
  );
};

export default Skills;
