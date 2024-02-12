// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import logonav from "../../public/img/logo-nav.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={logonav} alt="logo-nav" />
      </div>
      <div className="block lg:flex lg:items-center lg:w-auto">
        <ul className="text-lg lg:flex-grow">
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black mr-10">
            <a href="#about">About</a>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black mr-10">
            <a href="#solution">Solution</a>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-10">
            <a href="#whyus">Why us</a>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black mr-10">
            <a>Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
