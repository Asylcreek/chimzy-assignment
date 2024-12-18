"use client"; // Needed for client-side behavior in Next.js 13+

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import routes from "@/helpers/routes";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo1 from "@/public/logo/Logo.png";
import logo from "@/public/logo/Logo2.png";
import { FaArrowLeft } from "react-icons/fa";
import Button from "@/component/buttonSizes/Button";
import Image from "next/image";

type NavbarProps = {
  openOverlay?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ openOverlay }) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHomePage = pathname === "/";
  const isTheRunPage = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setIsScrollingUp(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const openMenu = () => setToggle(true);
  const closeMenu = () => setToggle(false);

  return (
    <nav className="fixed top-0 z-[999] flex flex-col justify-center items-center w-full overflow-hidden">
      {/* Top Bar */}

      {/* Main Navbar */}
      <div className="flex justify-center items-center sm:h-[88px] w-full bg-white shadow-custom2 ">
        <div className="relative w-full max-w-[1200px] flex justify-between items-center px-[15px] py-[24px]">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo1}
              alt="logo"
              width={100}
              height={40}
              priority
              className=""
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center items-start space-x-4 ">
            <li className="py-[10px] px-[10px] capitalize ">
              <Link
                href={routes.home()}
                className={`capitalize text-sm ${
                  pathname === "/" ? "font-normal" : " font-bold"
                } text-[#354052] hover:text-red-500`}
              >
                Home
              </Link>
            </li>
            <li className="py-[10px] px-[10px] capitalize ">
              <Link
                href={routes.aboutUs()}
                className={`capitalize text-sm ${
                  pathname === "/about" ? "font-normal" : " font-bold"
                } text-[#354052] hover:text-red-500`}
              >
                About
              </Link>
            </li>
            <li className="py-[10px] px-[10px] capitalize ">
              <Link
                href={routes.store()}
                className={`capitalize text-sm ${
                  pathname === "/store" ? "font-normal" : " font-bold"
                } text-[#354052] hover:text-red-500`}
              >
                Store{" "}
                <span className="bg-[#389F55] text-white rounded-[2px] p-1">
                  Coming Soon
                </span>
              </Link>
            </li>
            <li className="py-[10px] px-[10px] capitalize ">
              <Link
                href={routes.spa()}
                className={`capitalize text-sm ${
                  pathname === "/spa" ? "font-normal" : " font-bold"
                } text-[#354052] hover:text-red-500`}
              >
                Spa
              </Link>
            </li>

            <li className="flex gap-[33px] justify-center items-center ">
              <Link href={routes.UserManagement()}>
                <div className="w-[159px] pl-[18px]">
                  <Button size="medium">Book Session</Button>
                </div>
              </Link>
            </li>
            <li className="flex gap-[33px] justify-center items-center ">
              <Link href={routes.UserManagement()}>
                <div className="w-[187px] pl-[18px]">
                  <Button size="large">Become a member</Button>
                </div>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <HiMenuAlt3
              size={24}
              onClick={openMenu}
              className="cursor-pointer text-gray-800"
            />
          </div>

          {/* Mobile Menu */}
          {toggle && (
            <div
              className={` silver:hidden fixed top-0 left-0 flex flex-col items-start justify-center h-screen bg-[#000000dc]  text-white  w-full  transition-transform transform ${
                toggle ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex gap-10 flex-col justify-start items-start w-full h-screen bg-black max-w-[300px] pt-[30px]">
                <div className="flex justify-between items-center w-full  px-[20px]">
                  {/* Logo */}
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="logo"
                      width={100}
                      height={40}
                      priority
                      className=""
                    />
                  </Link>
                  <AiOutlineClose
                    size={24}
                    onClick={closeMenu}
                    className="cursor-pointer text-white"
                  />
                </div>
                <ul className="flex gap-2 flex-col items-start justify-center text-lg w-full pl-[20px]">
                  <li className="w-full">
                    <Link
                      className="!flex !w-full"
                      href={routes.home()}
                      onClick={() => setActiveLink("/")}
                    >
                      <div
                        onClick={closeMenu}
                        className={`flex justify-start items-start w-full py-[8px]  border-soild 
                          ${
                            activeLink === "/"
                              ? " border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                      >
                        <span
                          className={`capitalize text-gray-500
                          ${
                            activeLink === "/"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                        >
                          home
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="!flex !w-full"
                      href={routes.aboutUs()}
                      onClick={() => setActiveLink("about")}
                    >
                      <div
                        onClick={closeMenu}
                        className={`flex justify-start items-start w-full py-[8px]  
                          ${
                            activeLink === "/about"
                              ? " border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                      >
                        <span
                          className={`capitalize text-gray-500
                          ${
                            activeLink === "/about"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                        >
                          about
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="!flex !w-full"
                      href={routes.store()}
                      onClick={() => setActiveLink("store")}
                    >
                      <div
                        onClick={closeMenu}
                        className={`flex justify-start items-start w-full py-[8px] "
                          ${
                            activeLink === "/store"
                              ? "border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                      >
                        <span
                          className={`capitalize text-gray-500
                          ${
                            activeLink === "/store"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                        >
                          Store
                          <span className="bg-[#389F55] text-white rounded-[2px] p-1">
                            Coming Soon
                          </span>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      className="!flex !w-full"
                      href={routes.spa()}
                      onClick={() => setActiveLink("/spa")}
                    >
                      <div
                        onClick={closeMenu}
                        className={`flex justify-start items-start w-full py-[8px]  
                          ${
                            activeLink === "/spa"
                              ? "border-r-[4px] border-solid border-r-[#8D12AB]"
                              : ""
                          }`}
                      >
                        <span
                          className={`capitalize text-gray-500
                          ${
                            activeLink === "/spa"
                              ? "!font-bold !text-[#FFFFFF]  "
                              : ""
                          }`}
                        >
                          spa
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li className="w-full py-[8px] pr-[20px]">
                    <Link href={routes.UserManagement()}>
                      <Button size="medium">Book Session</Button>
                    </Link>
                  </li>
                  <li className="w-full pr-[20px]">
                    <Link href={routes.UserManagement()}>
                      <Button size="large">Become a member</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
