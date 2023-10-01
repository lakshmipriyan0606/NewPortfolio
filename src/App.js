import { useState } from "react";
import Home from "./component/home/home";
import Sidenav from "./component/sidenavbar/sidenav";
import About from "./component/about/About";
import Service from "./component/Service/Service";
import Skills from "./component/skills/Skills";
import Education from "./component/education/Education";
import Experience from "./component/workexperience/Experience";
import Project from "./component/project/project";
import Contact from "./component/contact/Contact";
import MainNav from "./component/mainnav/MainNav";
import Hero from "./component/hero/Hero";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <Home show={show} setShow={setShow} />
        <Sidenav show={show} setShow={setShow} />
        <Hero/>
        <About />
        <Service />
        <Skills />
        <Education />
        <Experience />
        <Project />
        <Contact />
      </div>
      <div className="hidden lg:flex w-full justify-center    ">
        <div className="">
          <MainNav />
        </div>
        <div className="w-[60%] xl:w-[65%] absolute left-[30%] lg:left-[35%] xl:left-[30%] lg:-top-12 top-0">
          <Hero/>
          <About />
          <Service />
          <Skills />
          <Education />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
