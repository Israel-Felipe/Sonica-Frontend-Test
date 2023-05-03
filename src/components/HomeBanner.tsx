import Image from "next/image";
import icosahedron from "../images/icosahedron.png";
import { motion } from "framer-motion";

export default function HomeBanner() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={textTransition(0.4)}
      className="relative w-auto h-auto mt-40 lg:mt-20"
    >
      <motion.div
        initial={{ x: "0%", rotate: "0deg" }}
        animate={{ x: "15%", rotate: "-40deg" }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={icosahedron}
          className={`absolute sm:-top-24 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 filter opacity-70 blur-[5px]
          }`}
          alt="Icosahedron"
        />
      </motion.div>

      <motion.span
        variants={textTransition(1)}
        className="relative flex justify-center sm:text-[24px] tracking-widest font-normal text-white text-opacity-60"
      >
        WELCOME TO CRONOS
      </motion.span>

      <motion.span
        variants={textTransition(0.7)}
        className="relative flex justify-center text-lg font-Helvetica text-center
        text-[45px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px]
        leading-[60px] tracking-[0.02em] sm:leading-[100px] xl:leading-[180px]
        py-16 sm:py-8 md:py-3
        bg-clip-text text-transparent bg-gradient-to-r from-white via white to-gray-500 z-50"
      >
        The Internet of Blockchains.
      </motion.span>

      <motion.p
        variants={textTransition(1)}
        className="relative flex justify-center text-center text-lg tracking-[0.05em]
        sm:text-xl md:text-3xl
        px-8 sm:px-16 md:px-28 lg:px-56 lg:leading-[52px]"
      >
        Cronos is an ever expanding ecosystem of connected apps and services,
        built for a decentralized future.
      </motion.p>

      <motion.div
        initial={{ x: "90%", rotate: "0deg" }}
        animate={{ x: "55%", rotate: "30deg" }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={icosahedron}
          className={`absolute sm:-top-24 lg:-top-96 w-48 h-48 md:w-80 md:h-80 lg:w-110 lg:h-110 filter opacity-60 blur-[8px]
          }`}
          alt="Icosahedron"
        />
      </motion.div>
    </motion.header>
  );
}

export const textTransition = (delay: number) => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay,
    },
  },
});
