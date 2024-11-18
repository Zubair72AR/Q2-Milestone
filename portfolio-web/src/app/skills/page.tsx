import Headings from "@/components/Headings";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <div className="px-6 lg:px-12 2xl:px-24 relative py-12">
      <div className="px-6 lg:px-12 2xl:px-24 py-4 relative overflow-hidden">
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
      <Headings headText="Contact." headClass="mb-8" />
      <div>
        <h1>My Skills</h1>
        <div>
          <h2>Front End</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
}
