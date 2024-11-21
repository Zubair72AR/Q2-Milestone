"use client";
import { motion } from "framer-motion";
import Headings from "@/components/Headings";
import { useState } from "react";
import Image from "next/image";

let Project = [
  { name: "All Projects", delay: 0.1 },
  { name: "Branding", delay: 0.2 },
  { name: "Creative", delay: 0.3 },
  { name: "Design", delay: 0.4 },
  { name: "Art", delay: 0.5 },
];

const projectData = [
  {
    title: "Branding Project",
    category: "Branding",
    src: "/Slack.gif",
  },
  {
    title: "Branding Project",
    category: "Branding",
    src: "/Moku.gif",
  },
  {
    title: "Branding Project",
    category: "Branding",
    src: "/LiveInsight.gif",
  },
  { title: "Creative Project", category: "Creative", src: "/Samsung.gif" },
  { title: "Creative Project", category: "Creative", src: "/Incode.gif" },
  { title: "Design Project", category: "Design", src: "/Gilbert.gif" },
  { title: "Design Project", category: "Design", src: "/Captain.gif" },
  { title: "Design Project", category: "Design", src: "/HashDash.gif" },
  { title: "Design Project", category: "Design", src: "/Forms.gif" },
  { title: "Art Project", category: "Art", src: "/Yedoo.gif" },
  { title: "Art Project", category: "Art", src: "/Multicolor.gif" },
  { title: "Art Project", category: "Art", src: "/Thankyou.gif" },
];
export default function Projects() {
  const [active, setActive] = useState("All Projects");

  const isActive = (item: string) => {
    setActive(item);
  };

  const filterProjects =
    active === "All Projects"
      ? projectData
      : projectData.filter((e) => e.category === active);

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
      <Headings headText="Projects." headClass="mb-8" />

      <div className="flex justify-start items-center gap-4">
        {Project.map((itemName, index) => (
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: itemName.delay, duration: 0.5 }}
            key={index}
            onClick={() => isActive(itemName.name)}
            className={`cursor-pointer w-fit py-2 px-5 rounded-full font-medium ${
              active === itemName.name
                ? "bg-gradient-to-r from-red-500 via-red-600 to-orange-600 text-white"
                : "bg-zinc-200 dark:bg-zinc-950"
            }`}
          >
            {itemName.name}
          </motion.p>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filterProjects.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            className="relative overflow-hidden shadow-md rounded-2xl"
          >
            <Image
              src={e.src}
              alt="Project Image"
              width={30}
              height={20}
              className="w-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute bottom-7 left-6 font-bold text-zinc-400"
            >
              {e.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="absolute bottom-3 left-6 text-zinc-400 text-sm"
            >
              {e.category}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
