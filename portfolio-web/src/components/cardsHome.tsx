import { motion } from "framer-motion";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbUserStar } from "react-icons/tb";
import { PiShootingStar } from "react-icons/pi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
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
    icon: <TbUserStar />,
    heading: "Satisfied Clients",
  },
  {
    number: 150,
    icon: <MdOutlineDesignServices />,
    heading: "Designs Created",
  },
  {
    number: 95,
    icon: <LuCalendarHeart />,
    heading: "Timely Delivery",
  },
  {
    number: 98,
    icon: <PiShootingStar />,
    heading: "Success Rate",
  },
];

export default function CardsHome() {
  let [onScreen, setOnScreen] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center gap-6 my-24">
        {portfolioStats.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            key={index}
            className="group relative flex flex-col items-center justify-center gap-1 w-44 pt-11 pb-6 rounded-xl border-b-4 border-b-red-700 group-hover:border-zinc-300 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-zinc-100"
          >
            <span className="text-red-500 group-hover:text-white shadow-md border-2 border-zinc-200 group-hover:border-red-400 text-3xl absolute bg-white group-hover:bg-red-500 p-[14px] rounded-full top-0 -translate-y-1/2">
              {item.icon}
            </span>
            <ScrollTrigger
              onEnter={() => setOnScreen(true)}
              onExit={() => setOnScreen(false)}
            >
              {onScreen && (
                <CountUp start={0} end={item.number} duration={5}>
                  {({ countUpRef }) => (
                    <h4 className="text-white group-hover:text-zinc-900 text-4xl font-bold flex justify-center items-center gap-1">
                      <span ref={countUpRef} />
                      <span
                        className={
                          index === 0 || index === 1 || index === 2
                            ? "text-3xl"
                            : "text-2xl"
                        }
                      >
                        {index === 0 || index === 1 || index === 2 ? "+" : "%"}
                      </span>
                    </h4>
                  )}
                </CountUp>
              )}
            </ScrollTrigger>
            <p className="text-white text-xs font-medium leading-none">
              {item.heading}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
