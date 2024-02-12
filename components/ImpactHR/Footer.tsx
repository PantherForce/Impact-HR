// components/Footer.tsx
import React from "react";
import ContentContainer from "./ContentContainer";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex mx-10 md:mx-44 flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">Impact HR</h2>
          <p className="mb-4">Subscribe to get new Updates</p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter your email here"
              className="p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side: Navigation Links */}
        <nav className="w-full lg:w-1/2 lg:text-right">
          <ul className="space-y-4 flex flex-col md:flex-row justify-evenly  lg:space-y-0 lg:space-x-4">
            <li className="inline-block ">
              <a href="#about" className="hover:text-gray-700">
                About us
              </a>
            </li>
            <li className="inline-block">
              <a href="#solution" className="hover:text-gray-700">
                Solution
              </a>
            </li>
            <li className="inline-block">
              <a href="#whyus" className="hover:text-gray-700">
                Why Us?
              </a>
            </li>
            <li className="inline-block">
              <a href="#contact" className="hover:text-gray-700">
                Get in Touch
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-600 mt-10 text-sm">
        <p>© 2019 Impact HR, Copyright and rights reserved</p>
        <p>
          <a href="#terms" className="hover:text-gray-700">
            Terms and Conditions
          </a>{" "}
          ·
          <a href="#privacy" className="hover:text-gray-700">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
