import React from "react";
import Image from "next/image";
import handFiger from "../../../../public/Our Mission Page/M2.png";
import colorFigger from "../../../../public/Our Mission Page/M3.png";
import { KeyStatisticsSection as FrequentlyAskedQuestions } from "../../products/frequentlyAskedQuestions/frequentlyAskedQuestions";
import { Experience } from "../Experience/Experience";
import vectorImg from "../../../../public/Our Mission Page/Ellipse 7.png";
// No longer need to import BlackAndDotImg if using it in CSS background

export const KeyStatisticsSection = () => {
  return (
    <section
  className="
    relative
    w-full
    min-h-screen
    h-auto
    pt-8 
    sm:pt-10
    pb-20
    z-10
    bg-no-repeat
    bg-center
    bg-cover
    rounded-t-[100px]
  "
  style={{
    backgroundImage: "url('/Our%20Mission%20Page/Main%20Background.png')",
  }}
>
  {/* ================= WATERMARK ================= */}
  <div className="absolute -top-12 md:-top-25 left-0 w-full h-75 md:h-150 overflow-hidden pointer-events-none">
    <div
      className="absolute top-5 left-0 w-full whitespace-nowrap"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 70%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <span
        className="ml-5 text-[120px] sm:text-[180px] md:text-[250px] lg:text-[300px] font-bold block"
        style={{
          fontFamily: "'Helvetica Now Display', Helvetica",
          backgroundImage:
            "linear-gradient(150deg, rgba(255,128,0,1) 0%, rgba(255,128,0,0.1) 50%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.5,
        }}
      >
        About Us
      </span>
    </div>
  </div>

  {/* ================= MAIN CONTENT ================= */}
  <div className="relative text-black z-10 px-8 sm:px-6 md:px-12 lg:px-20 flex flex-col w-full">

    {/* ================= MISSION ================= */}
    <div className="relative">
      <div className="flex flex-col gap-5 mt-10">
        <h1 className="text-black text-5xl md:text-[120px] font-bold">
          Our <span className="text-[#D46A00]"><i>Mission</i></span>
        </h1>

        <p className="text-[22px] md:w-150">
          to help people reclaim their time, attention, and peace of mind in a
          world that never stops demanding it.
        </p>
      </div>

      {/* Decorative Image */}
      <div className="absolute w-125 top-40 -left-12.5 md:w-237.5 md:left-125 md:-top-40 -z-10">
        <Image src={handFiger} alt="Hand Figure" className="w-full h-auto" />
      </div>

      <div className="mt-90 md:mt-16 md:w-175 space-y-4">
        <p>
          Minar Ease creates thoughtfully designed offline tools that encourage
          slowing down, breathing deeply, and reconnecting with the present
          moment.
        </p>
        <p>
          No endless notifications. No pressure to perform. Just small,
          intentional breaks that help the mind rest and the hands create.
        </p>
        <p>
          We believe calm isn’t something you download — it’s something you
          practice, one quiet moment at a time.
        </p>
      </div>
    </div>

    {/* ================= VISION ================= */}
    <div className="relative flex justify-end mt-32">
      <div className="w-full max-w-2xl text-right">
        <div className="flex flex-col gap-5">
          <h1 className="text-black text-5xl md:text-[120px] font-bold">
            Our <span className="text-[#D46A00]"><i>Vision</i></span>
          </h1>

          <p className="text-2xl">
            We envision a world where being offline isn’t an escape — it’s a
            choice people make every day to feel better, think clearer, and live
            more fully.
          </p>
        </div>

        {/* Decorative Image */}
        <div className="absolute w-100 bottom-30 md:w-150 md:-left-20 md:-bottom-40 -z-10">
          <Image src={colorFigger} alt="Color Figure" className="w-full h-auto" />
        </div>

        <div className="mt-50 md:mt-10 space-y-4">
          <p>
            Minar Ease exists to redefine rest in the modern age: where
            creativity replaces scrolling, stillness replaces noise, and real
            moments matter more than digital ones.
          </p>
          <p>
            Our vision is to build a global movement around mindful offline
            living — proving that life doesn’t get smaller when you unplug, it
            gets richer.
          </p>
        </div>
        
      </div>
      
    </div>
      {/* ================= BACKGROUND IMAGE ================= */}
        <div className="absolute top-250 md:top-160 left-0 z-20">
          <img className="md:h-[900px]" src={vectorImg.src} alt="Decorative Vector" />
        </div>
{/* Gride Laout */}
    <Experience />

    {/* ================= FAQ ================= */}
    <div className="relative flex justify-center mt-40">
      <FrequentlyAskedQuestions />
    </div>

  </div>
</section>

  );
};
