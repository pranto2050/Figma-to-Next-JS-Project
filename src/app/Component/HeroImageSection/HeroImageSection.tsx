"use client";

import React from "react";

/** Size/position config per breakpoint */
type LayoutSize = {
  top: number;
  left: number;
  width: number;
  height: number;
  rotation: number;
};

type MobileSize = {
  width: number;
  height: number;
  rotation: number;
};

type HeroImage = {
  src: string;
  alt: string;
  zIndex: number;
  /** Mobile: stacked centered cards (small screens) */
  mobile: MobileSize;
  /** Tablet: md breakpoint (768px–1023px) */
  tablet: LayoutSize;
  /** Desktop: lg breakpoint (1024px+) */
  desktop: LayoutSize;
};

const images: HeroImage[] = [
  {
    src: "/Img/rectangle-8.png",
    alt: "Rectangle",
    zIndex: 1,
    mobile: { width: 200, height: 200, rotation: -10 },
    tablet: { top: 24, left: -71, width: 245, height: 246, rotation: -10.55 },
    desktop: { top: 28, left: -82, width: 282, height: 283, rotation: -10.55 },
  },
  {
    src: "/Img/rectangle-7.png",
    alt: "Rectangle",
    zIndex: 2,
    mobile: { width: 200, height: 200, rotation: -5 },
    tablet: { top: 25, left: 102, width: 245, height: 246, rotation: -10 },
    desktop: { top: 29, left: 117, width: 282, height: 283, rotation: -10 },
  },
  {
    src: "/Img/rectangle-6.png",
    alt: "Rectangle",
    zIndex: 3,
    mobile: { width: 200, height: 200, rotation: 0 },
    tablet: { top: 40, left: 266, width: 230, height: 230, rotation: -10 },
    desktop: { top: 46, left: 306, width: 265, height: 265, rotation: -10 },
  },
  {
    src: "/Img/rectangle-5.png",
    alt: "Rectangle",
    zIndex: 4,
    mobile: { width: 200, height: 200, rotation: 5 },
    tablet: { top: 3, left: 415, width: 245, height: 246, rotation: 0 },
    desktop: { top: 3, left: 477, width: 282, height: 283, rotation: 0 },
  },
  {
    src: "/Img/rectangle-4.png",
    alt: "Rectangle",
    zIndex: 3,
    mobile: { width: 200, height: 200, rotation: 10 },
    tablet: { top: -4, left: 546, width: 245, height: 246, rotation: 10 },
    desktop: { top: -5, left: 628, width: 282, height: 283, rotation: 10 },
  },
  {
    src: "/Img/rectangle-3.png",
    alt: "Rectangle",
    zIndex: 2,
    mobile: { width: 200, height: 200, rotation: -8 },
    tablet: { top: 6, left: 706, width: 245, height: 246, rotation: 10 },
    desktop: { top: 7, left: 812, width: 282, height: 283, rotation: 10 },
  },
  {
    src: "/Img/rectangle-2.png",
    alt: "Rectangle",
    zIndex: 1,
    mobile: { width: 200, height: 200, rotation: 12 },
    tablet: { top: -1, left: 867, width: 245, height: 246, rotation: 10.55 },
    desktop: { top: -1, left: 997, width: 282, height: 283, rotation: 10.55 },
  },
];

export const HeroImageSection = () => {
  return (
    <section className="flex mt-10 flex-col w-full max-w-[1196px] rounded-[30px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 items-center gap-6 sm:gap-8 md:gap-[30px] mx-auto px-4 md:px-10 overflow-visible z-20">
      <header className="flex flex-col items-center justify-center w-full mt-[-1.00px]">
        <h1 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-black text-[28px] sm:text-[32px] md:text-[42px] lg:text-[50px] text-center tracking-[0] leading-[38px] sm:leading-[45px] md:leading-[60px] lg:leading-[70px]">
          Life Feels Better Offline
        </h1>
        <p className="font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-center tracking-[0] leading-[24px] sm:leading-[30px] md:leading-[40px] lg:leading-[50px] mt-2">
          Tools designed to help you slow down, breathe, and reconnect with your
          real life
        </p>
      </header>

      {/* Mobile: stacked centered – uses image.mobile */}
      <div className="md:hidden relative w-full flex items-center justify-center h-[280px] sm:h-[300px] my-6">
        {images.map((image, index) => {
          const isTopImage =
            image.zIndex === Math.max(...images.map((img) => img.zIndex));
          const m = image.mobile;
          return (
            <img
              key={index}
              className="absolute rounded-[25px] object-cover transition-all duration-300 sm:!w-[220px] sm:!h-[220px]"
              style={{
                zIndex: image.zIndex,
                width: m.width,
                height: m.height,
                transform: `translate(-50%, -50%) rotate(${m.rotation}deg)`,
                left: "50%",
                top: "50%",
                boxShadow: isTopImage
                  ? "0 25px 50px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.15)"
                  : "0 12px 24px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.1)",
              }}
              alt={image.alt}
              src={image.src}
            />
          );
        })}
      </div>

      {/* Tablet: md–lg – percentage-based so it scales and never clips */}
      <div className="hidden md:flex lg:hidden relative w-full items-center justify-center py-8 overflow-visible">
        <div
          className="relative w-full max-w-[1195.66px] mx-auto overflow-visible"
          style={{ aspectRatio: "1195.66 / 331.59" }}
        >
          {(() => {
            const designW = 1195.66;
            const designH = 331.59;
            const positions = images.map((img) => ({
              left: img.tablet.left,
              right: img.tablet.left + img.tablet.width,
            }));
            const minLeft = Math.min(...positions.map((p) => p.left));
            const maxRight = Math.max(...positions.map((p) => p.right));
            const groupCenterPct = ((minLeft + maxRight) / 2 / designW) * 100;
            const centerOffsetPct = 50 - groupCenterPct;

            return images.map((image, index) => {
              const t = image.tablet;
              const leftPct = (t.left / designW) * 100 + centerOffsetPct;
              const widthPct = (t.width / designW) * 100;
              const topPct = (t.top / designH) * 100;
              const heightPct = (t.height / designH) * 100;
              return (
                <img
                  key={index}
                  className="absolute rounded-[25px] object-cover shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                  style={{
                    zIndex: image.zIndex,
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    width: `${widthPct}%`,
                    height: `${heightPct}%`,
                    transform: `rotate(${t.rotation}deg)`,
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.08)",
                  }}
                  alt={image.alt}
                  src={image.src}
                />
              );
            });
          })()}
        </div>
      </div>

      {/* Desktop: lg+ – percentage-based so it scales on all screen sizes */}
      <div className="hidden lg:flex relative w-full items-center justify-center py-8 overflow-visible">
        <div
          className="relative w-full max-w-[1376px] mx-auto overflow-visible"
          style={{ aspectRatio: "1376 / 382" }}
        >
          {(() => {
            const designW = 1376;
            const designH = 382;
            const positions = images.map((img) => ({
              left: img.desktop.left,
              right: img.desktop.left + img.desktop.width,
            }));
            const minLeft = Math.min(...positions.map((p) => p.left));
            const maxRight = Math.max(...positions.map((p) => p.right));
            const groupCenterPct = ((minLeft + maxRight) / 2 / designW) * 100;
            const centerOffsetPct = 50 - groupCenterPct;

            return images.map((image, index) => {
              const d = image.desktop;
              const leftPct = (d.left / designW) * 100 + centerOffsetPct;
              const widthPct = (d.width / designW) * 100;
              const topPct = (d.top / designH) * 100;
              const heightPct = (d.height / designH) * 100;
              return (
                <img
                  key={index}
                  className="absolute rounded-[25px] object-cover shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                  style={{
                    zIndex: image.zIndex,
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    width: `${widthPct}%`,
                    height: `${heightPct}%`,
                    transform: `rotate(${d.rotation}deg)`,
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.08)",
                  }}
                  alt={image.alt}
                  src={image.src}
                />
              );
            });
          })()}
        </div>
      </div>

      <p className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-base md:text-xl text-center tracking-[0] leading-[24px] md:leading-[30px] px-4">
        Minar Ease brings back the simple things that make you feel human again
        —<br className="hidden md:block" />
        quiet moments, creativity, and space for your mind to rest
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 w-full md:w-auto">
        <button className="w-[80%] md:w-[210px] h-[40px] md:h-[35px] bg-[#ff7f00] hover:bg-[#ff7f00]/90 text-white rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5 transition-colors">
          Shop Offline Essentials
        </button>

        <button className="w-[70%] md:w-[175px] h-[40px] md:h-[35px] bg-[#ffead7] hover:bg-[#ffead7]/90 text-black rounded-[100px] border border-solid border-[#ff9e3d] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5 transition-colors">
          Join our community
        </button>
      </div>
    </section>
  );
};
