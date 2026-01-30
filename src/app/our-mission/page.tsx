"use client";

import Image from "next/image";
import Header from "../Component/HeaderSection/Header";
import bookImage from "../../../public/book.png";
import vectorImg from "../../../public/Vector2.png";
import firstArrow from "../../../public/Our Mission Page/Frame 1.png";
import secoundArrow from "../../../public/Our Mission Page/Frame 2.png";
import bookMassage1 from "../../../public/Our Mission Page/USP Card 4.png";
import bookMassage2 from "../../../public/Our Mission Page/USP Card 5.png";
import buttonIcon from "../../../public/Our Mission Page/Icon.png";
import { KeyStatisticsSection } from "./Contant/contant";



const OurMissionPage = () => {
  return (
    <main className="bg-black relative">
      {/* Top Part */}
      <div className="bg-url bg-[url('/Our%20Mission%20Page.png')]">
        <div className="pt-6 md:pt-10 sm:text-white text-white">
          <Header />
        </div>

        <div className="relative pt-8 md:pt-20 flex justify-center items-center gap-2 sm:gap-3 md:gap-5 px-4">
          <div className="hidden sm:block w-10 sm:w-15 md:w-auto">
            <Image src={firstArrow} alt="First arrow" className="w-full" />
          </div>
          <button className="w-35 sm:w-40 md:w-45 text-black h-8.75 sm:h-9.25 md:h-10   bg-[#FFEAD8]   rounded-[100px] border border-solid border-[#FF9E3D] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-sm sm:text-base tracking-[0] leading-5 transition-colors flex items-center justify-center gap-2">
            About Us
            <Image src={buttonIcon} alt="Button icon" className="w-4 h-4" />
          </button>
          <div className="hidden sm:block w-10 sm:w-15 md:w-auto">
            <Image src={secoundArrow} alt="Second arrow" className="w-full" />
          </div>
        </div>

        <section className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-16 md:pb-20 lg:pb-24 bg-[url('/Img/Our%20Mission%20Background.png')] bg-cover bg-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-black/60 uppercase">
            Our Mission
          </p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Discover Our Mission and Values
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/70">
            Minar Ease brings back the simple things that make you feel human
            again — <br /> quiet moments, creativity, and space for your mind to
            rest
          </p>
        </section>
      </div>
      {/* Bool Img and Massage */}
      <div className="relative  flex justify-center items-center  -top-10 md:-top-40 px-4 z-10 pb-8 sm:pb-12 ">
        <Image
          src={bookImage}
          alt="Open book illustration"
          className="w-70 xs:w-70 sm:w-80 md:w-100 lg:w-125 xl:w-225 h-auto"
        />
        <div className="absolute top-2 xs:top-4 sm:top-10 md:top-16 lg:top-20 xl:top-24 flex flex-col sm:flex-row justify-center items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 px-2 sm:px-4">
          <div className="hidden sm:block absolute w-20 xs:w-25 sm:w-30 md:w-40 lg:w-50 xl:w-62.5 right-1 top-1 xs:right-2 xs:top-2 sm:right-8 sm:top-6 md:right-20 md:top-10 lg:right-30 lg:top-10">
            <Image
              src={bookMassage1}
              alt="Book massage 1"
              className="w-full h-auto"
            />
          </div>
          <div className="hidden sm:block absolute w-20 xs:w-25 sm:w-30 md:w-40 lg:w-50 xl:w-62.5 left-1 top-4 xs:left-2 xs:top-6 sm:left-8 sm:top-12 md:left-12 md:top-20 lg:left-20 lg:top-20">
            <Image
              src={bookMassage2}
              alt="Book massage 2"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* Decorative Triangle Accent */}
      <div className="absolute  top-60 xs:top-60 sm:top-40 md:top-52 lg:top-60 flex justify-center items-center w-full pointer-events-none">
        <Image
          src={vectorImg}
          alt="Decorative triangle accent"
          className=" w-auto h-100 xs:h-120 sm:h-150 md:h-180 lg:h-200 xl:h-240 object-contain mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] z-0 opacity-50 sm:opacity-75 md:opacity-100"
          priority
        />
      </div>
      {/* Contant Section */}
      <div className="absolute w-full top-130 xs:top-140 sm:top-160 md:top-150 lg:top-190 z-10">
        <KeyStatisticsSection />
      </div>
    </main>
  );
};

export default OurMissionPage;
