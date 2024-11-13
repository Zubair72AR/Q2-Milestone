"use client";
import Button from "@/components/Button";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { IoMdHeart } from "react-icons/io";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.facebook.com/zubairar.zubairar.75",
    icon: <FaFacebookF />,
    delay: 0,
  },
  {
    href: "https://www.youtube.com/@BenzersShorts",
    icon: <FaYoutube />,
    delay: 0.2,
  },
  { href: "https://github.com/Zubair72AR", icon: <FaGithub />, delay: 0.4 },
  {
    href: "https://vercel.com/zubair-ahmeds-projects-194d5c1d",
    icon: <SiVercel />,
    delay: 0.6,
  },
  {
    href: "https://www.linkedin.com/in/zubair-ahmed-06aa13194/",
    icon: <FaLinkedinIn />,
    delay: 0.8,
  },
  { href: "https://www.behance.net/zubairar72", icon: <FaBehance />, delay: 1 },
  {
    href: "https://www.pinterest.com/ikramjan717/",
    icon: <FaPinterest />,
    delay: 1.2,
  },
  { href: "https://wa.link/22fg89", icon: <FaWhatsapp />, delay: 1.4 },
];

export default function Footer() {
  return (
    <div className="relative mt-20">
      <motion.span
        initial={{ scaleY: 0, y: "-50%" }}
        whileInView={{ scaleY: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="shadow-lg top-0 left-1/2 -translate-x-1/2 w-1 h-16  absolute bg-gradient-to-r from-red-500 via-red-600 to-orange-600"
      ></motion.span>
      <div className="px-6 lg:px-12 2xl:px-24 py-16 bg-[#212124]">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 items-center mb-6">
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold text-white"
          >
            Let's Talk?
          </motion.h1>
          <Link href="contact">
            <Button btnText="Make an Enquiry" btnClass="" />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3 flex-wrap">
          {socialLinks.map(({ href, icon, delay }) => (
            <motion.a
              key={href}
              initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay, duration: 0.6 }}
              whileHover={{
                y: -8,
                rotate: -30,
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-red-500 rounded-full p-3 text-lg transition-all text-white hover:bg-gradient-to-r from-red-500 via-red-600 to-orange-600"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
      <div className="bg-zinc-900 flex flex-wrap gap-4 xs:gap-0 justify-evenly items-center py-8">
        <div className="inline-block transition-all text-center hover:text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-600 to-orange-600">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-2xl text-white"
          >
            Karachi.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-medium tracking-wide text-white"
          >
            +92 342 387 3626
          </motion.p>
        </div>
        <div className="inline-block transition-all text-center hover:text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-600 to-orange-600">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-2xl text-white"
          >
            Dubai.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-medium tracking-wide text-white"
          >
            +971 52 380 9288
          </motion.p>
        </div>
      </div>
      <div className="bg-zinc-950 px-6 lg:px-12 2xl:px-24 py-8 flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-6">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 0.6 }}
          className="font-light text-sm flex justify-center items-center text-zinc-500"
        >
          Made with {"  "}
          <IoMdHeart className="text-red-500 text-lg" /> 2024 &copy; All rights
          reserved by BinJAN
        </motion.p>
        <div className="flex justify-center items-center gap-4">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="font-light text-sm flex justify-center items-center text-white hover:text-red-500"
          >
            Terms of use
          </motion.a>
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-light text-sm flex justify-center items-center text-white hover:text-red-500"
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-light text-sm flex justify-center items-center text-white hover:text-red-500"
          >
            Cookie Policy
          </motion.a>
        </div>
      </div>
    </div>
  );
}
