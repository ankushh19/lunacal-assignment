import { useState } from "react";
import CardWrapper from "./CardWrapper";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Recommended from "./Recommended";

function Info() {
  const [activeBtn, setActiveBtn] = useState("about");
  const listData = [
    {
      title: "About Me",
      id: "about",
      p1: "Hello! I'm Ankush, front-end web developer with a passion of becoming a full stack developer. I have always been a tech enthusiast and I have an experience of three months as Frontend Developer intern.",
      p2: "  I have done my graduation from Delhi University in 2023 and along with my graduation I started learning web development and I have built multiple projects.",
    },
    {
      title: "Experiences",
      id: "experiences",
    },
    {
      title: "Recommended",
      id: "recommended",
    },
  ];

  return (
    <CardWrapper className="w-1/3">
      <div>
        <ul className="flex bg-[#171717] p-3 rounded-full  justify-between items-center">
          {listData.map(({ id, title }) => (
            <li
              className={`text-gray-300 select-none text-xs lg:text-md xl:text-lg rounded-full text-nowrap 2xl:px-8 xl:px-4 px-3 py-2 tracking-wide xl:tracking-wider 2xl:tracking-widest cursor-pointer hover:bg-[#2f323c] transition-all ${
                activeBtn === id
                  ? "bg-[#2f323c] shadow-[0px_20px_100px_15px_black]"
                  : "bg-[#1d1d1d]"
              }`}
              onClick={() => setActiveBtn(id)}
              key={id}
            >
              {title}
            </li>
          ))}
        </ul>
        {activeBtn === "about" ? (
          <AboutMe />
        ) : activeBtn === "experiences" ? (
          <Experiences />
        ) : (
          <Recommended />
        )}
      </div>
    </CardWrapper>
  );
}

export default Info;
