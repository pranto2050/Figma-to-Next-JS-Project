import React from "react";
import Image from "next/image";
import uspCard1 from "../../../../../../public/USP Card 1.png";
import uspCard2 from "../../../../../../public/USP Card 2.png";
import uspCard3 from "../../../../../../public/USP Card 3.png";
import uspCard4 from "../../../../../../public/USP Card 4.png";
import uspCard5 from "../../../../../../public/USP Card 5.png";

export const FixedTheBiggestAnnoyance = () => {
  return (
    <div className="relative w-full mt-8 lg:mt-12 flex justify-center items-center">
      <div className="relative w-full max-w-[1200px] h-[520px] sm:h-[640px] md:h-[780px] lg:h-[900px] flex items-center justify-center top-50">
        {/* Center Image */}
        <img
          src="/Img/book-image-section.png"
          alt="Book image section"
          className="relative z-1 w-[150%] md:w-[90%] sm:w-[100%] lg:top-[-100px] max-w-[1500px]  h-auto object-contain px-4 sm:px-6"
        />

        {/* USP Cards arranged in circle around center image */}

        {/* Protective sheet included   lg:w-[280px]*/}
        <Image
          src={uspCard1}
          alt="USP Card 1"
          className=" md:block top-[350px] left-[100px] absolute z-10 md:top-[80px] md:top-[100px]  md:right-[40px] md:right-[60px] lg:top-[150px] lg:left-[850px] -translate-x-1/2 w-[180px] md:w-[220px]  h-auto"
        />
        {/* Single-sided artwork  lg:w-[280px] */}
        <Image
          src={uspCard2}
          alt="USP Card 2"
          className=" md:block absolute left-[170px] top-[200px] md:top-[280px] md:top-[340px] md:right-[50px] md:right-[75px] lg:top-[300px] lg:left-[780px]  w-[180px] md:w-[220px]  h-auto z-10"
        />

        {/* Made for quiet breaks  lg:w-[280px] */}
        <Image
          src={uspCard5}
          alt="USP Card 3"
          className="hidden md:block absolute bottom-[100px] lg:right-[350px]  lg:bottom-[280px] right-[130px] md:right-[190px] md:bottom-[125px]  w-[180px] md:w-[220px]  h-auto z-10"
        />

        {/* Modern, gender-neutral illustrations  lg:w-[280px]*/}
        <Image
          src={uspCard4}
          alt="USP Card 4"
          className="hidden md:block absolute bottom-[120px] md:bottom-[160px] md:w-[220px] lg:bottom-[350px] lg:left-[250px] left-[80px] md:left-[115px]  w-[180px] h-auto z-10"
        />
        {/*  Thick 200gsm pages   lg:w-[280px] */}
        <Image
          src={uspCard3}
          alt="USP Card 5"
          className=" md:block absolute top-[120px] md:top-[160px] lg:top-[100px] lg:left-[300px] left-[50px] md:left-[75px] w-[180px] md:w-[220px]  h-auto z-10"
        />
      </div>
    </div>
  );
};
