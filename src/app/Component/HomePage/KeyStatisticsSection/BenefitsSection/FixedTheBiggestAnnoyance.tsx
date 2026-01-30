import React from "react";
import Image from "next/image";
import uspCard1 from "../../../../../../public/USP Card 1.png";
import uspCard2 from "../../../../../../public/USP Card 2.png";
import uspCard3 from "../../../../../../public/USP Card 3.png";
import uspCard4 from "../../../../../../public/USP Card 4.png";
import uspCard5 from "../../../../../../public/USP Card 5.png";
import bookimg from "../../../../../../public/Img/book-image-section.png";

export const FixedTheBiggestAnnoyance = () => {
  return (
    <div className="relative w-full  lg:mt-12 flex justify-center items-center">
      <div className="relative w-full  h-[520px] sm:h-[640px] md:h-[780px] lg:h-[900px] flex items-center justify-center top-50 overflow-hidden">
        {/* Center Image */}
        <Image
          src={bookimg}
          alt="Book image section"
          width={1400}
          height={1000}
          className="relative z-1 h-[1200px] sm:w-[900px] sm:h-[1100px] md:w-[800px] md:h-[1000px] lg:w-[700px] lg:h-[900px] lg:top-[-100px] object-contain px-4 sm:px-6 scale-150"
        />
        {/* USP Cards arranged in circle around center image */}
        {/* Protective sheet included   lg:w-[280px]*/}
        <Image
          src={uspCard1}
          alt="USP Card 1"
          width={180}
          height={180}
          className=" md:block top-[350px] left-[100px] absolute z-10 md:top-[80px] md:top-[100px]  md:right-[40px] md:right-[60px] lg:top-[150px] lg:left-[850px] -translate-x-1/2 w-[180px] md:w-[220px]  h-auto"
        />
        {/* Single-sided artwork  lg:w-[280px] */}
        <Image
          src={uspCard2}
          alt="USP Card 2"
          width={180}
          height={180}
          className=" md:block absolute left-[220px] top-[200px] md:top-[280px] md:top-[340px] md:right-[50px] md:right-[75px] lg:top-[300px] lg:left-[820px]  w-[180px] md:w-[220px]  h-auto z-10"
        />

        {/* Made for quiet breaks  lg:w-[280px] */}
        <Image
          src={uspCard5}
          alt="USP Card 3"
          width={180}
          height={180}
          className="hidden md:block absolute bottom-[100px] right-[130px]   md:right-[390px] md:bottom-[125px] lg:right-[410px]  lg:bottom-[280px]  w-[180px] md:w-[220px]  h-auto z-10"
        />

        {/* Modern, gender-neutral illustrations  lg:w-[280px]*/}
        <Image
          src={uspCard4}
          alt="USP Card 4"
          width={180}
          height={180}
          className="hidden md:block absolute bottom-[120px] left-[80px] md:bottom-[160px] md:w-[220px] lg:bottom-[350px] lg:left-[300px]  md:left-[115px]  w-[180px] h-auto z-10"
        />
        {/*  Thick 200gsm pages   lg:w-[280px] */}
        <Image
          src={uspCard3}
          alt="USP Card 5"
          width={180}
          height={180}
          className=" md:block absolute top-[90px] left-[20px] w-[210px] md:top-[160px] md:left-[75px]  md:w-[220px]  lg:top-[100px] lg:left-[300px]   h-auto z-10"
        />
      </div>
    </div>
  );
};
