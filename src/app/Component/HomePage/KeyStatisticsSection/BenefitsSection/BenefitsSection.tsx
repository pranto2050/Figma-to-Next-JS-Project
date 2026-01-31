import React from "react";
import { FixedTheBiggestAnnoyance } from "./FixedTheBiggestAnnoyance";

export const BenefitsSection = () => {
  return (
    // Add it Section for Mobile: md:px-8 md:py-20
    <section className="relative flex flex-col items-center gap-6 md:gap-7.5 w-full h-autosm:px-6 ">
      <div className="z-2 px-10 flex flex-col items-center gap-2 md:gap-1.25 w-full">
        <h2 className="text-center font-['Helvetica_Now_Display-Bold',Helvetica] font-normal text-5xl sm:text-3xl md:text-6xl lg:text-5xl tracking-[0] leading-tight md:leading-[normal] px-2">
          <span className="font-bold text-black">We Fixed the </span>
          <span className="font-['Helvetica_Now_Display-Regular',Helvetica] text-[#d46a00]">
            Biggest Annoyance
          </span>
          <span className="font-bold text-black"> in Colouring</span>
        </h2>

        <p className="text-center font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] tracking-[0] leading-7 md:leading-10 mt-2 md:mt-0">
          Because your offline break should feel calming, not stressful.
        </p>
      </div>


      <div className="px-10 text-start w-full font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-base sm:text-lg md:text-[20px] lg:text-[22px] text-center tracking-[0] leading-6 md:leading-5.5 px-2">
        <span className="leading-6">
          Colouring is supposed to help you unwind, but thin paper,
          bleed-through, and messy pages usually ruin the moment. <span className="hidden sm:block" />
        </span>
        

        <span className="font-['Helvetica_Now_Display-Medium',Helvetica] font-medium leading-6 block mt-2 md:mt-0">
          <br className="hidden sm:block" />
          We redesigned the entire experience
        </span>

        <span className="leading-6">
          {" "}
          — with thicker pages, smarter layouts, and tools that let you fully
          relax and enjoy your break without worrying about the ink.
        </span>
      </div>

      {/* Bottom decorative image */}
      <div className="w-full px-0 relative -top-70 left-0">
        <FixedTheBiggestAnnoyance />
        <div className="flex w-full justify-center items-center absolute lg:top-[110%] top-[130%] z-10">
          <button className="w-45 text-white md:w-45 h-10 md:h-8.75 hover:outline-[1px] hover:outline-[#ff7f00] bg-[#FF8000] hover:bg-[#FFEAD8]/90 hover:text-[#ff7f00] rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5 transition-colors">
            Shop Vini
          </button>
        </div>
      </div>
    </section>
  );
};
