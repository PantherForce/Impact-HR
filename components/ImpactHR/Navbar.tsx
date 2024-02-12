// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logonav from "../../public/img/logo-nav.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the hamburger menu

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={logonav} alt="logo-nav" width={150} height={100} />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block lg:items-center lg:w-auto`}
      >
        <ul className="text-md lg:flex-grow">
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black mr-10">
            <a href="#about">About</a>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black mr-10">
            <a href="#solution">Solution</a>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black mr-10">
            <a href="#whyus">Why us</a>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-black mr-10">
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
