"use client";

import React from "react";
import Header from "../HeaderSection/Header";
import Image from "next/image";
import ellipse2 from "../../../../public/Ellipse.png";
import ellipse1 from "../../../../public/Ellipse 7.png";

import { HeroImageSection } from "../HeroImageSection/HeroImageSection";
export const HeroSection = () => {
  return (
    <div
      className="hero-container bg-cover bg-center h-100% pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-20 sm:pb-24 md:pb-32 lg:pb-40"
      style={{
        backgroundImage: "url(/Img/Home%20Background2.png)",
      }}
    >
      <div className="text-black">
        <Header />
      </div>
      <div className="">
        <HeroImageSection />
      </div>

      <div className="absolute top-10 left-0 w-full h-full z-20">
        <Image
          src={ellipse2}
          alt="Decorative ellipse"
          className="absolute w-[200px]  lg:w-[40%] top-150 lg:top-10 md:top-10 lg:top-10 xl:md:top-10 left-0 "
          priority
        />
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
