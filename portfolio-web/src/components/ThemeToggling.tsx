"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggling() {
  const { theme, setTheme } = useTheme();

  function themeSelection() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      onClick={themeSelection}
    >
      {theme === "light" ? (
        <Moon className="text-2xl text-zinc-900 dark:text-white" />
      ) : (
        <Sun className="text-2xl text-zinc-900 dark:text-white" />
      )}
    </motion.button>
  );
}
