"use client";
import Image from "next/image";
import Headings from "@/components/Headings";
import { motion } from "framer-motion";
import portfolioImage from "../../public/hero_02.png";
import Button from "@/components/Button";
import { LuExternalLink } from "react-icons/lu";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 lg:px-12 2xl:px-24 py-12">
      <div className="flex justify-end h-[500px] md:flex-row-reverse flex-col">
        <div className="px-2 relative">
          <motion.span
            initial={{ scaleX: 0, x: "-50%" }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="shadow-lg left-0 top-0 w-32 h-1 absolute bg-gradient-to-r from-red-500 via-red-600 to-orange-600"
          ></motion.span>

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="col-span-1 text-zinc-800 dark:text-white font-bold text-2xl mt-12"
          >
            Hello! I'm
          </motion.p>
          <Headings headText="Zubair" headClass="-mb-6 z-10" />
          <Headings headText="Ahmed." headClass="mb-8 z-10" />
          <Link
            href="/my_resume.pdf"
            className="btn btn-primary"
            target="_blank"
          >
            <Button
              btnText="Resume"
              btnClass="flex-row-reverse px-4 py-3"
              btnIcon={<LuExternalLink className="ml-1" />}
            />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <Image
            src="/hero_02.png"
            alt="Portfolio Image"
            width={500}
            height={300}
            className="w-[480px] relative -bottom-12 -z-20"
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="px-10 py-16 shadow-lg border-2 border-red-400 bg-gradient-to-br from-red-500 via-red-600 to-orange-600"
        >
          <BsBarChartLine className="text-white h-12 w-12 mb-12" />
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-bold text-2xl text-white mb-1"
          >
            Future Vision.
          </motion.p>
          <hr className="w-12 text-white border-white border-[1px] mb-6" />

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm text-white"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="group px-10 py-16 shadow-lg border-2 border-zinc-100 hover:border-red-400 bg-gradient-to-br from-white to-zinc-50 hover:bg-gradient-to-br hover:from-red-500 hover:via-red-600 hover:to-orange-600 "
        >
          <MdOutlineRocketLaunch className="text-red-500 group-hover:text-white h-12 w-12 mb-12" />
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-bold text-2xl text-zinc-900  group-hover:text-white mb-1"
          >
            Product Design.
          </motion.p>
          <hr className="w-12 border-red-500 border-[1px] group-hover:border-white mb-6" />

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm text-zinc-900 group-hover:text-white "
          >
            There are many variations of passages of available, but the majority
            alteration in some form.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="group px-10 py-16 shadow-lg border-2 border-zinc-100 hover:border-red-400 bg-gradient-to-br from-white to-zinc-50 hover:bg-gradient-to-br hover:from-red-500 hover:via-red-600 hover:to-orange-600 "
        >
          <AiOutlinePieChart className="text-red-500 group-hover:text-white h-12 w-12 mb-12" />
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-bold text-2xl text-zinc-900  group-hover:text-white mb-1"
          >
            Innovative Solutions.
          </motion.p>
          <hr className="w-12 border-red-500 border-[1px] group-hover:border-white mb-6" />

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm text-zinc-900 group-hover:text-white"
          >
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour.
          </motion.p>
          <div className="w-80 h-16 bg-red-500 absolute translate-y-1/2 right-1 md:right-6 2xl:right-10 -z-10"></div>
        </motion.div>
      </div>
    </div>
  );
}
