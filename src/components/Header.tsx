import { FiChevronRight } from "react-icons/fi";

export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto py-6 sm:py-8 md:py-16 lg:py-16 px-8 md:px-16 lg:px-14 xl:px-10 2xl:px-0">
      <nav className="flex justify-between items-center">
        <h1 className="font-medium text-base md:text-lg lg:text-2xl">CRONOS</h1>
        <div className="hidden item-center md:flex font-medium text-xs sm:text-sm md:text-base lg:text-lg">
          <CustomLink href="#">Learn</CustomLink>
          <CustomLink href="#">Build</CustomLink>
          <CustomLink href="#">Explore</CustomLink>
        </div>
        <a
          className="hidden md:flex items-center space-x-2 cursor-pointer text-base md:text-lg lg:text-2xl"
          href="#"
        >
          <span className="font-medium">Get CRONOS</span>
          <FiChevronRight />
        </a>
      </nav>
    </header>
  );
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className="mx-6 cursor-pointer" {...props} />;
}
