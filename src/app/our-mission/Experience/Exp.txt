"use client";

import React, { useState } from "react";
import Image from "next/image";

import div1CoverImg from "../../../../public/Our Mission Page/div1.png";
import div2CoverImg from "../../../../public/Our Mission Page/div2.png";
import div3CoverImg from "../../../../public/Our Mission Page/div3.png";
import div4CoverImg from "../../../../public/Our Mission Page/div4.png";
import div5CoverImg from "../../../../public/Our Mission Page/div5.png";
import innerDevLeftImg from "../../../../public/Our Mission Page/divLeftImg.png";
import innerDevright from "../../../../public/Our Mission Page/div img 1.png";

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative w-full z-10">
        <div
          className="w-full flex flex-col items-center justify-center pt-20 px-6 lg:px-20"
          style={{
            backgroundImage: "url('/Our Mission Page/Black and Dot img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center gap-10 justify-center flex-col">
            <button className="w-[70%]  md:w-[250px] h-[40px] md:h-[35px] bg-[#ffead7] hover:bg-[#ffead7]/90 text-black rounded-[100px] border border-solid border-[#ff9e3d] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5 transition-colors">
          What makes us unique?
        </button>
        <h1 className="text-white font-bold text-5xl lg:text-4xl text-center">
            We Redesigned the Entire <i><span className="text-[#FF8000]"> Experience </span></i>
          </h1>
          </div>
          
          

          <section className="w-full py-10">

            {/* ================================================= */}
            {/* =============== DESKTOP DESIGN ================== */}
            {/* ================================================= */}
            <div className="hidden lg:grid gap-4 max-w-7xl mx-auto grid-cols-4 auto-rows-[250px]">

              {/* div1 */}
              <div
                className="row-start-1 row-end-3 col-start-1 col-end-2 rounded-2xl p-6 flex flex-col justify-end text-white"
                style={{ backgroundImage: `url(${div1CoverImg.src})`, backgroundSize: "cover" }}
              >
                <h1 className="text-2xl font-semibold">Protective Sheet Included</h1>
                <p className="mt-2 text-sm opacity-80">
                  Use markers with confidence, no mess underneath.
                </p>
              </div>

              {/* div2 */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ backgroundImage: `url(${div2CoverImg.src})`, backgroundSize: "cover" }}
              >
                <h1 className="text-4xl font-bold">200</h1>
                <h2 className="text-lg font-semibold mt-1">Gsm Thick Paper</h2>
                <p className="mt-2 text-sm opacity-80">
                  Premium pages with zero bleed-through.
                </p>
              </div>

              {/* div3 */}
              <div
                className="col-start-3 col-end-5 rounded-2xl p-6 flex gap-6 items-center text-white"
                style={{ backgroundImage: `url(${div3CoverImg.src})`, backgroundSize: "cover" }}
              >
                <img src={innerDevLeftImg.src} className="w-50 h-50 rounded-lg" />
                <div>
                  <h1 className="text-xl font-semibold">Single-Sided Pages</h1>
                  <p className="mt-2 text-sm opacity-80">
                    Printed on one side only.
                  </p>
                </div>
              </div>

              {/* div4 */}
              <div
                className="col-start-2 col-end-4 rounded-2xl p-6 text-white"
                style={{ backgroundImage: `url(${div4CoverImg.src})`, backgroundSize: "cover" }}
              >
                <h1 className="text-2xl font-semibold">
                  Modern, Gender-Neutral Illustrations
                </h1>
                <p className="mt-2 text-sm opacity-80">
                  Clean, contemporary artwork for everyone.
                </p>
              </div>

              {/* div5 */}
              <div
                className="rounded-2xl p-6 flex flex-col items-center gap-4 text-white"
                style={{ backgroundImage: `url(${div5CoverImg.src})`, backgroundSize: "cover" }}
              >
                <img src={innerDevright.src} className="w-30 h-30" />
                <div className="text-center">
                  <h1 className="text-lg font-semibold">Made for Quiet Breaks</h1>
                  <p className="text-sm opacity-80">Unplug and enjoy.</p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* =============== MOBILE DESIGN =================== */}
            {/* ================================================= */}
            <div className="grid lg:hidden grid-cols-2 gap-4 max-w-7xl mx-auto auto-rows-[180px]">

              {/* div1 */}
              <div
                className="row-span-2 rounded-2xl p-6 flex flex-col justify-end text-white"
                style={{ backgroundImage: `url(${div1CoverImg.src})`, backgroundSize: "cover" }}
              >
                <h1 className="text-2xl font-semibold">Protective Sheet Included</h1>
                <p className="mt-2 text-sm opacity-80">No mess underneath.</p>
              </div>

              {/* div2 */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ backgroundImage: `url(${div2CoverImg.src})`, backgroundSize: "cover" }}
              >
                <h1 className="text-4xl font-bold">200</h1>
                <h2 className="text-lg font-semibold mt-1">Gsm Paper</h2>
              </div>

              {/* div5 */}
              <div
                className="rounded-2xl p-6 flex flex-col items-center gap-4 text-white"
                style={{ backgroundImage: `url(${div5CoverImg.src})`, backgroundSize: "cover" }}
              >
                <img src={innerDevright.src} className="w-20 h-20" />
                <h1 className="text-sm font-semibold text-center">
                  Made for Quiet Breaks
                </h1>
              </div>

              {/* div3 */}
              <div
                className="col-span-2 rounded-2xl p-6 flex gap-4 items-center text-white"
                style={{ backgroundImage: `url(${div3CoverImg.src})`, backgroundSize: "cover" }}
              >
                <img src={innerDevLeftImg.src} className="w-30 h-30" />
                <div>
                  <h1 className="text-lg font-semibold">Single-Sided Pages</h1>
                </div>
              </div>

              {/* div4 */}
              <div
                className="col-span-2 rounded-2xl p-6 text-white"
                style={{ backgroundImage: `url(${div4CoverImg.src})`, backgroundSize: "cover" }}
              >
                <h1 className="text-xl font-semibold">
                  Modern Illustrations
                </h1>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};
