"use client";

import ImageBackground from "@/component/image-prop/imageBackground.component";
import ImageBackgroundThree from "@/component/image-prop/imageBackgroundthree.component";
import background from "@/public/images/a6f90d73b917435a50e4e6ea8123419d.jpeg";
import background1 from "@/public/images/95f4e2d277af892c3b0a30a7e3223311.jpeg";
import Button from "@/component/buttonSizes/Button";
import Image from "next/image";
import Link from "next/link";
import routes from "@/helpers/routes";
import shapeFive from "@/public/icon/Group22.png";
import shapeOne from "@/public/icon/branch-with-leaves 2.png";
import shapeTwo from "@/public/icon/leaves 1.png";
import about1 from "@/public/images/about-1.jpeg";
import about2 from "@/public/images/about-2.jpeg";
import shapeThree from "@/public/icon/Group.png";
import shapeFort from "@/public/icon/branch-with-leaves 3.png";
import NewsletterForm from "@/component/form/newletter.component";
import VideoPlayer from "@/component/video/videoplayer.component";

const AboutUsPage = () => {
  return (
    <main className="flex flex-col bg-white justify-center items-center w-full ">
      <section className="flex  sm:h-[100vh] justify-center items-start w-full">
        <div className="flex !pt-[160px] siteWapper">
          <ImageBackground
            className="rounded-[40px] overflo"
            imageUrl={background}
          >
            <div className="flex gap-[11px] flex-col justify-center items-start w-full max-w-[496px]">
              <h1 className="text-white font-[900] text-[52px] leading-[60px]">
                About Heaven Spa
              </h1>
              <p className="text-white text-[18px] leading-[29px]">
                Getting a massage, on a regular basis is one of the healthiest
                things you can do for yourself. Your well-being deserves the top
                spot. Heaven Spa is designed to provide rest and help you
                experience the unbounded state of rest
              </p>
              <Link href={routes.UserManagement()}>
                <div className="w-[264px] pt-[10px]">
                  <Button size="medium">Book a Session</Button>
                </div>
              </Link>
            </div>

            <Image
              src={shapeFive}
              alt="image"
              className="hidden sm:flex absolute top-[199px] right-[10px] w-[161px] h-[155px] object-cover "
            />
          </ImageBackground>
        </div>
      </section>
      <section className=" relative bg-white flex flex-col justify-center items-start  h-auto w-full ">
        <div className="static siteWapper flex flex-col justify-center items-center w-full at500:!py-[60px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col gap-[30px] justify-center items-center w-full">
            <div className="flex flex-col justify-center w-full text-center pb-[50px] sm:max-w-[594px]">
              <p className="text-[#28A17B] text-[26px] leading-[35.52px]">
                Who we are
              </p>
              <p className="text-[18px] leading-[27px] text-[#000000]">
                All of our treatments are designed to leave you feeling like
                your very best self. All of our spa therapies are for residents
                only.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-start w-full ">
              <div className="flex z-20 gap-[17px] flex-col justify-center items-start w-full sm:max-w-[460px] ">
                <p className="text-[#000000] text-[26px] leading-[35.52px]">
                  Thermal experience and <br /> relaxation
                </p>
                <div className="flex gap-5 flex-col justify-center w-full">
                  <p className="text-[18px]  leading-[27px] text-[#000000]">
                    This luxurious full body therapy combines the comfort of a
                    relaxing massage with the function of a gentle body
                    exfoliation, delivering a purifying sensation like no other.
                    We find that the best results are seen when combined with
                    heat and steam. Inspired by the stunning landscapes of the
                    Lake District and the purifying elements of our natural
                    surroundings, is lavishly contemporary with relaxation and
                    well-being at its heart
                  </p>
                  <p className="text-[18px]  leading-[27px] text-[#000000]">
                    Committed to giving our guests a true luxury massage and spa
                    experience, many aspects of our spa incorporate natural
                    elements from the World Heritage Site, including our
                    treatments, relaxation and thermal experiences, and our
                    bespoke product collection, Pure Alchemy. But, if this isn’t
                    already enough to help you de-stress and unwind, we’re sure
                    that the views of the breathtaking scenery will do it.
                  </p>
                  <p className="text-[18px]  leading-[27px] text-[#000000]">
                    From the thoughtfully designed ‘Spa Journey’, to the
                    delicious light bites and sweet treats in our Spa Deli,
                    you’ll feel revival like never before. Pull on your cotton,
                    and get ready to begin your luxury spa experience.
                  </p>
                </div>
              </div>
              <div className=" relative flex gap-5 flex-col justify-center items-center w-full">
                <div className="hidden sm:flex z-0 justify-between absolute top-[-99px] w-full max-w-[420px] h-auto">
                  <Image
                    src={shapeOne}
                    alt="image"
                    className=" w-[155px] h-[155px] object-cover "
                  />

                  <Image
                    src={shapeTwo}
                    alt="image"
                    className="w-[136px] h-[136px] object-cover "
                  />
                </div>
                <div className="flex w-full h-[300px]">
                  <Image
                    src={about1}
                    alt="Relaxing spa environment at Heaven Spa in Iowa with soft lighting and candles"
                    className="flex h-auto w-full object-cover "
                  />
                </div>
                <div className="flex w-full h-[300px]">
                  <Image
                    src={about2}
                    alt="Therapist performing a soothing massage on a client at Heaven Spa in Iowa"
                    className="flex h-auto w-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="siteWapper">
        <VideoPlayer />
      </div>
      <section className=" relative bg-white flex flex-col justify-center items-start   h-auto w-full ">
        <div className="static siteWapper flex flex-col justify-center items-center w-full at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col gap-[10px] justify-center items-center w-full">
            <p className="text-[#28A17B] text-[26px] leading-[35.52px]">
              ABOUT US
            </p>
            <div className="flex gap-5 flex-col justify-center w-full text-center pb-[50px] sm:max-w-[406px]">
              <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
                We are dedicated to maintaining the highest standards of ethical
                practice and privacy. Our services are delivered in a tranquil
                environment with space to breathe freely and relax in your body.
              </p>
              <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
                We partner with emerging technology companies to curate state of
                the art offerings that empower your highest potential
              </p>
              <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
                We understand that humans are more than the sum of their parts.
                What sets our services apart is that they operate in a paradigm
                of biophysics by promoting deep cellular resonance and
                heart-brain coherence.
              </p>
              <p className="text-[18px] leading-[27px] text-[#4B4B4B]">
                We combines the best of our products and techniques to deliver a
                bespoke Heaven Spa experience.
              </p>
            </div>
            <div className=" hidden sm:flex z-0 justify-between absolute top-[199px] w-full max-w-[820px] h-auto">
              <Image
                src={shapeFort}
                alt="image"
                className=" w-[155px] h-[155px] object-cover "
              />

              <Image
                src={shapeThree}
                alt="image"
                className="w-[155px] h-[155px] object-cover "
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex relative  justify-center items-start w-full pb-[50px] sm:pb-[160px]"
        id="form"
      >
        <ImageBackgroundThree className="sm:!h-[500px] " imageUrl={background1}>
          <div className="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full">
            <div className="flex flex-col gap-[11px] w-full max-w-[496px]">
              <p className="text-white !font-[350] text-[52px] leading-[60px]">
                Read to make your first booking?
              </p>

              <Link href={routes.UserManagement()}>
                <div className="w-[264px] pt-[10px]">
                  <Button size="medium">Get Started</Button>
                </div>
              </Link>
            </div>
            <div className="flex relative sm:bottom-[-78px] justify-center items-center w-full max-w-[444px]">
              <NewsletterForm />
            </div>
          </div>
        </ImageBackgroundThree>
      </section>
    </main>
  );
};

export default AboutUsPage;
