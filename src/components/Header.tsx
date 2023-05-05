import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      variants={textTransition(0.4)}
      className="w-screen-xl mx-auto
      py-6 sm:py-8 md:py-16 lg:py-16
      px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0"
    >
      <nav className="flex justify-between items-center ml-3">
        <h1 className="font-medium lg:text-[26px]">CRONOS</h1>

        <div
          className="absolute -top-1 -left-0 md:relative item-center md:flex font-medium mt-2 ml-20 md:gap-[60px] lg:gap-[82px]
          text-[14px] lg:text-[20px] mt-20 md:mt-0 w-[60%] md:w-auto flex justify-between
          text-indigo-400 md:text-white text-opacity-70 md:text-opacity-100"
        >
          <a className="hover:text-indigo-400" href="#">
            Learn
          </a>
          <a className="hover:text-indigo-400" href="#">
            Build
          </a>
          <a className="hover:text-indigo-400" href="#">
            Explore
          </a>
        </div>

        <a
          className="flex items-center lg:text-[26px] gap-3 
          font-medium hover:text-purple-400"
          href="#"
        >
          <span className="font-medium">Get CRONOS</span>
          <FiChevronRight />
        </a>
      </nav>
    </motion.header>
  );
}

const textTransition = (delay: number) => ({
  hidden: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      delay,
    },
  },
});
