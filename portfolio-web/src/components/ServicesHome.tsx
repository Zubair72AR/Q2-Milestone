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

const portfolioStats = [
  {
    icon: <TbWorld />,
    heading: "Development",
    para: "Lorem ipsum dolor sit amet consectetuer elit.",
  },
  {
    icon: <TbWorld />,
    heading: "Design",
    para: "Lorem ipsum dolor sit amet consectetuer elit.",
  },
  {
    icon: <TbWorld />,
    heading: "Advertising",
    para: "Lorem ipsum dolor sit amet consectetuer elit.",
  },
  {
    icon: <TbWorld />,
    heading: "SEO",
    para: "Lorem ipsum dolor sit amet consectetuer elit.",
  },
  {
    icon: <TbWorld />,
    heading: "Copy Write",
    para: "Lorem ipsum dolor sit amet consectetuer elit.",
  },
  {
    icon: <TbWorld />,
    heading: "Support",
    para: "Lorem ipsum dolor sit amet consectetuer elit.",
  },
];

export default function ServicesHome() {
  return (
    <div className="flex justify-center items-center gap-6 my-24">
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
      <Headings headText="Services." headClass="mb-8" />
    </div>
  );
}
