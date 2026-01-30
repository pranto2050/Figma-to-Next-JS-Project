import React from "react";
import { RightContentSection } from "./RightContentSection";
import { LeftContentSection } from "./LeftContentSection";
import {BenefitsSection} from "./BenefitsSection/BenefitsSection";
import { ProductShowcaseSection } from "../KeyStatisticsSection/ProductShowcaseSection/ProductShowcaseSection";
import { CustomerTestimonialsSection } from "./CustomerTestimonialsSection/CustomerTestimonialsSection";
// import { TestimonialsHeadlineSection } from "../TestimonialsHeadlineSection/TestimonialsHeadlineSection";

export const KeyStatisticsSection = () => {
  return (
    <section 
      className="relative bg-repeat-y pt-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#ffead8]"
      style={{ backgroundImage: "url('/Main Background.png')" }}
    >
      {/* Watermark */}
      <div className="absolute -top-12.5 md:-top-25 left-0 w-full h-75 md:h-150 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 70%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          
          <span
            className="text-[120px] sm:text-[180px] md:text-[250px] lg:text-[350px] font-bold block w-full"
            style={{ 
              fontFamily: "'Helvetica Now Display', Helvetica",
              backgroundImage: "linear-gradient(150deg, rgba(255, 128, 0, 1) 0%, rgba(255, 128, 0, 0.1) 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",              opacity: 0.5,            }}
          >
            7Hours
          </span>
        </div>
      </div>
      
        <div className="flex justify-center mb-3 md:mb-10">
            <button className="w-[40%] md:w-52.5 h-10 md:h-8.75 outline-[1px] outline-[#ff7f00] bg-[#FFEAD8] hover:bg-[#ff7f00]/90 text-black rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5 transition-colors">
            A Raising Issue
            </button>
        </div>

        <div className="flex flex-col w-full items-start gap-4 md:gap-5">
        <div>
        <h2 className="relative self-stretch font-['Helvetica_Now_Display-Bold',Helvetica] font-normal text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight md:leading-[normal]">
          <span className="font-bold text-black">Almost </span>
          <span className="font-['Helvetica_Now_Display-Regular',Helvetica] text-[#d46a00]">
            7 Hours
          </span>
        </h2>
        </div>
        <div>
          <p className="mt-4 md:mt-1 relative self-stretch font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-7 md:leading-10">
            That&apos;s how long most of us spend <br className="hidden sm:block" />
            in front of screens each day
          </p>
        </div>
      </div>

          <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row w-full justify-between gap-6 lg:gap-16.25 mb-6 md:mb-10">
            <LeftContentSection />
            <RightContentSection />
          </div>
          <div className="flex justify-center">
            <button className="w-full md:w-52.5 h-10 md:h-11.25 bg-[#ff7f00] hover:bg-[#ff7f00]/90 rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-5 transition-colors">
            Explore the Collection
            </button>
          </div>

          <div className="mt-8 md:mt-30">
            <ProductShowcaseSection/>
          </div>

          <div className="flex justify-center mt-16 md:mt-40 mb-3 md:mb-10">
            <button className="w-50 md:w-52.5 h-10 md:h-8.75 outline-[1px] outline-[#ff7f00] bg-[#FFEAD8] hover:bg-[#ff7f00]/90 text-black rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5 transition-colors">
            Why choose us?
            </button>
        </div>

          <div className="mt-8 md:top-10">
            <BenefitsSection/>
          </div>

          <div className="">
            <CustomerTestimonialsSection/>
          </div>
    </section>
  );
};
