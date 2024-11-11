"use client";
import Image from "next/image";
import Headings from "@/components/Headings";
import { motion } from "framer-motion";
import portfolioImage from "../../public/hero_02.png";
import Button from "@/components/Button";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";

export default function Home() {
  return (
    <div className="px-6 lg:px-12 2xl:px-24 py-12">
      <div className="flex h-[600px]">
        <div className="px-2 relative overflow-hidden">
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
            className="col-span-1 text-zinc-800 dark:text-white font-bold text-3xl mt-12"
          >
            Hello! I'm
          </motion.p>
          <Headings headText="Zubair" headClass="-mb-6" />
          <Headings headText="Ahmed." headClass="mb-8" />
          <a
            href="/my_resume.pdf"
            download="My_Resume.pdf"
            className="btn btn-primary"
          >
            <Button
              btnText="Download CV"
              btnClass=""
              btnIcon={<IoCloudDownloadOutline />}
            />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="flex justify-center items-center"
        >
          <Image
            src={portfolioImage}
            alt="Portfolio Image"
            width={500}
            height={300}
            className="w-[500px]"
          />
        </motion.div>
      </div>
      <div className="flex justify-between items-center">
        <div className="px-10 py-16 w-96 bg-gradient-to-br from-red-500 via-red-600 to-orange-600">
          <BsBarChartLine className="text-white h-10 w-12 mb-12" />
          <p className="font-bold text-3xl text-white mb-1">Future Vision.</p>
          <hr className="w-12 text-white border-[1px] mb-6" />

          <p className="text-sm text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
        <div className="px-10 py-16 w-96 text-zinc-900 hover:text-white bg-white hover:bg-gradient-to-br from-red-500 via-red-600 to-orange-600">
          <BsBarChartLine className="text-red-500 h-10 w-12 mb-12" />
          <p className="font-bold text-3xl mb-1">Future Vision.</p>
          <hr className="w-12 border-[1px] mb-6" />

          <p className="text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
      </div>
    </div>
  );
}
