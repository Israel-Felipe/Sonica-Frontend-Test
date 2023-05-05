import { motion } from "framer-motion";
import { menuBlocs } from "../utils/Menus";
import Image, { StaticImageData } from "next/image";
import { textTransition } from "../utils/Transition";
import { FiChevronRight } from "react-icons/fi";

export default function HeartInterchainBlocs() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      variants={textTransition(0.4)}
      className="grid xl:grid-cols-2 xl:w-full
      gap-y-[120px] pt-28 lg:pt-44 m-auto w-3/4"
    >
      {menuBlocs.map((info, i) => (
        <BlocContainer
          image={info.image}
          title={info.title}
          text={info.text}
          key={i}
        />
      ))}

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={textTransition(0.4)}
        className="flex justify-start
          px-0 md:px-20 lg:px-0 w-full
          "
      >
        <div className="flex justify-center lg:justify-start w-full text-[16px] hover:text-[22px] md:text-[20px]">
          <button
            className="flex items-center justify-center bg-gradient-to-r from-white hover:from-indigo-200 via white to-gray-500 hover:to-indigo-500 z-50 text-black gap-8
            w-full lg:w-[280px] h-[85px]"
          >
            <span className="font-medium">Cosmos Hub</span>
            <FiChevronRight size="30" />
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}

function BlocContainer({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: StaticImageData;
}) {
  return (
    <motion.div initial="hidden" whileInView="show" className="flex-col">
      <motion.div
        variants={textTransition(0.6)}
        className="relative flex justify-center md:block"
      >
        <Image
          src={image}
          alt={text}
          className="flex justify-center items-center z-50 w-[180px] md:w-[240px] m-auto lg:m-0"
        />
        <div
          className="absolute w-[90px] md:w-[140px] h-[90px] md:h-[140px]
        bg-yellow-200 bg-opacity-25 blur-[30.5px] top-20 md:top-20 left-38 md:left-[40%] lg:left-12 rounded-full -z-40"
        />
      </motion.div>

      <motion.div
        variants={textTransition(0.6)}
        className="flex justify-center lg:justify-start font-bold text-[32px] md:text-[50px] mb-2"
      >
        {title}
      </motion.div>
      <motion.div
        variants={textTransition(1)}
        className="flex justify-center lg:justify-start text-center lg:text-start font-normal text-[18] md:text-[24px] xl:mr-[200px]"
      >
        {text}
      </motion.div>
    </motion.div>
  );
}
