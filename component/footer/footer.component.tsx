"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo/Logo2.png";
import styles from "./footer.module.css";
import routes from "@/helpers/routes";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="down"
      className="relative flex flex-col justify-center items-center w-full h-auto "
    >
      <section className="bg-[#1A5140] relative flex flex-col justify-center items-center w-full ">
        <div className="static z-30 w-full flex flex-col justify-center items-center max-w-[1180px] py-[50px] px-[15px] at500:px-[64px] my-0 mx-auto ">
          <div className="flex flex-col justify-center items-start w-full ">
            <div className="flex flex-col silver:flex-row gap-[30px] at500:gap-[139px] justify-center items-start  w-full ">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={40}
                priority
                className=""
              />

              <div className="w-full flex flex-col silver:flex-row gap-[48px] justify-between items-start  mb-[30px]">
                <div className="flex flex-col sm:flex-row items-start justify-between  w-full ">
                  <div className="flex flex-col gap-[30px] at500:flex-row justify-center items-start w-full at500:gap-[12px]">
                    <div className="flex gap-[10px] flex-col justify-center items-start w-full max-w-[200px]">
                      <h5 className=" text-[16px] leading-[24.03px] text-[#FFFFFF] ">
                        COMPANY
                      </h5>
                      <ul className=" flex flex-col justify-center items-start w-full gap-[10px]">
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              About Us
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className="text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              Privacy Policy
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className="text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              Terms of use
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              Contact us
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex gap-[10px] flex-col justify-center items-start w-full">
                      <h5 className=" !text-[16px] leading-[24.03px] text-[#FFFFFF] ">
                        CUSTOMER SUPPORT
                      </h5>
                      <ul className=" flex flex-col justify-start items-start w-full gap-[10px]">
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              Phone: +1 9193455412
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              info@heavenspa.com
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              Hours: Mon. - Fri. 8AM - 5PM
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full">
                      <h5 className=" text-[16px] leading-[24.03px] text-[#FFFFFF] ">
                        CONTACT
                      </h5>
                      <ul className=" flex flex-col justify-start items-start w-full gap-[10px]">
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              Phone: +1 9193455412
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              1000 N 4th Street, R18, Fairfield, IA 545536
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <Link href={routes.aboutUs()}>
                            <span className=" text-[16px] leading-[16px] text-[#FFFFFF] hover:text-[#5C176F]">
                              Hours: Mon. - Fri. 8AM - 5PM
                            </span>
                          </Link>
                        </li>
                        <li data-aos="fade-up">
                          <ul className="flex gap-[20px]">
                            <li data-aos="fade-up">
                              <a href="">
                                <FaFacebook
                                  size={20}
                                  className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                                />
                              </a>
                            </li>
                            <li data-aos="fade-up">
                              <a href="https://www.instagram.com/phcitywomenrun/profilecard/?igsh=MnFkZ3V1a2I0a3Ro">
                                <FaInstagram
                                  size={20}
                                  className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                                />
                              </a>
                            </li>
                            <li data-aos="fade-up">
                              <a href="">
                                <FaXTwitter
                                  size={20}
                                  className=" text-[#FFFFFF] hover:text-[#5C176F] transition-all duration-300 ease-in-out"
                                />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--hr line--> */}
            <hr className="h-[2px] w-full bg-[#FFFFFF] mt-[43px]" />
            {/* <!--copyright--> */}
            <ul className="flex flex-col gap-[6px] justify-start items-start w-full h-auto my-[30px] ">
              <li className="flex w-full ">
                <p className="text-[#FFFFFF] leading-[21.03px] text-left text-[14px] !font-[500]">
                  Heavenis Spa © {currentYear} / ALL RIGHTS RESERVED
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
