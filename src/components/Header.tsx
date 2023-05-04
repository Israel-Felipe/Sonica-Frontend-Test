import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      variants={textTransition(0.4)}
      className="max-w-screen-xl mx-auto
      py-6 sm:py-8 md:py-16 lg:py-16
      px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0"
    >
      <nav className="flex justify-between items-center">
        <h1 className="font-medium text-base md:text-lg lg:text-2xl">CRONOS</h1>

        <div
          className="hidden item-center md:flex font-medium text-xs mt-2 ml-20
          sm:text-sm lg:text-[20px]"
        >
          <CustomLink href="#">Learn</CustomLink>
          <CustomLink href="#">Build</CustomLink>
          <CustomLink href="#">Explore</CustomLink>
        </div>

        <a
          className="hidden md:flex items-center space-x-2 cursor-pointer text-base md:text-lg lg:text-2xl gap-3"
          href="#"
        >
          <span className="font-medium">Get CRONOS</span>
          <FiChevronRight />
        </a>
      </nav>
    </motion.header>
  );
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className="mx-6 cursor-pointer" {...props} />;
}

export const textTransition = (delay: number) => ({
  hidden: {
    y: -50,
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
