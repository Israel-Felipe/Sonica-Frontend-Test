import { motion } from "framer-motion";
import { textTransition } from "../utils/Transition";
import { menuFooter } from "../utils/Menus";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      variants={textTransition(0.4)}
      className="flex justify-between md:justify-center lg:justify-between mb-32 -mt-8 flex-wrap w-4/5 lg:w-full m-auto gap-14 md:gap-20 px-6 lg:px-0"
    >
      {menuFooter.map(({ subject }, i) => (
        <FooterComponents
          title={subject.title}
          subtitles={subject.subtitles}
          key={i}
        />
      ))}
    </motion.footer>
  );
}

function FooterComponents({
  title,
  subtitles,
}: {
  title: string;
  subtitles: string[];
}) {
  return (
    <header>
      <div className="text-[28px] md:text-[32px] pb-6 lg:pb-10">{title}</div>
      {subtitles.map((subtitle) => (
        <a
          href="#"
          className="flex text-[22px] md:text-[24px] opacity-40 pb-3 lg:pb-6 hover:text-indigo-400"
          key={subtitle}
        >
          {subtitle}
        </a>
      ))}
    </header>
  );
}
