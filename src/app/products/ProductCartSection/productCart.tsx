"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import productCart1 from "../../../../public/Product/procuct 1.png";
import productCart2 from "../../../../public/Product/procuct 2.png";
import productCart3 from "../../../../public/Product/procuct 3.png";
import productCart4 from "../../../../public/Product/procuct 4.png";
import { KeyStatisticsSection as FrequentlyAskedQuestions } from "../frequentlyAskedQuestions/frequentlyAskedQuestions"

export const KeyStatisticsSection = () => {
  const router = useRouter();
  const { addItem } = useCart();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });
  // Navigation replaces modal state

  const products = [
    {
      images: [productCart1, productCart1, productCart1],
      productHeading: "English Book 1",
      autherName: "Santo",
      description:
        "A beautifully designed book that brings calm and creativity to your daily routine.",
      price: 120,
      features: [
        "Premium quality paper that prevents bleed-through",
        "Thoughtfully designed layouts for better experience",
        "Perfect for mindfulness and relaxation",
        "Durable binding for long-lasting use",
      ],
    },
    {
      images: [productCart2, productCart2, productCart2],
      productHeading: "English Book 2",
      autherName: "Maria",
      description:
        "Discover peace and mindfulness through thoughtfully crafted pages and designs.",
      price: 150,
      features: [
        "High-quality materials for premium feel",
        "Carefully curated content for relaxation",
        "Portable design for on-the-go use",
        "Eco-friendly and sustainable production",
      ],
    },
    {
      images: [productCart3, productCart3, productCart3],
      productHeading: "English Book 3",
      autherName: "John",
      description:
        "Experience the joy of offline breaks with premium quality materials and layouts.",
      price: 180,
      features: [
        "Expertly crafted for maximum engagement",
        "Stress-relief through creative activities",
        "Beautiful aesthetics and design",
        "Suitable for all skill levels",
      ],
    },
    {
      images: [productCart4, productCart4, productCart4],
      productHeading: "English Book 4",
      autherName: "Alex",
      description:
        "Transform your downtime into moments of relaxation with this premium collection.",
      price: 200,
      features: [
        "Luxury materials for ultimate comfort",
        "Innovative design for better usability",
        "Promotes mental wellness and calm",
        "Makes a perfect gift for loved ones",
      ],
    },
  ];
  return (
    <section
      className="relative pt-4 sm:pt-8 md:pt-10 lg:pt-16 px-3 sm:px-6 md:px-12 lg:px-20 pb-10 md:pb-0 w-full min-h-screen"
      style={{
        backgroundImage: "url('/Our%20Mission%20Page/Main%20Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div className="w-full mt-20">
        {/* Product Cards Grid */}
        <div className="grid px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map(
            (
              product: {
                images: any[];
                productHeading: string;
                autherName: string;
                description: string;
                price: number;
                features: string[];
              },
              index: number,
            ) => (
              <div
                key={index}
                onClick={() => {
                  router.push(`/product/${index}`);
                }}
                className="p-2 sm:p-2 md:p-3 rounded-[20px] bg-white shadow overflow-hidden flex flex-col border border-[#FF8000] cursor-pointer hover:shadow-lg transition-shadow"
                style={{
                  boxShadow: "0 1px 3px rgba(255, 128, 0, 0.3)",
                  transform: "translateY(30px)",
                }}
              >
                <div className="w-full h-56 sm:h-56 md:h-56 lg:h-64 relative overflow-hidden rounded-xl">
                  {/* Image Slider Container */}
                  <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${(slideIndex[index] || 0) * 100}%)`,
                    }}
                  >
                    {product.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="w-full h-full shrink-0"
                      >
                        <Image
                          src={image}
                          alt={`${product.productHeading} ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Slider Dots */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                    {product.images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() =>
                          setSlideIndex({ ...slideIndex, [index]: dotIndex })
                        }
                        className={`w-2 h-2 rounded-full transition-all ${
                          slideIndex[index] === dotIndex
                            ? "bg-[#FF8000] w-6"
                            : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 sm:mt-4 md:mt-5 flex flex-col grow px-3 sm:px-3 md:px-4">
                  <h3
                    className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-black mb-2"
                    style={{ fontFamily: "Salsa, cursive" }}
                  >
                    {product.productHeading}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-gray-500 mb-3">
                    By {product.autherName}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-sm mb-4 sm:mb-4 grow">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto mb-0">
                    <span
                      className="bg-[#DFE2E6] font-bold text-black px-4 sm:px-4 md:px-5 py-1.5 sm:py-1.5 text-sm sm:text-sm md:text-base rounded-full"
                      style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
                    >
                      ${product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(index, 1);
                        router.push("/checkout");
                      }}
                      className="bg-[#FF8000] text-white px-3 sm:px-3 md:px-4 py-1.5 sm:py-1.5 md:py-2 text-sm sm:text-sm md:text-base rounded-full hover:bg-[#FF8000]/90 transition-colors font-medium"
                      style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="mt-40">
        <FrequentlyAskedQuestions />
        </div>
        

      </div>
    </section>
  );
};
