"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
    <button onClick={themeSelection}>
      {theme === "light" ? (
        <Moon className="text-2xl text-zinc-900 dark:text-white" />
      ) : (
        <Sun className="text-2xl text-zinc-900 dark:text-white" />
      )}
    </button>
  );
}
