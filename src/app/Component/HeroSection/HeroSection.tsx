"use client";

import React from "react";
import Header from "../HeaderSection/Header";
import Image from "next/image";
import ellipse2 from "../../../../public/Ellipse.png";
import ellipse1 from "../../../../public/Ellipse 7.png";
import mainBackground from "../../../../public/homePageBackground.png";
import figger1 from "../../../../public/M4.png";
import figger2 from "../../../../public/M5.png";

import { HeroImageSection } from "../HeroImageSection/HeroImageSection";
export const HeroSection = () => {
  return (
    <div
      className="hero-container relative bg-cover bg-center h-100% pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-20 sm:pb-24 md:pb-32 lg:pb-40 "
      style={{
        backgroundImage: `url(${mainBackground.src})`,
      }}>
      <div className="text-black sticky  z-50">
        <Header />
      </div>
      {/* Add figger Section Start */}
      <div className="absolute inset-0 pointer-events-none z-1 h-full overflow-hidden">
        {/* Figger 1 – top left */}
        <div className="absolute md:-top-10 left-0">
          <Image
            src={figger1}
            alt="Figger 1"
            width={922}
            height={259}
            className="w-full max-w-[622px] object-contain object-left opacity-30"
            priority
          />
        </div>
        {/* Figger 2 – bottom right */}
        <div className="absolute md:top-130 md:bottom-0 md:-right-40">
          <Image
            src={figger2}
            alt="Figger 2"
            width={658}
            height={582}
            className="w-full max-w-[722px] object-contain object-right opacity-30"
            priority
          />
        </div>
      </div>
    {/* Figger Section End */}
    {/* Hero Image Section */}
      <div className="">
        <HeroImageSection />
      </div>
      <div className="absolute top-10 left-0 w-full z-20">
        <Image
          src={ellipse2}
          alt="Decorative ellipse"
          className="absolute w-[200px]  lg:w-[40%] top-150 lg:top-10 md:top-10 lg:top-10 xl:md:top-10 left-0 "
          priority/>
        <Image
          src={ellipse1}
          alt="Decorative ellipse"
          className="absolute top-50 right-0 lg:w-[70%] sm:w-[50%] md:w-[45%]"
          priority
        />
      </div>
    </div>
  );
};
