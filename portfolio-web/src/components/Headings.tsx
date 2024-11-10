"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface HeadingsProps {
  headText?: string;
  headClass?: string;
}

export default function Headings({ headText, headClass }: HeadingsProps) {
  const { theme } = useTheme();

  return (
    <div className={`${headClass ? headClass : ""} relative`}>
      <motion.h1
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, duration: 0.7 }}
        className="inline-block text-[13vw] md:text-[10vw] leading-none font-bold md:font-extrabold text-zinc-100 dark:text-[#121214] text-stroke absolute top-1 md:top-2 left-1 md:left-2 -z-10"
        style={{
          WebkitTextStroke:
            theme === "dark" ? "0.1rem #27272a" : "0.1rem #a1a1aa",
        }}
      >
        {headText}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="inline-block text-[13vw] md:text-[10vw] leading-none font-bold md:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-600"
        style={{
          WebkitTextStroke:
            theme === "dark" ? "0.1rem #ea580c" : "0.1rem #dc2626",
        }}
      >
        {headText}
      </motion.h1>
      
    </div>
  );
}
