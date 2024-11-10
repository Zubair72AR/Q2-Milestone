"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggling } from "@/components/ThemeToggling";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
  let pathName = usePathname();
  let isActive = (path: string) => path == pathName;

  const [menuOpen, setMenuOpen] = useState(true);

  let navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="sticky w-full top-0 z-50 flex justify-between items-center px-6 lg:px-12 2xl:px-24 py-6 bg-white dark:bg-zinc-900">
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, duration: 0.6 }}
        className="flex justify-center items-baseline px-2"
      >
        <Link
          href="/"
          className="font-bold text-4xl text-zinc-900 dark:text-white"
        >
          BinJAN{" "}
        </Link>
        <span className="h-2 w-2 rounded-full bg-red-500"></span>
      </motion.div>
      <ul
        className={`${
          menuOpen ? "hidden md:flex" : "flex"
        } flex-col md:flex-row justify-center items-start md:items-center gap-6 absolute md:relative top-20 md:top-0 left-0 py-12 md:py-0 px-12 md:px-0 bg-white dark:bg-zinc-900 md:bg-transparent w-full md:w-auto`}
      >
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={
              isActive(link.href)
                ? "active text-zinc-900 dark:text-white text-sm font-bold"
                : "not_Active text-zinc-900 dark:text-white text-sm font-bold"
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8">
        <Link href="contact">
          <Button
            btnText="Hire Me"
            btnClass="px-4 py-[7px] hidden xs:flex"
            btnIcon={<MdOutlineEmail />}
          />
        </Link>
        <ModeToggling />
        <button
          className="text-2xl text-zinc-900 dark:text-white block md:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <FiMenu /> : <RxCross2 />}
        </button>
      </div>
    </nav>
  );
}
