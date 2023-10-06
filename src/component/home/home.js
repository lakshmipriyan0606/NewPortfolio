import React, { useEffect , useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { BsFillMoonFill , BsFillSunFill } from "react-icons/bs";
import logo from "../../images/logo.png";


const Home = ({ show, setShow }) => {
  function handleSideNav() {
    setShow(!show);
  }

  const [theme,setTheme] = useState(false)

  useEffect(()=> {
    if(window.matchMedia('(prefers-color-scheme : dark)').matches) {
     setTheme("dark")
    }
    else{
      setTheme("light")
    }
  },[])


  useEffect(()=>{

  if(theme === "dark") {
    document.documentElement.classList.add("dark")
  }
  else {
    document.documentElement.classList.remove("dark")
  }
 },[theme])

  const handleTheme = () => {
  setTheme ( theme === "dark" ?  "light" : "dark")
}

  return (
    <section>
      <div className="flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-white overflow-x-hidden">
        <h1 className="p-3">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] object-fill"
          />
        </h1>
        <h1 className="flex gap-10 items-center ">
          {
            theme  === "light" ?  <BsFillMoonFill onClick={handleTheme}/> :  <BsFillSunFill onClick={handleTheme} />
          }
          <LiaBarsSolid
          className="text-3xl font-extrabold mr-4 shadow-2xl text-black cursor-pointer" 
          onClick={handleSideNav}
        />
        </h1>
   
        
      </div>
    </section>
  );
};

export default Home;
