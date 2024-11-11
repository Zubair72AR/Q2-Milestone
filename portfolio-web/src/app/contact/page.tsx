"use client";
import Button from "@/components/Button";
import Headings from "@/components/Headings";
import { FiSend } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="px-6 lg:px-12 2xl:px-24 relative py-12">
      <Headings headText="Contact." headClass="mb-8" />
      <div className="flex justify-between gap-0 md:gap-16 flex-col md:flex-row">
        <div className="grid gap-5 md:gap-0 mb-12">
          <div className="grid grid-col-2 w-fit h-fit">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <LuPhoneCall className="col-span-1 text-red-500 text-2xl mr-4" />
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="col-span-1 text-zinc-800 dark:text-white font-bold text-lg"
            >
              Phone
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-start-2 text-zinc-600 dark:text-zinc-400 text-sm"
            >
              +92 0342 3873626
            </motion.p>
          </div>
          <div className="grid grid-col-2 w-fit h-fit">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <MdOutlineEmail className="col-span-1 text-red-500 text-2xl mr-4" />
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="col-span-1 text-zinc-800 dark:text-white font-bold text-lg"
            >
              Email address
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-start-2 text-zinc-600 dark:text-zinc-400 text-sm"
            >
              hzubair717@gmail.com
            </motion.p>
          </div>
          <div className="grid grid-col-2 w-fit h-fit">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <GrLocation className="col-span-1 text-red-500 text-2xl mr-4" />
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="col-span-1 text-zinc-800 dark:text-white font-bold text-lg"
            >
              Location
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-start-2 text-zinc-600 dark:text-zinc-400 text-sm"
            >
              Karachi, Sindh - Pakistan
            </motion.p>
          </div>
        </div>

        <form>
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            className="w-full outline-none border-[1px] border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-2 my-2 focus:border-red-400 dark:focus:border-red-500 text-zinc-600 dark:text-zinc-300 text-sm rounded-md"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <motion.input
            type="email"
            placeholder="Email Address"
            required
            className="w-full outline-none border-[1px] border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-2 my-2 focus:border-red-400 dark:focus:border-red-500 text-zinc-600 dark:text-zinc-300 text-sm rounded-md"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <motion.input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full outline-none border-[1px] border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-2 my-2 focus:border-red-400 dark:focus:border-red-500 text-zinc-600 dark:text-zinc-300 text-sm rounded-md"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <motion.textarea
            placeholder="Message"
            required
            className="w-full outline-none border-[1px] border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-2 my-2 focus:border-red-400 dark:focus:border-red-500 text-zinc-600 dark:text-zinc-300 text-sm rounded-md"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          ></motion.textarea>

          <Button btnText="Send Message" btnClass="" btnIcon={<FiSend />} />
        </form>
      </div>
    </div>
  );
}
