import { AiOutlineFileDone } from "react-icons/ai";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { RiUserHeartLine } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const portfolioStats = [
  {
    number: 120,
    icon: <AiOutlineFileDone />,
    heading: "Projects Completed",
  },
  {
    number: 80,
    icon: <RiUserHeartLine />,
    heading: "Satisfied Clients",
  },
  {
    number: 150,
    icon: <IoColorPaletteOutline />,
    heading: "Designs Created",
  },
  {
    number: 95,
    icon: <LuCalendarHeart />,
    heading: "Timely Delivery",
  },
  {
    number: 98,
    icon: <FaArrowUpRightDots />,
    heading: "Success Rate",
  },
];

export default function CardsHome() {
  let [onScreen, setOnScreen] = useState(false);

  return (
    <div className="flex justify-center items-center gap-6 my-24">
      <ScrollTrigger
        onEnter={() => setOnScreen(true)}
        onExit={() => setOnScreen(false)}
      >
        {portfolioStats.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center gap-1 w-44 pt-11 pb-6 rounded-xl border-b-4 border-b-red-700 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 shadow-lg"
          >
            <span className="text-red-500 shadow-md border-2 border-zinc-200 text-3xl absolute bg-white p-[14px] rounded-full top-0 -translate-y-1/2">
              {item.icon}
            </span>

            {onScreen && (
              <CountUp start={0} end={item.number} duration={5}>
                {({ countUpRef }) => (
                  <h4 className="text-white text-4xl font-bold">
                    <span ref={countUpRef} />
                    {index === 0 || index === 1 || index === 2 ? "+" : "%"}
                  </h4>
                )}
              </CountUp>
            )}
            <p className="text-white text-xs font-medium leading-none">
              {item.heading}
            </p>
          </div>
        ))}
      </ScrollTrigger>
    </div>
  );
}
