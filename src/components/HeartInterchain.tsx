import { motion } from "framer-motion";
import Image from "next/image";
import thorus from "../images/thorus.png";

export default function HeartInterchain() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      variants={textTransition(0.4)}
      className="relative w-full
      pt-60 sm:pt-96"
    >
      <motion.div
        initial={{ x: "10%", rotate: "0deg", opacity: 1 }}
        animate={{ x: "30%", rotate: "-10deg", opacity: 0.7 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={thorus}
          className="absolute -top-10 md:-top-40 lg:-top-60 -left-20 lg:-left-20
          w-[820px] blur-[14px] -z-40"
          alt="thorus"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="relative flex-col"
      >
        <motion.div
          variants={textTransition(1)}
          className="relative flex justify-center sm:text-[24px] tracking-widest font-normal text-white text-opacity-60"
        >
          ENTER THE CRONOS HUB
        </motion.div>

        <motion.div
          variants={textTransition(0.7)}
          className="relative font-Helvetica text-center
            text-[40px] sm:text-[80px] md:text-[90px]
            leading-[60px] sm:leading-[100px] tracking-[0.02em]
            py-6 sm:py-8 md:py-10 px-5 md:px-10
            bg-clip-text text-transparent bg-gradient-to-r from-white via white to-gray-500 z-50"
        >
          The Heart of the Interchain.
        </motion.div>

        <motion.div
          variants={textTransition(1)}
          className="relative flex justify-center text-center text-lg tracking-[0.05em]
          sm:text-xl md:text-3xl
          px-8 sm:px-16 md:px-32 lg:px-72 lg:leading-[52px] z-50"
        >
          Serving as the economic center of Cronos, the Cronos Hub is a
          blockchain that provides vital services to the Interchain.
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

const textTransition = (delay: number) => ({
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
