import { motion } from "framer-motion";
import { textTransition } from "../utils/Transition";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import helix from "../images/helix.png";

export default function ConnectedServices() {
  return (
    <header
      className="relative lg:flex w-full
    pt-60 sm:pt-96"
    >
      <motion.nav
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        variants={textTransition(0.4)}
        className="relative flex-col xl:w-3/5"
      >
        <motion.div
          initial={{ x: "0%", rotate: "0deg", opacity: 1 }}
          animate={{ x: "15%", rotate: "-30deg", opacity: 0.5, scale: 0.8 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={helix}
            alt="helix"
            className="absolute top-20 -left-44 sm:-left-44 lg:-left-96
          w-96 sm:w-[618px] -z-40"
          />
        </motion.div>
        <motion.div
          variants={textTransition(0.7)}
          className="relative flex xl:justify-start sm:text-[24px] px-12 md:px-20 lg:px-0 lg:-ml-16
          tracking-widest font-normal text-white text-opacity-60 z-50"
        >
          COMMUNITY-OWNED AND OPERATED
        </motion.div>

        <motion.div
          variants={textTransition(0.4)}
          className="relative flex justify-center font-Helvetica lg:text-left 
          text-[45px] sm:text-[80px] md:text-[90px]
          leading-[52px] sm:leading-[100px]
          px-12 md:px-20 xl:px-0 py-[30px] sm:py-[50px] lg:-ml-16 lg:mr-16
          bg-clip-text text-transparent bg-gradient-to-r from-white via white to-gray-500 z-50"
        >
          Enter a Universe of Connected Services.
        </motion.div>

        <motion.div
          variants={textTransition(0.7)}
          className="relative flex justify-center xl:text-left tracking-[0.05em]
          sm:text-xl md:text-3xl
          leading-7 lg:leading-[42px] lg:-ml-16 lg:mr-16
          px-12 sm:px-16 md:px-20 lg:px-56 xl:pr-10 xl:pl-0"
        >
          Cronos apps and services connect using IBC, the Inter-Blockchain
          Communication protocol. This innovation enables you to freely exchange
          assets and data across sovereign.
        </motion.div>

        <motion.div
          variants={textTransition(0.7)}
          className="flex xl:justify-start
          px-12 md:px-20 lg:px-0 pt-12 gap-12 sm:gap-20 lg:-ml-16
          "
        >
          <div className="flex justify-center text-[16px] hover:text-[22px] md:text-[20px]">
            <button
              className="flex items-center justify-center bg-gradient-to-r from-white hover:from-indigo-200 via white to-gray-500 hover:to-indigo-500
              z-50 text-black
              w-[150px] sm:w-[280px] h-[60px] sm:h-[85px]"
            >
              <span className="font-medium">Learn</span>
            </button>
          </div>

          <a
            className="flex items-center justify-center gap-1 sm:gap-4 z-50
            text-[16px] hover:text-[22px] md:text-[20px]"
            href="#"
          >
            <span className="font-medium">Explore Tokens</span>
            <FiChevronRight size="30" />
          </a>
        </motion.div>
      </motion.nav>

      <motion.nav
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        variants={textTransition(0.7)}
        className="xl:w-2/5 text-center xl:text-right
        pt-12 sm:pt-24"
      >
        <motion.div>
          <h1
            className="relative font-Helvetica
            text-[70px] sm:text-[100px] leading-[80px] sm:leading-[130px] font-black
            bg-clip-text text-transparent bg-gradient-to-r from-white via white to-gray-500 z-50"
          >
            265+
          </h1>
          <span className="font-normal text-[25px] sm:text-[30px] leading-10">
            App & Services
          </span>
        </motion.div>

        <motion.div className="pt-10 sm:pt-16 lg:pt-36">
          <h1
            className="relative font-Helvetica
            text-[70px] sm:text-[100px] leading-[80px] sm:leading-[130px] font-black
            bg-clip-text text-transparent bg-gradient-to-r from-white via white to-gray-500 z-50"
          >
            $63B+
          </h1>
          <span className="font-normal text-[25px] sm:text-[30px] leading-10">
            Digital assets
          </span>
        </motion.div>
      </motion.nav>
    </header>
  );
}
