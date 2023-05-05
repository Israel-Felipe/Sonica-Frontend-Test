import { motion } from "framer-motion";

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

const menuFooter = [
  {
    subject: {
      title: "Learn",
      subtitles: ["Introduction", "Features", "Staking", "Get HEDRON", "FAQ"],
    },
  },
  {
    subject: {
      title: "Build",
      subtitles: [
        "Developer Portal",
        "Ignite CLI",
        "Cronos SDK",
        "IBC Protocol",
      ],
    },
  },
  {
    subject: {
      title: "Explore",
      subtitles: ["Tokens", "Apps & Service", "Wallets", "Gravity DEX", "Blog"],
    },
  },
  {
    subject: {
      title: "Participate",
      subtitles: ["Community", "Contributors", "Events", "Newsletters"],
    },
  },
  {
    subject: {
      title: "Resources",
      subtitles: ["About", "Press Kit", "Design", "Resources"],
    },
  },
];

const textTransition = (delay: number) => ({
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
