import React from "react";
import EducationList from "./EducationList";

const Education = ({education}) => {
  return (
    <div className="my-20" id="education" ref={education}>
      <h2 className="text-xl   uppercase  font-semibold p-5">
        Education 
      </h2>
      <EducationList />
    </div>
  );
};

export default Education;
