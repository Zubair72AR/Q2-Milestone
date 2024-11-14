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

const servicesData = [
  {
    icon: <TbWorld />,
    heading: "Development",
    para: "We create dynamic and responsive websites using modern technologies to provide seamless user experiences across all devices.",
    delay: 0.1,
  },
  {
    icon: <RiArtboard2Line />,
    heading: "Design",
    para: "Our design services focus on creating visually appealing and functional interfaces that align with your brand's identity and goals.",
    delay: 0.2,
  },
  {
    icon: <BsSignpost2 />,
    heading: "Advertising",
    para: "We help businesses grow through targeted advertising strategies that increase brand awareness and drive customer engagement.",
    delay: 0.3,
  },
  {
    icon: <HiOutlineRocketLaunch />,
    heading: "SEO",
    para: "Our SEO services optimize your website to rank higher in search engines, driving more organic traffic and increasing conversions.",
    delay: 0.4,
  },
  {
    icon: <TfiPencilAlt />,
    heading: "Copy Writing",
    para: "We craft compelling and clear content that communicates your message effectively, helping you connect with your audience.",
    delay: 0.5,
  },
  {
    icon: <IoChatbubblesOutline />,
    heading: "Support",
    para: "We offer ongoing support to ensure your website runs smoothly, providing timely solutions for any technical issues that arise.",
    delay: 0.6,
  },
];

export default function ServicesHome() {
  return (
    <div>
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
      <Headings headText="Services." headClass="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            className="group px-10 py-16 shadow-lg border-2 border-zinc-100 hover:border-red-400 bg-gradient-to-br from-white to-zinc-50 hover:bg-gradient-to-br hover:from-red-500 hover:via-red-600 hover:to-orange-600"
          >
            <span className="text-red-500 group-hover:text-white text-4xl block mb-4">
              {item.icon}
            </span>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-bold text-xl text-zinc-900  group-hover:text-white mb-2"
            >
              {item.heading}
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
