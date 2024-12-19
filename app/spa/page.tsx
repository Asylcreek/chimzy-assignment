"use client";

import shopStyles from "@/styles/shop.module.scss";

import shapeOne from "@/public/images/a30f3468f6f468172e5c912e0d03b9bc.jpeg";
import ImageTwo from "@/public/images/79e076bb0dd61a4debfe6f0e0d4b2f6e.jpeg";
import ImageThree from "@/public/images/f57323af757566c57dad09d858652213.jpeg";
import ImageFour from "@/public/images/79e076bb0dd61a4debfe6f0e0d4b2f6e.jpeg";
import ImageFive from "@/public/images/13ebb85a226d3f7505a03843514e7484.jpeg";
import icon from "@/public/icon/sea-svgrepo-com 1.png";
import { GiSoundWaves } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import shapeFort from "@/public/images/6fef77eb79b8a16b6f5b7c3e3991037e (1).jpeg";
import Image from "next/image";
import Link from "next/link";
import routes from "@/helpers/routes";
import Button from "@/component/buttonSizes/Button";
import SvgIcon from "@/components/svg-icon/svg-icon.component";

const SpaPage = () => {
  return (
    <main className="flex pt-[80px] justify-center items-center w-full bg-white">
      <div className="flex siteWapper gap-[20px] flex-col justify-center items-center w-full">
        <div className="flex flex-col gap-[10px] justify-center items-center w-full max-w-[582px]">
          <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
            Book a Session
          </h1>
          <div className="flex gap-5 flex-col justify-center w-full text-center pb-[50px] sm:max-w-[406px]">
            <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
              All of our treatments are designed to leave you feeling like your
              very best self. All of our spa therapies are for residents only.
            </p>
          </div>
        </div>
        <div style={{ width: "100%" }} className={shopStyles.searchSection}>
          <form>
            <div>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Find service"
              />

              <hr />

              <button type="button">
                <SvgIcon iconName="search" />
                Search
              </button>
            </div>

            <select>
              <option value="">Sort by</option>
            </select>
          </form>
        </div>
        <section className=" relative bg-white flex flex-col justify-center items-start   h-auto w-full ">
          <div className="static siteWapper flex flex-col justify-center items-center w-full  my-0 mx-auto">
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 w-full">
              <div className=" relative flex flex-col gap-[12px] p-[20px] justify-center items-center w-full rounded-[12px] border-[1px] shadow-custom-md ">
                <div className="relative flex gap-[16px]">
                  <div className=" absolute top-0 right-0 flex justify-center items-center bg-[#389F55] overflow-hidden rounded-[2px] p-1">
                    <span className="text-[#FFFFFF] text-[10px] font-[800]">
                      Most Popular
                    </span>
                  </div>
                  <div className="flex justify-between  w-full h-[126px] ">
                    <Image
                      src={shapeFort}
                      alt="image"
                      className=" w-[189px] h-[126px] rounded-[8px] overflow-hidden object-cover "
                    />
                  </div>
                  <div>
                    <h1 className="text-[#212121] !font-[400] text-[24px] leading-[35.52px]">
                      Swedish Massage
                    </h1>
                    <p className="text-[16px] leading-[27px] text-[#444444]">
                      A gentle, relaxing massage that uses long strokes to ease
                      tension. Comes with relaxing music and a personal masseuse
                    </p>
                  </div>
                </div>
                <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-[17px] ">
                      <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                        $312
                      </h1>
                      <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                      <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                        90Minutes
                      </span>
                    </div>
                    <div className="flex gap-[4px]">
                      <div className="bg-[#337180] flex justify-center items-center w-[24px] h-[24px] rounded-[50%] overflow-hidden">
                        <GiSoundWaves className="text-white" />
                      </div>
                      <span className="text-[#00000080] font-[100] text-[20px] leading-[27.32px]">
                        Sound
                      </span>
                    </div>
                  </div>

                  <Link className="w-full" href={routes.appointment()}>
                    <div className="w-full ">
                      <Button size="large">Book a session</Button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" relative flex flex-col gap-[12px] p-[20px] justify-center items-center w-full rounded-[12px] border-[1px] shadow-custom-md ">
                <div className="relative flex gap-[16px]">
                  <div className="flex justify-between  w-full h-[126px] ">
                    <Image
                      src={shapeOne}
                      alt="image"
                      className=" w-[189px] h-[126px] rounded-[8px] overflow-hidden object-cover "
                    />
                  </div>
                  <div>
                    <h1 className="text-[#212121] !font-[400] text-[24px] leading-[35.52px]">
                      Deep Tissue Massage
                    </h1>
                    <p className="text-[16px] leading-[27px] text-[#444444]">
                      Targets deep layers of muscle to release chronic patterns
                      of tension. Comes with relaxing music and a personal
                      masseuse
                    </p>
                  </div>
                </div>
                <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-[17px] ">
                      <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                        $312
                      </h1>
                      <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                      <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                        90Minutes
                      </span>
                    </div>
                    <div className="flex gap-[4px]">
                      <div className="bg-[#337180] flex justify-center items-center w-[24px] h-[24px] rounded-[50%] overflow-hidden">
                        <GiSoundWaves className="text-white" />
                      </div>
                      <span className="text-[#00000080] font-[100] text-[20px] leading-[27.32px]">
                        Sound
                      </span>
                    </div>
                  </div>

                  <Link className="w-full" href={routes.appointment()}>
                    <div className="w-full ">
                      <Button size="large">Book a session</Button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" relative flex flex-col gap-[12px] p-[20px] justify-center items-center w-full rounded-[12px] border-[1px] shadow-custom-md ">
                <div className="relative flex gap-[16px]">
                  <div className=" absolute top-0 right-0 flex justify-center items-center bg-[#389F55] overflow-hidden rounded-[2px] p-1">
                    <span className="text-[#FFFFFF] text-[10px] font-[800]">
                      Couple Special
                    </span>
                  </div>
                  <div className="flex justify-between  w-full h-[126px]  ">
                    <Image
                      src={ImageTwo}
                      alt="image"
                      className=" w-[189px] h-[126px] rounded-[8px] overflow-hidden object-cover "
                    />
                  </div>
                  <div>
                    <h1 className="text-[#212121] !font-[400] text-[24px] leading-[35.52px]">
                      Hot Stone Massage
                    </h1>
                    <p className="text-[16px] leading-[27px] text-[#444444]">
                      A gentle, relaxing massage that uses long strokes to ease
                      tension. Comes with relaxing music and a personal masseuse
                    </p>
                  </div>
                </div>
                <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-[17px] ">
                      <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                        $312
                      </h1>
                      <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                      <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                        90Minutes
                      </span>
                    </div>
                    <div className="flex gap-[4px]">
                      <div className="bg-[#337180] flex justify-center items-center w-[24px] h-[24px] rounded-[50%] overflow-hidden">
                        <GiSoundWaves className="text-white" />
                      </div>
                      <span className="text-[#00000080] font-[100] text-[20px] leading-[27.32px]">
                        Sound
                      </span>
                    </div>
                  </div>

                  <Link className="w-full" href={routes.appointment()}>
                    <div className="w-full ">
                      <Button size="large">Book a session</Button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" relative flex flex-col gap-[12px] p-[20px] justify-center items-center w-full rounded-[12px] border-[1px] shadow-custom-md ">
                <div className="relative flex gap-[16px]">
                  <div className="flex justify-between  w-full h-[126px]  ">
                    <Image
                      src={ImageThree}
                      alt="image"
                      className=" w-[189px] h-[126px] rounded-[8px] overflow-hidden object-cover "
                    />
                  </div>
                  <div>
                    <h1 className="text-[#212121] !font-[400] text-[24px] leading-[35.52px]">
                      Aromatherapy Massage
                    </h1>
                    <p className="text-[16px] leading-[27px] text-[#444444]">
                      Targets deep layers of muscle to release chronic patterns
                      of tension. Comes with relaxing music and a personal
                      masseuse
                    </p>
                  </div>
                </div>
                <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-[17px] ">
                      <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                        $312
                      </h1>
                      <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                      <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                        90Minutes
                      </span>
                    </div>
                    <div className="flex gap-[4px]">
                      <div className="bg-[#337180] flex justify-center items-center w-[24px] h-[24px] rounded-[50%] overflow-hidden">
                        <GiSoundWaves className="text-white" />
                      </div>
                      <span className="text-[#00000080] font-[100] text-[20px] leading-[27.32px]">
                        Sound
                      </span>
                    </div>
                  </div>

                  <Link className="w-full" href={routes.appointment()}>
                    <div className="w-full ">
                      <Button size="large">Book a session</Button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" relative flex flex-col gap-[12px] p-[20px] justify-center items-center w-full rounded-[12px] border-[1px] shadow-custom-md ">
                <div className="relative flex gap-[16px]">
                  <div className="flex justify-between  w-full h-[126px]  ">
                    <Image
                      src={ImageFour}
                      alt="image"
                      className=" w-[189px] h-[126px] rounded-[8px] overflow-hidden object-cover "
                    />
                  </div>
                  <div>
                    <h1 className="text-[#212121] !font-[400] text-[24px] leading-[35.52px]">
                      Sound Bath Therapy
                    </h1>
                    <p className="text-[16px] leading-[27px] text-[#444444]">
                      A gentle, relaxing massage that uses long strokes to ease
                      tension. Comes with relaxing music and a personal masseuse
                    </p>
                  </div>
                </div>
                <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-[17px] ">
                      <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                        $312
                      </h1>
                      <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                      <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                        90Minutes
                      </span>
                    </div>
                    <div className="flex gap-[4px]">
                      <div className=" flex justify-center items-center w-[24px] h-[24px] rounded-[50%] overflow-hidden">
                        <Image
                          src={icon}
                          alt="image"
                          className=" w-[24px] h-[24px]  object-cover "
                        />
                      </div>
                      <span className="text-[#00000080] font-[100] text-[20px] leading-[27.32px]">
                        Water
                      </span>
                    </div>
                  </div>

                  <Link className="w-full" href={routes.appointment()}>
                    <div className="w-full ">
                      <Button size="large">Book a session</Button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" relative flex flex-col gap-[12px] p-[20px] justify-center items-center w-full rounded-[12px] border-[1px] shadow-custom-md ">
                <div className="relative flex gap-[16px]">
                  <div className=" absolute top-0 right-0 flex justify-center items-center bg-[#389F55] overflow-hidden rounded-[2px] p-1">
                    <span className="text-[#FFFFFF] text-[10px] font-[800]">
                      10% Discount
                    </span>
                  </div>
                  <div className="flex justify-between  w-full h-[126px]  ">
                    <Image
                      src={ImageFive}
                      alt="image"
                      className=" w-[189px] h-[126px] rounded-[8px] overflow-hidden object-cover "
                    />
                  </div>
                  <div>
                    <h1 className="text-[#212121] !font-[400] text-[24px] leading-[35.52px]">
                      Reflexology
                    </h1>
                    <p className="text-[16px] leading-[27px] text-[#444444]">
                      Targets deep layers of muscle to release chronic patterns
                      of tension. Comes with relaxing music and a personal
                      masseuse
                    </p>
                  </div>
                </div>
                <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-[17px] ">
                      <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                        $312
                      </h1>
                      <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                      <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                        90Minutes
                      </span>
                    </div>
                    <div className="flex gap-[4px]">
                      <div className=" flex justify-center items-center w-[24px] h-[24px] rounded-[50%] overflow-hidden">
                        <Image
                          src={icon}
                          alt="image"
                          className=" w-[24px] h-[24px]  object-cover "
                        />
                      </div>
                      <span className="text-[#00000080] font-[100] text-[20px] leading-[27.32px]">
                        Water
                      </span>
                    </div>
                  </div>

                  <Link className="w-full" href={routes.appointment()}>
                    <div className="w-full ">
                      <Button size="large">Book a session</Button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SpaPage;
