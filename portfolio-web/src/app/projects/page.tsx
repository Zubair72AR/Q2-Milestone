"use client";
import { motion } from "framer-motion";
import Headings from "@/components/Headings";
import { useState } from "react";

let Project = [
  { name: "All Projects", delay: 0.1 },
  { name: "Branding", delay: 0.2 },
  { name: "Creative", delay: 0.3 },
  { name: "Design", delay: 0.4 },
  { name: "Art", delay: 0.5 },
];

export default function Projects() {
  const [active, setActive] = useState("All Projects");

  const isActive = (item: string) => {
    setActive(item);
  };

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
    </div>
  );
}
