import { motion } from "framer-motion";
import { textTransition } from "../utils/Transition";
import { FiArrowUpRight } from "react-icons/fi";

export default function ReceiveTransmissions() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      variants={textTransition(0.4)}
      className="relative w-full lg:flex my-[120px] lg:my-[140px] py-[80px] lg:py-[115px]
      border-t-2 border-b-2 border-[#FFFFFF1A] p-10"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className="flex-col m-auto"
      >
        <motion.div
          variants={textTransition(0.6)}
          className="font-black text-[26px] md:text-[50px] leading-44 mb-1 lg:mb-0 md:text-center lg:text-start"
        >
          Receive transmissions
        </motion.div>

        <motion.div
          variants={textTransition(0.8)}
          className="flex font-normal text-[14px] md:text-[27px] md:justify-center lg:justify-start"
        >
          <span>Unsubscribe at any time.</span>

          <div className="flex pl-2 cursor-pointer text-[15px] md:text-[30px] md:gap-2">
            <a href="#" className="-mt-0.5 md:-mt-1">
              Privacy policy
            </a>
            <FiArrowUpRight className="w-10 -ml-2" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        variants={textTransition(0.6)}
        className="flex md:justify-center w-full md:w-[520px] h-[80px] m-auto pt-8 md:pt-8 lg:pt-0"
      >
        <input
          type="text"
          placeholder="Your email"
          className="w-[95%] lg:w-[80%] md:h-[60px] lg:h-full py-4 bg-[#FFFFFF1A] p-6 text-[14px] md:text-[24px] text-white text-opacity-20 placeholder-white placeholder-opacity-20"
        />
      </motion.div>
    </motion.header>
  );
}
