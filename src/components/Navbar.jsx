import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} h-20 w-full flex items-center py-1 fixed top-0 z-20 bg-black bg-opacity-70 backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <span className="text-white text-2xl font-bold cursor-pointer">
            Raymond Cob
          </span>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-gray-500 hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className="text-gray-500 hover:text-white text-[18px] font-medium cursor-pointer">
            <a
              href="https://www.linkedin.com/in/raymond-cob/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={30} />
            </a>
          </li>
          <li className="text-gray-500 hover:text-white text-[18px] font-medium cursor-pointer">
            <a
              href="https://github.com/raymondcob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub size={30} />
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } justify-center items-center p-6 absolute top-[80px] left-0 right-0 z-10 my-2 min-w-full rounded-xl bg-black backdrop-blur-lg border border-gray-800/50 shadow-xl transition-all duration-300 ease-in-out`}
          >
            <ul className="list-none flex justify-start items-start flex-col gap-6 w-full">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`text-gray-400 hover:text-white font-medium cursor-pointer text-[16px] transition-all duration-300 hover:translate-x-1 ${
                    index === 0 ? "mt-0" : "mt-2"
                  }`}
                  onClick={() => setToggle(!toggle)}
                >
                  <a href={`#${link.id}`} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    {link.title}
                  </a>
                </li>
              ))}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/raymond-cob/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <IconBrandLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/raymondcob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <IconBrandGithub size={24} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;