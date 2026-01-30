"use client";

import React from "react";

const images = [
  {
    src: "/Img/rectangle-8.png",
    alt: "Rectangle",
    className: "top-6 left-[-71px] w-[245px] h-[246px]",
    zIndex: 1,
    rotation: -10.55,
    mobileRotation: -10, // Individual mobile rotation for this image
  },
  {
    src: "/Img/rectangle-7.png",
    alt: "Rectangle",
    className: "top-[25px] left-[102px] w-[245px] h-[246px]",
    zIndex: 2,
    rotation: -10,
    mobileRotation: -5, // Individual mobile rotation for this image
  },
  {
    src: "/Img/rectangle-6.png",
    alt: "Rectangle",
    className: "top-[40px] left-[266px] w-[230px] h-[230px]",
    zIndex: 3,
    rotation: -10,
    mobileRotation: 0, // Individual mobile rotation for this image
  },
  {
    src: "/Img/rectangle-5.png",
    alt: "Rectangle",
    className: "top-[3px] left-[415px] w-[245px] h-[246px]",
    zIndex: 4,
    rotation: 0,
    mobileRotation: 5, // Individual mobile rotation for this image
  },
  {
    src: "/Img/rectangle-4.png",
    alt: "Rectangle",
    className: "-top-1 left-[546px] w-[245px] h-[246px]",
    zIndex: 3,
    rotation: 10,
    mobileRotation: 10, // Individual mobile rotation for this image
  },
  {
    src: "/Img/rectangle-3.png",
    alt: "Rectangle",
    className: "top-1.5 left-[706px] w-[245px] h-[246px]",
    zIndex: 2,
    rotation: 10,
    mobileRotation: -8, // Individual mobile rotation for this image
  },
  {
    src: "/Img/rectangle-2.png",
    alt: "Rectangle",
    className: "-top-px left-[867px] w-[245.28px] h-[246.09px]",
    zIndex: 1,
    rotation: 10.55,
    mobileRotation: 12, // Individual mobile rotation for this image
  },
];

export const HeroImageSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1196px] rounded-[30px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 items-center gap-6 sm:gap-8 md:gap-[30px] mx-auto px-4 md:px-10">
      <header className="flex flex-col items-center justify-center w-full mt-[-1.00px]">
        <h1 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-black text-[28px] sm:text-[32px] md:text-[42px] lg:text-[50px] text-center tracking-[0] leading-[38px] sm:leading-[45px] md:leading-[60px] lg:leading-[70px]">
          Life Feels Better Offline
        </h1>
        <p className="font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-center tracking-[0] leading-[24px] sm:leading-[30px] md:leading-[40px] lg:leading-[50px] mt-2">
          Tools designed to help you slow down, breathe, and reconnect with your
          real life
        </p>
      </header>

      {/* Mobile: All Images Stacked on Top of Each Other (Perfectly Centered) */}
      <div className="md:hidden relative w-full flex items-center justify-center h-[280px] sm:h-[300px] my-6">
        {images.map((image, index) => {
          const isTopImage =
            image.zIndex === Math.max(...images.map((img) => img.zIndex));
          return (
            <img
              key={index}
              className="absolute w-[200px] sm:w-[220px] h-[200px] sm:h-[220px] rounded-[25px] object-cover transition-all duration-300"
              style={{
                zIndex: image.zIndex,
                transform: `translate(-50%, -50%) rotate(${image.mobileRotation}deg)`,
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

      {/* Desktop: All images displayed - Perfectly Centered */}
      <div className="hidden md:flex relative w-full items-center justify-center py-8">
        <div className="relative w-full max-w-[1195.66px] h-[331.59px] mx-auto">
          {(() => {
            // Calculate the center offset for the entire group
            const imagePositions = images.map((image) => {
              const leftMatch = image.className.match(/left-\[([\d.-]+)px\]/);
              const widthMatch = image.className.match(/w-\[([\d.]+)px\]/);
              const left = leftMatch ? parseFloat(leftMatch[1]) : 0;
              const width = widthMatch ? parseFloat(widthMatch[1]) : 245;
              return { left, right: left + width };
            });

            const minLeft = Math.min(...imagePositions.map((p) => p.left));
            const maxRight = Math.max(...imagePositions.map((p) => p.right));
            const groupCenter = (minLeft + maxRight) / 2;
            const containerCenter = 1195.66 / 2;
            const centerOffset = containerCenter - groupCenter;

            return images.map((image, index) => {
              // Extract values from className
              const leftMatch = image.className.match(/left-\[([\d.-]+)px\]/);
              const topMatch = image.className.match(/top-\[([\d.-]+)px\]/);
              const widthMatch = image.className.match(/w-\[([\d.]+)px\]/);
              const heightMatch = image.className.match(/h-\[([\d.]+)px\]/);

              const originalLeft = leftMatch ? parseFloat(leftMatch[1]) : 0;
              const originalTop = topMatch
                ? parseFloat(topMatch[1])
                : image.className.includes("-top-1")
                  ? -4
                  : image.className.includes("top-6")
                    ? 24
                    : image.className.includes("top-1.5")
                      ? 6
                      : image.className.includes("top-[25px]")
                        ? 25
                        : image.className.includes("top-[40px]")
                          ? 40
                          : image.className.includes("top-[3px]")
                            ? 3
                            : 0;

              const width = widthMatch ? parseFloat(widthMatch[1]) : 245;
              const height = heightMatch ? parseFloat(heightMatch[1]) : 246;

              // Apply the same center offset to all images
              const centeredLeft = originalLeft + centerOffset;

              return (
                <img
                  key={index}
                  className="absolute rounded-[25px] object-cover shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                  style={{
                    zIndex: image.zIndex,
                    transform: `rotate(${image.rotation}deg)`,
                    left: `${centeredLeft}px`,
                    top: `${originalTop}px`,
                    width: `${width}px`,
                    height: `${height}px`,
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
