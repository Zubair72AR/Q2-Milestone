"use client";
import Image from "next/image";
import Headings from "@/components/Headings";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { TbExternalLink } from "react-icons/tb";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { RiUserHeartLine } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import CardsHome from "@/components/cardsHome";

const portfolioStats = [
  {
    number: 120,
    icon: <AiOutlineFileDone />,
    heading: "Projects Completed",
  },
  {
    number: 80,
    icon: <RiUserHeartLine />,
    heading: "Satisfied Clients",
  },
  {
    number: 150,
    icon: <IoColorPaletteOutline />,
    heading: "Designs Created",
  },
  {
    number: 95,
    icon: <LuCalendarHeart />,
    heading: "Timely Delivery",
  },
  {
    number: 98,
    icon: <FaArrowUpRightDots />,
    heading: "Success Rate",
  },
];

export default function Home() {
  return (
    <div className="px-6 lg:px-12 2xl:px-24 py-8 md:py-12">
      <div className="block md:flex justify-between lg:justify-end flex-row-reverse gap-0 lg:gap-4 h-auto md:h-[400px] lg:h-[450px]">
        <div className="px-2">
          <div className="relative p-1 overflow-hidden">
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

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="col-span-1 text-zinc-800 dark:text-white font-bold text-2xl mt-12"
          >
            Hello! I'm
          </motion.p>
          <Headings headText="Zubair" headClass="leading-none z-10" />
          <Headings headText="Ahmed." headClass="leading-none mb-4 z-10" />
          <Link href="/my_resume.pdf" target="_blank">
            <Button
              btnText="Resume"
              btnClass="px-[14px] py-[10px] md:px-4 md:py-[11px]"
              btnIcon={<TbExternalLink />}
            />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center ml-4"
        >
          <Image
            src="/hero_02.png"
            alt="Portfolio Image"
            width={500}
            height={300}
            className="w-[90%] sm:w-[480px] md:w-[400px] relative bottom-4 md:-bottom-10 -z-20"
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 -mt-24 md:mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="px-10 py-16 shadow-lg border-2 border-red-400 bg-gradient-to-br from-red-500 via-red-600 to-orange-600"
        >
          <BsBarChartLine className="text-white h-12 w-12 mb-12" />
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-bold text-2xl text-white mb-1"
          >
            Future Vision.
          </motion.p>
          <hr className="w-12 text-white border-white border-[1px] mb-6" />

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="quotesSetting text-sm text-white"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="group px-10 py-16 shadow-lg border-2 border-zinc-100 hover:border-red-400 bg-gradient-to-br from-white to-zinc-50 hover:bg-gradient-to-br hover:from-red-500 hover:via-red-600 hover:to-orange-600 "
        >
          <MdOutlineRocketLaunch className="text-red-500 group-hover:text-white h-12 w-12 mb-12" />
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-bold text-2xl text-zinc-900  group-hover:text-white mb-1"
          >
            Product Design.
          </motion.p>
          <hr className="w-12 border-red-500 border-[1px] group-hover:border-white mb-6" />

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="quotesSetting text-sm text-zinc-900 group-hover:text-white "
          >
            There are many variations of passages of available, but the majority
            alteration in some form.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="group px-10 py-16 shadow-lg border-2 border-zinc-100 hover:border-red-400 bg-gradient-to-br from-white to-zinc-50 hover:bg-gradient-to-br hover:from-red-500 hover:via-red-600 hover:to-orange-600 "
        >
          <AiOutlinePieChart className="text-red-500 group-hover:text-white h-12 w-12 mb-12" />
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-bold text-2xl text-zinc-900  group-hover:text-white mb-1"
          >
            Innovative Solutions.
          </motion.p>
          <hr className="w-12 border-red-500 border-[1px] group-hover:border-white mb-6" />

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="quotesSetting text-sm text-zinc-900 group-hover:text-white"
          >
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour.
          </motion.p>
          <div className="w-1/4 h-16 bg-red-500 absolute translate-y-1/2 right-1 md:right-4 2xl:right-10 -z-10"></div>
        </motion.div>
      </div>
      <CardsHome />
    </div>
  );
}
