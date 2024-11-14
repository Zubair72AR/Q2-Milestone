import { motion } from "framer-motion";
import Headings from "@/components/Headings";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbUserStar } from "react-icons/tb";
import { PiShootingStar } from "react-icons/pi";
import { LuCalendarHeart } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import CountUp from "react-countup";
import { useState } from "react";
import { RiArtboard2Line } from "react-icons/ri";
import { BsSignpost2 } from "react-icons/bs";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TfiPencilAlt } from "react-icons/tfi";
import { IoChatbubblesOutline } from "react-icons/io5";

const ExperienceData = [
  {
    year: "Tech Solutions ( 2014 — 2017 )",
    jobTitle: "Sr. Front-end Engineer",
    para: "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Efficit laborum nulla pariatur, sit amet ipsum at consectetur. Aenean ut purus sapien, sed tristique odio.",
    delay: 0.1,
  },
  {
    year: "Creative Studios ( 2015 — 2018 )",
    jobTitle: "Graphic Designer",
    para: "Nulla facilisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit, velit consequat et pharetra adipiscing. Donec ac dui suscipit.",
    delay: 0.2,
  },
  {
    year: "Global Accounting Services ( 2016 — 2019 )",
    jobTitle: "Office Account Assistant",
    para: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis autem vel eum iure reprehenderit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit.",
    delay: 0.3,
  },
  {
    year: "Innovative Solutions ( 2017 — 2020 )",
    jobTitle: "Product Manager",
    para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Et harum quidem rerum facilis est et expedita. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    delay: 0.4,
  },
];

export default function ExperienceAbout() {
  return (
    <div className="mt-12">
      <div className="px-6 lg:px-12 2xl:px-24 py-4 relative overflow-hidden">
        <motion.span
          initial={{ scaleX: 0, x: "-50%" }}
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="shadow-lg left-0 top-0 w-32 h-1 absolute bg-gradient-to-r from-red-500 via-red-600 to-orange-600"
        ></motion.span>
      </div>
      <Headings headText="Experience." headClass="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ExperienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            className="relative group px-10 py-10 shadow-lg border-2 border-zinc-100 hover:border-red-400 bg-gradient-to-br from-white to-zinc-50 hover:bg-gradient-to-br hover:from-red-500 hover:via-red-600 hover:to-orange-600 flex flex-col gap-4"
          >
            <div className="absolute w-1 h-16 bg-gradient-to-r from-red-500 via-red-600 to-orange-600 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-zinc-100 -left-1 top-1/2 -translate-y-1/2"></div>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-red-500 group-hover:text-white font-medium"
            >
              {item.year}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-bold text-[26px] text-zinc-900  group-hover:text-white"
            >
              {item.jobTitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="quotesSetting text-sm text-zinc-500 group-hover:text-white"
            >
              {item.para}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
