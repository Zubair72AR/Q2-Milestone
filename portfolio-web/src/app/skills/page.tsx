"use client";
import Headings from "@/components/Headings";
import { motion } from "framer-motion";
import Image from "next/image";

let logoSkills = [
  {
    srcLogo: "/HTML_logo.svg",
    altLogo: "HTML Logo",
    textLogo: "HTML",
    delay: 0.1,
    textDelay: 0.5,
  },
  {
    srcLogo: "/CSS_logo.svg",
    altLogo: "CSS Logo",
    textLogo: "CSS",
    delay: 0.2,
    textDelay: 0.6,
  },
  {
    srcLogo: "/React_logo.svg",
    altLogo: "React Logo",
    textLogo: "React",
    delay: 0.3,
    textDelay: 0.7,
  },
  {
    srcLogo: "/NextJS_logo.svg",
    altLogo: "Next.js Logo",
    textLogo: "Next.js",
    delay: 0.4,
    textDelay: 0.8,
  },
  {
    srcLogo: "/TailwindCSS_logo.svg",
    altLogo: "Tailwind CSS Logo",
    textLogo: "Tailwind CSS",
    delay: 0.5,
    textDelay: 0.9,
  },
  {
    srcLogo: "/TypeScript_logo.svg",
    altLogo: "TypeScript Logo",
    textLogo: "TypeScript",
    delay: 0.6,
    textDelay: 1.0,
  },
  {
    srcLogo: "/Figma_logo.svg",
    altLogo: "Figma Logo",
    textLogo: "Figma",
    delay: 0.7,
    textDelay: 1.1,
  },
  {
    srcLogo: "/Photoshop_logo.svg",
    altLogo: "Photoshop Logo",
    textLogo: "Photoshop",
    delay: 0.8,
    textDelay: 1.2,
  },
  {
    srcLogo: "/Illustrator_logo.svg",
    altLogo: "Illustrator Logo",
    textLogo: "Illustrator",
    delay: 0.9,
    textDelay: 1.3,
  },
  {
    srcLogo: "/PremierPro_logo.svg",
    altLogo: "Premier Pro Logo",
    textLogo: "Premier Pro",
    delay: 1.0,
    textDelay: 1.4,
  },
  {
    srcLogo: "/AfterEffect_logo.svg",
    altLogo: "After Effect Logo",
    textLogo: "After Effect",
    delay: 1.1,
    textDelay: 1.5,
  },
  {
    srcLogo: "/Github_logo.svg",
    altLogo: "Github Logo",
    textLogo: "Github",
    delay: 1.2,
    textDelay: 1.6,
  },
  {
    srcLogo: "/MsExcel_logo.svg",
    altLogo: "Ms Excel Logo",
    textLogo: "Ms Excel",
    delay: 1.3,
    textDelay: 1.7,
  },
  {
    srcLogo: "/MsWord_logo.svg",
    altLogo: "Ms Word Logo",
    textLogo: "Ms Word",
    delay: 1.4,
    textDelay: 1.8,
  },
];

export default function Skills() {
  return (
    <div className="px-6 lg:px-12 2xl:px-24 relative py-12">
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
      <Headings headText="Skills." headClass="mb-8" />
      <div className="flex flex-wrap justify-center items-center gap-2">
        {logoSkills.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: logo.delay, duration: 0.5 }}
            className="group relative flex justify-start items-center w-72 pl-5 py-4 gap-3 border-2 border-zinc-300 hover:border-red-400 bg-gradient-to-br from-zinc-200 to-zinc-100 hover:bg-gradient-to-br hover:from-red-500 hover:via-red-600 hover:to-orange-600 shadow-md"
          >
            <div className="h-[70px] w-[70px] rounded-full bg-white flex justify-center items-center">
              <Image
                src={logo.srcLogo}
                alt={logo.altLogo}
                width={40}
                height={40}
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: logo.textDelay, duration: 0.5 }}
              className="text-2xl font-bold text-zinc-900 group-hover:text-white"
            >
              {logo.textLogo}
            </motion.h2>
            <div className="absolute w-[6px] h-16 bg-gradient-to-r from-red-500 via-red-600 to-orange-600 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-zinc-100 rounded-r-md -left-0 -translate-x-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
