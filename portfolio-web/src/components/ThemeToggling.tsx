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
    <div>
      <button
        onClick={themeSelection}
        className={
          theme === "dark"
            ? "p-2 bg-black shadow-md rounded-md"
            : "p-2 bg-white shadow-md rounded-md"
        }
      >
        {theme === "dark" ? (
          <Moon className="text-white" />
        ) : (
          <Sun className="text-black" />
        )}
      </button>
    </div>
  );
}
