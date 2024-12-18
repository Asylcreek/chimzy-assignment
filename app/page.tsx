"use client";

import ImageBackground from "@/component/image-prop/imageBackground.component";
import ImageBackgroundTwo from "@/component/image-prop/imageBackgroundtwo.component";
import background from "@/public/images/49c5f35cd06816d5c37d185c35e55e12.jpeg";
import background1 from "@/public/images/2a56b7c63130d2845903134898130489.jpeg";
import Button from "@/component/buttonSizes/Button";
import Image from "next/image";
import Link from "next/link";
import routes from "@/helpers/routes";
import imageOne from "@/public/images/494ce16c27af170fce97818f9434cb28.jpeg";
import imageTwo from "@/public/images/13ebb85a226d3f7505a03843514e7484.jpeg";
import imageThree from "@/public/images/955aefec8c2afd912fa5d48b4aa7f185.jpeg";
import shapeFive from "@/public/icon/Group22.png";
import shapeSix from "@/public/icon/Subtract.png";
import shapeSeven from "@/public/icon/leaves 1.png";




export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-start bg-white pb-[80px] w-full">
      <section className="flex h-[90vh] justify-center items-start w-full">
        <ImageBackground imageUrl={background}>
          <div className="flex gap-[11px] flex-col justify-center items-start w-full max-w-[496px]">
            <h2 className="text-white !font-[350] text-[52px] leading-[60px]">
              Your serenity is our mission.
            </h2>
            <p className="text-white text-[18px] leading-[29px]">
              Heaven Spa is your ultimate relaxation destination; we have
              something for everyone. Leveraging energy, frequency, and
              vibration to activate dimensionless potential for electric or
              magnetic information within your body.
            </p>
            <Link href={routes.UserManagement()}>
              <div className="w-[264px] pt-[10px]">
                <Button size="medium">Book Session</Button>
              </div>
            </Link>
          </div>
          <Image
            src={shapeSix}
            alt="image"
            className="hidden sm:flex absolute top-[-70px] left-[950px] w-[299.21px] h-auto rotate-[25deg] object-cover "
          />
          <Image
            src={shapeFive}
            alt="image"
            className="hidden sm:flex absolute top-[229px] left-[850px] w-[269px] h-[269px] object-cover "
          />
        </ImageBackground>
      </section>
      <section className=" relative bg-white flex flex-col justify-center items-start py-[50px]  h-auto w-full ">
        <div className="static siteWapper flex flex-col justify-center items-center w-full at500:px-[72px] my-0 mx-auto">
          <div className="grid grid-cols-3  gap-x-5 gap-y-5 w-full">
            <div className="flex gap-[17px] flex-col justify-center items-start w-full sm:max-w-[344px]">
              <div className="flex w-full h-[466px]">
                <Image
                  src={imageOne}
                  alt="image"
                  className="flex h-auto w-full object-cover "
                />
              </div>
              <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                <h1 className="text-[#212121] text-[26px] leading-[35.52px]">
                  Stress Reduction and Relaxation
                </h1>
                <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
                  A potent resurfacing treatment using powerful exfoliation and
                  renewal techniques to promote smoother, younger looking skin
                  through targeting the signs of ageing and dull or uneven skin
                  tones.
                </p>

                <div className="flex justify-center items-center gap-[17px] ">
                  <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                    $312
                  </h1>
                  <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                  <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                    90Minutes
                  </span>
                </div>

                <Link href="/">
                  <span className="text-[18px] leading-[27px] text-[#2183DF]">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex gap-[17px] flex-col justify-center items-start w-full sm:max-w-[344px]">
              <div className="flex w-full h-[466px]">
                <Image
                  src={imageTwo}
                  alt="image"
                  className="flex h-auto w-full object-cover "
                />
              </div>
              <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                <h1 className="text-[#212121] text-[26px] leading-[35.52px]">
                  Reflexology
                </h1>
                <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
                  Looking after your body isn't just about diets and detox. A
                  luxurious body care ritual can transform the way you feel
                  about your skin and yourself. These therapies use the very
                  best Body products and are designed to do just that.
                </p>

                <div className="flex justify-center items-center gap-[17px] ">
                  <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                    $312
                  </h1>
                  <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                  <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                    90Minutes
                  </span>
                </div>

                <Link href="/">
                  <span className="text-[18px] leading-[27px] text-[#2183DF]">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex gap-[17px] flex-col justify-center items-start w-full sm:max-w-[344px]">
              <div className="flex w-full h-[466px]">
                <Image
                  src={imageThree}
                  alt="image"
                  className="flex h-auto w-full object-cover "
                />
              </div>
              <div className="flex gap-[17px] flex-col justify-center items-start w-full ">
                <h1 className="text-[#212121] !font-[400] text-[26px] leading-[35.52px]">
                  Aroma therapy Massage
                </h1>
                <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
                  Encompassing the most powerful biological actives available
                  from both ‘above and below’ the earth’s surface, Quantum’
                  meticulous attention to detail, pioneering formulas and
                  remarkably transformative results are what truly sets their
                  skincare apart.
                </p>

                <div className="flex justify-center items-center gap-[17px] ">
                  <h1 className="text-[#28A17B] text-[26px] leading-[35.52px]">
                    $312
                  </h1>
                  <hr className="h-[1px] w-[21px] rotate-[-90deg] bg-[#B6B6B5] border-[1px] border-solid border-[#B6B6B5]" />
                  <span className="text-[#00000080] !font-[900] text-[20px] leading-[27.32px]">
                    90Minutes
                  </span>
                </div>

                <Link href="/">
                  <span className="text-[18px] leading-[27px] text-[#2183DF]">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex relative h-[90vh] justify-center items-center w-full">
        <ImageBackgroundTwo
          className="rotate-[-360deg] scale-x-[-1] items-end !overflow-visible "
          imageUrl={background1}
        >
          <div className="flex rotate-[-360deg] scale-x-[-1] gap-[11px] flex-col justify-end items-end w-full max-w-[496px] text-right ">
            <p className="text-white !font-[350] text-[30px] leading-[29px]">
              We firmly believe that there are endless ways to relax here at
            </p>
            <h2 className="text-white !font-[350] text-[47px] leading-[64px]">
              Heaven Spa
            </h2>
            <Link href={routes.UserManagement()}>
              <div className="w-[264px] pt-[10px]">
                <Button size="medium">Book Now</Button>
              </div>
            </Link>
          </div>
          <Image
            src={shapeSeven}
            alt="image"
            className="hidden sm:flex absolute top-[-90px] right-[50px] w-[136px] h-[136px] object-cover "
          />
        </ImageBackgroundTwo>
      </section>
    </main>
  );
}
