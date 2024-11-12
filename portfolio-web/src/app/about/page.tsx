"use client";
import Button from "@/components/Button";
import Headings from "@/components/Headings";
import { FiSend } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { motion } from "framer-motion";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import Image from "next/image";
const personalInfo = [
  { label: "Name :", value: "Zubair Ahmed", delay: 0.1, delayText: 0.2 },
  { label: "Father Name :", value: "Jan Muhammad", delay: 0.3, delayText: 0.4 },
  { label: "Job :", value: "Web Developer", delay: 0.5, delayText: 0.6 },
  { label: "Nationality :", value: "Pakistan", delay: 0.7, delayText: 0.8 },
  { label: "Birthday :", value: "25 December", delay: 0.9, delayText: 1.0 },
  { label: "Phone :", value: "+92 0342 3873626", delay: 1.1, delayText: 1.2 },
  {
    label: "Email :",
    value: "hzubair717@gmail.com",
    delay: 1.3,
    delayText: 1.4,
  },
  {
    label: "Location :",
    value: "Karachi, Sindh - Pakistan",
    delay: 1.5,
    delayText: 1.6,
  },
];

let aboutMeSummary = [
  {
    title: "Web Development",
    content:
      "I specialize in creating responsive, fast, and visually appealing websites using modern web technologies such as TypeScript, HTML, CSS, Tailwind CSS, Next.js, and React. My focus is on delivering seamless user experiences that look great on all devices and are easy to navigate.",
  },
  {
    title: "Graphic Design",
    content:
      "With a strong foundation in graphic design, I craft custom visuals, logos, and branding concepts that communicate your message clearly and effectively. My design approach blends creativity with strategic thinking to create visuals that resonate with audiences and enhance brand identity.",
  },
  {
    title: "Video Editing & Animation",
    content:
      "I bring stories to life through dynamic video editing and animation. Using Adobe Premiere Pro and After Effects, I edit, color grade, and animate content for a variety of media. Whether it's promotional videos, social media clips, or animated graphics, I ensure each video engages and captivates its audience.",
  },
  {
    title: "3D Modeling",
    content:
      "I create detailed and realistic 3D models using tools like Blender, Maya, and ZBrush. From product visualizations to game assets and architectural models, I blend creativity with technical skills to deliver 3D assets that are visually striking and functional for various projects.",
  },
];

export default function Contact() {
  return (
    <div className="px-6 lg:px-12 2xl:px-24 relative py-12">
      <div className="px-6 lg:px-12 2xl:px-24 py-4 relative overflow-hidden">
        <motion.span
          initial={{ scaleX: 0, x: "-50%" }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="shadow-lg left-0 top-0 w-32 h-1 absolute bg-gradient-to-r from-red-500 via-red-600 to-orange-600"
        ></motion.span>
      </div>
      <Headings headText="Biography." headClass="" />
      <div className="flex justify-between items-center my-12">
        <div className="p-[1px] rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-600 mr-6 shadow-lg">
          <Image
            src="/portfolio.jpg"
            alt="Portfolio Image"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="quotesSetting text-zinc-700 dark:text-zinc-300 text-sm font-medium mb-6"
          >
            Hi, I'm Zubair Ahmed – a passionate Web Developer, Graphic Designer,
            and Creative Professional with a strong foundation in both design
            and development. I specialize in crafting digital experiences that
            are not only visually stunning but also functional, responsive, and
            user-centric. Here's a bit more about me:
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {personalInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <motion.p
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay, duration: 0.6 }}
                  className="text-red-500 text-sm"
                >
                  {item.label}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delayText, duration: 0.6 }}
                  className="text-zinc-900 dark:text-zinc-300 text-sm font-medium"
                >
                  {item.value}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {aboutMeSummary.map((item, index) => (
        <div key={index} className="mb-10">
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="text-zinc-900 dark:text-red-500 font-bold text-lg mb-[2px]"
          >
            {item.title}
          </motion.h1>
          <hr className="w-12 border-red-500 border-[1px] dark:border-white mb-4" />
          <motion.p
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="quotesSetting text-zinc-700 dark:text-zinc-300 text-sm"
          >
            {item.content}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
