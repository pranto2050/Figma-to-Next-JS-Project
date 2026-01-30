"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export const KeyStatisticsSection = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });


  const questionandanswer = [
    {
      question: "What is the main purpose of this product?",
      answer:
        "The main purpose of this product is to provide users with a high-quality offline tool that helps them relax, unwind, and reconnect with the present moment through creative activities like coloring and journaling.",
    },
    {
      question: "What makes this product different from others in the market?",
      answer:
        "This product stands out due to its thoughtfully designed features, such as thicker pages to prevent bleed-through, smarter layouts for a better user experience, and a focus on promoting mindfulness and calmness during offline breaks.",
    },
  ];

  return (
    <section>
        <div className="flex flex-col justify-center items-center  px-3 sm:px-6 md:px-12">
          <h1
            className=" text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 md:mb-12"
            style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
          >
            Frequently Asked Questions
          </h1>
          <div className="bg-[#FFEAD8] space-y-3 sm:space-y-4 w-full max-w-4xl px-3 sm:px-6 md:px-8 py-6 sm:py-8 rounded-2xl">
            {questionandanswer.map(
              (item: { question: string; answer: string }, index: number) => (
                <div
                  key={index}
                  className={`border-b-2 border-[#FF8000] rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? "bg-[#FF8000]" : ""}`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center py-3 sm:py-4 md:py-6 px-3 sm:px-4 md:px-6"
                    >
                    <h3
                        className={`text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-left ${openIndex === index ? "text-white" : "text-black"}`}
                        style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
                    >
                        {item.question}
                    </h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16px"
                        viewBox="0 -960 960 960"
                        width="16px"
                        fill={openIndex === index ? "white" : "black"}
                        style={{
                        transform:
                            openIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 300ms",
                        }}
                    >
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                    </svg>
                    </button>
                    {openIndex === index && (
                    <div
                        className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 text-white text-xs sm:text-sm md:text-base"
                        style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
                    >
                        <p>{item.answer}</p>
                    </div>
                    )}
                </div>
                ),
            )}
            </div>
        </div>
    </section>
    );
};
