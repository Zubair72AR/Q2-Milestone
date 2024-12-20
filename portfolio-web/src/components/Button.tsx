"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  btnText: string;
  btnClass: string;
  onClicking?: React.MouseEventHandler<HTMLButtonElement>;
  btnIcon?: ReactNode;
}

export default function Button({
  btnText,
  btnClass,
  onClicking,
  btnIcon,
}: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      className={`${
        btnClass ? btnClass : "px-[14px] py-[10px] md:px-4 md:py-3"
      } rounded-sm bg-gradient-to-r from-red-500 via-red-600 to-orange-600 text-white text-xs md:text-sm shadow-md flex justify-center items-center hover:bg-gradient-to-br`}
      onClick={onClicking}
    >
      {btnIcon && <span className="mr-1 text-base md:text-lg">{btnIcon}</span>}
      {btnText}
    </motion.button>
  );
}
