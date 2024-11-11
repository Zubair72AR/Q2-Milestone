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
    <div className="px-6 lg:px-12 2xl:px-24 relative py-12">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          {socialLinks.map(({ href, icon, delay }) => (
            <motion.a
              key={href}
              initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay, duration: 0.6 }}
              whileHover={{
                y: -8,
                rotate: -25,
                transition: { duration: 0.3 },
              }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-red-500 rounded-full p-2 text-lg transition-all hover:bg-gradient-to-r from-red-500 via-red-600 to-orange-600"
            >
              {icon}
            </motion.a>
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Let's Talk?
        </motion.h1>
        <Link href="contact">
          <Button btnText="Hire Me" btnClass="px-4 py-[7px] hidden xs:flex" />
        </Link>
      </div>
    </div>
  );
}
