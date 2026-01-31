"use client";

import { CheckCircle2Icon, SendIcon, Plus, Minus } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Button } from "../../../../../components/ui/button";
// import Image from "../../../../../../public/Card Background.png";
import cartBackgroundImg from "../../../../../../public/productSection.png";

const features = [
  "Thick 200gsm pages",
  "Single-sided artwork",
  "Protective sheet included",
  "Modern, gender-neutral illustrations",
  "Made for quiet breaks",
];

// Using the same image multiple times for the slider
const productImage = "/Img/image.png";
const sliderItems = 4; // Number of slides

export const ProductShowcaseSection = () => {
  const [quantity, setQuantity] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderItems) % sliderItems);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };
  return (
    <section
      className="w-full relative bg-cover bg-center"
      
    >
      <Card
        className="flex flex-col justify-center rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0 overflow-hidden md:mx-30"
        style={{
          backgroundImage: `url(${cartBackgroundImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>

        <CardContent className="relative p-0">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6">
            {/* Left Section Contant */}
            <div className="md:pl-10 md:py-10 flex flex-col gap-6 md:gap-[30px] max-w-full lg:w-[414px] mx-auto lg:mx-0">
              <div className=" flex flex-col gap-4 md:gap-5">
                <div className="flex flex-col gap-2">
                  <h2 className="[font-family:'Salsa',Helvetica] font-normal text-white text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-8 md:leading-10">
                    Vini: The Quiet Escape
                  </h2>

                  <p className="[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-white text-lg md:text-xl leading-5">
                    Minar Ease
                  </p>
                </div>
                <p className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base leading-5 md:leading-4">
                  Adult coloring book for relaxation and mindfulness with easy
                  access.
                </p>
              </div>

              <div className="hidden md:flex flex-col gap-2.5">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <CheckCircle2Icon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-xs leading-[14px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 md:flex-col md:items-start">
                <div className="flex items-center justify-between flex-wrap gap-4 w-full md:w-auto">
                  <div className="md:mr-10 lg:mr-20 xl:mr-30 [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-white text-2xl sm:text-3xl md:text-[32px] leading-7 md:leading-8">
                    $3,549
                  </div>

                  <div className="hidden md:flex items-center gap-1">
                    <button
                      onClick={handleDecrease}
                      className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#ff7f00] bg-transparent hover:bg-[#ff7f00]/10 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-[#ff7f00]" />
                    </button>

                    <div className="w-[60px] h-[30px] flex items-center justify-center bg-[#ffead7] rounded-full">
                      <span className="font-medium-16px-regular font-[number:var(--medium-16px-regular-font-weight)] text-black text-[length:var(--medium-16px-regular-font-size)] [font-style:var(--medium-16px-regular-font-style)]">
                        {quantity}
                      </span>
                    </div>

                    <button
                      onClick={handleIncrease}
                      className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#ff7f00] bg-transparent hover:bg-[#ff7f00]/10 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-[#ff7f00]" />
                    </button>
                  </div>
                </div>

                <Button className="flex justify-center items-center w-[160px] sm:w-[180px] md:w-full h-[35px] sm:h-[30px] bg-[#ff7f00] hover:bg-[#ff7f00]/90 text-white rounded-[20px] border border-[#ffe6e0] gap-2 [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-xs sm:text-xs">
                  <SendIcon className="w-4 h-4" />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Right Section - Image Slider */}

            <div className="flex items-center justify-center lg:justify-end order-first lg:order-last relative">
              <div
                className="relative w-[350px] h-[350px] sm:w-[280px] md:w-[320px] lg:w-[450px] xl:w-[520px] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[450px] xl:h-[520px] overflow-hidden rounded-xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: sliderItems }).map((_, index) => (
                    <div
                      key={index}
                      className="min-w-full w-full h-full flex-shrink-0"
                    >
                      <img
                        className="w-full h-full rounded-xl object-cover"
                        alt={`Vini: The Quiet Escape coloring book - Slide ${index + 1}`}
                        src={productImage}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination Dots on Image */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-[5px] z-10">
                  {Array.from({ length: sliderItems }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded transition-all ${
                        index === currentSlide
                          ? "bg-white w-6"
                          : "bg-[#a1a1a180] w-2"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
