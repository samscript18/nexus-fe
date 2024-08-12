"use client";

import Image from "next/image";
import navLogo from "@/public/nav_logo.png";
import { Button } from "../components/Button";
import { useState } from "react";
import { navData } from "../utils/data";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(1);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="fixed w-full bg-[#1a1a1a] lg:relative md:px-[2rem] lg:px-[4rem] md:pt-4 z-30">
      <nav
        id="home"
        className="w-full flex justify-between items-center p-2 md:p-3 border-2 border-[#262626]"
      >
        <Image src={navLogo} width={80} height={80} alt="nexus-logo" />
        <ul className="hidden lg:flex justify-between items-center">
          {navData.map((item) => {
            return (
              <li
                className={`${
                  isActive && index === item.id ? "bg-[#262626]" : ""
                } py-3 px-6 ${
                  item.id === navData.length
                    ? "rounded-md"
                    : "lg:mr-8 rounded-md"
                } cursor-pointer`}
                onClick={() => {
                  setIsActive(true);
                  setIndex(item.id);
                }}
                key={item.id}
              >
                <a href={`#${item.path}`} className="text-white">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button className="hidden lg:flex bg-[#004080] text-white" />

        <div className="flex lg:hidden duration-500">
          {toggleMenu ? (
            <RiCloseLine
              size={27}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              size={27}
              className="text-white cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </nav>
      {toggleMenu && (
        <ul className="w-full absolute right-0 bg-[#1a1a1a] flex flex-col px-6 py-4 rounded-md text-center animate-scale">
          {navData.map((item) => {
            return (
              <li
                className={`${
                  isActive && index === item.id ? "bg-[#262626]" : ""
                } py-3 px-6 ${
                  item.id === navData.length ? "rounded-md" : "rounded-md"
                } cursor-pointer`}
                onClick={() => {
                  setIsActive(true);
                  setIndex(item.id);
                  setToggleMenu(false);
                }}
                key={item.id}
              >
                <a href={`#${item.path}`} className="text-white text-[1.3rem]">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Navbar;
