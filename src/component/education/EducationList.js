import { BsFillMortarboardFill } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";
import { MdPlace } from "react-icons/md";
import { Accordion } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function DefaultAccordion() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="p-3">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            <div className="text-sm font-bold">Secondary School Leaving Certificate</div>
          </Accordion.Title>
          <Accordion.Content className="" data-aos="zoom-in">
            <div className="flex justify-center text-center gap-5 font-semibold">
              <div className="flex flex-col gap-6 item-center justify-center text-xl text-[#2C98F0]">
                <BsFillMortarboardFill />
                <GiAchievement />
                <BiSolidSchool />
                <MdPlace />
              </div>
              <div className="flex flex-col gap-5 text-gray-600 item-center justify-center">
                <p className="flex gap-3 items-center text-lg">
                  <span className="text-base">2016 - 2017</span>
                </p>
                <p className="text- flex">94%</p>
                <h1 className="text-[14px] font-semibold text-left">
                  Sacred Heart Higher Secondary School
                </h1>
                <p className="text-sm text-left">Dharmapuri</p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <Accordion className="mt-4">
        <Accordion.Panel>
          <Accordion.Title>
            <div className="text-sm font-bold">Higher Secondary Certificate</div>
          </Accordion.Title>
          <Accordion.Content className="" data-aos="zoom-in">
            <div className="flex justify-center text-center gap-5 font-semibold">
              <div className="flex flex-col text-[#2C98F0] gap-6 item-center justify-center text-xl">
                <BsFillMortarboardFill />
                <GiAchievement />
                <BiSolidSchool />
                <MdPlace />
              </div>
              <div className="flex flex-col gap-5 text-gray-600 item-center justify-center">
                <p className="flex gap-3 items-center text-lg">
                  <span className="text-base">2018 - 2019</span>
                </p>
                <p className="text- flex">82%</p>
                <h1 className="text-[14px] font-semibold text-left">
                  Sacred Heart Higher Secondary School
                </h1>
                <p className="text-sm text-left">Dharmapuri</p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <Accordion className="mt-4">
        <Accordion.Panel>
          <Accordion.Title>
            <div className="text-sm font-bold">Bachelor of Engineering</div>
          </Accordion.Title>
          <Accordion.Content data-aos="zoom-in">
            <div className="flex justify-center text-center gap-5 font-semibold">
              <div className="flex flex-col text-[#2C98F0] gap-6 item-center justify-center text-xl">
                <BsFillMortarboardFill />
                <GiAchievement />
                <BiSolidSchool />
                <MdPlace />
              </div>
              <div className="flex flex-col gap-5 text-gray-600 item-center justify-center">
                <p className="flex gap-3 items-center text-lg">
                  <span className="text-base">2019 - 2023</span>
                </p>
                <p className="text- flex">82%</p>
                <h1 className="text-[14px] font-semibold text-left">
                  Government College of Engineering Bargur
                </h1>
                <p className="text-sm text-left">Krishnagiri</p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
