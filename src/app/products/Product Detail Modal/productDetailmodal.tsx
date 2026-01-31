"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

import Header from "../../Component/HeaderSection/Header";
import firstArrow from "../../../../public/Our Mission Page/Frame 1.png";
import secoundArrow from "../../../../public/Our Mission Page/Frame 2.png";
import sendIcon from "../../../../public/Product/send-02.png";
import { KeyStatisticsSection as FrequentlyAskedQuestions } from "../frequentlyAskedQuestions/frequentlyAskedQuestions";
import productIcon from "../../../../public/Icon/report-search.svg";

interface Product {
  images: any[];
  productHeading: string;
  autherName: string;
  description: string;
  price: number;
  features: string[];
}

interface ProductDetailModalProps {
  product: Product;
  productId?: number;
}

export const ProductDetailModal = ({ product, productId = 0 }: ProductDetailModalProps) => {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const totalPrice = product.price * quantity;

  return (
    <main className="bg-black relative min-h-screen">
      {/* Top Part with Header */}
      <div className="bg-url bg-[url('/Our%20Mission%20Page.png')] bg-cover bg-center">
        <div className="pt-6 md:pt-10 text-amber-50">
          <Header />
        </div>

        <div className="relative pt-8 md:pt-20 flex justify-center items-center gap-2 sm:gap-3 md:gap-5 px-4">
          <div className="hidden sm:block">
            <Image
              src={firstArrow}
              alt="First arrow"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-100 md:h-24 object-contain"
            />
          </div>
          <button
            className="w-35 sm:w-40 md:w-45 text-black h-8.75 sm:h-9.25 md:h-10 hover:outline-[1px] hover:outline-[#ff7f00] bg-[#FFEAD8] hover:bg-[#FFFFFF]/90 hover:text-[#ff7f00] rounded-[100px] border border-solid border-[#FF8000] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-sm sm:text-base tracking-[0] leading-5 transition-colors flex items-center justify-center gap-2"
            onClick={() => router.push("/products")}
          >
            <span>Product</span>
            <img
              src={productIcon.src}
              alt="Product Icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
          {/* Divider Arrow between Product and Back buttons */}
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </span>
          {/* Back to Products Button (moved to top bar) */}
          <button
            onClick={() => router.push("/products")}
            className="w-auto px-4 sm:px-5 md:px-6 h-8.75 sm:h-9.25 md:h-10 flex items-center gap-2 text-sm sm:text-base font-medium rounded-[100px] border border-solid border-transparent text-white hover:text-[#ffe6e0] transition-colors"
            style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
          >
            <span>Back to Products</span>
          </button>
          <div className="hidden sm:block">
            <Image
              src={secoundArrow}
              alt="Second arrow"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-100 md:h-24 object-contain"
            />
          </div>
        </div>

        <section className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-16 md:pb-20 lg:pb-24 bg-[url('/Img/Our%20Mission%20Background.png')] bg-cover bg-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-black/60 uppercase">
            Our Mission
          </p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Explore Our Products
          </h1>
        </section>
      </div>

      {/* Product Detail Section */}
      <section
        className="relative pt-4 sm:pt-8 md:pt-10 lg:pt-16 px-3 sm:px-6 md:px-12 lg:px-20 pb-10 md:pb-20 w-full"
        style={{
          backgroundImage: "url('/Our%20Mission%20Page/Main%20Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div className="w-full mx-auto mt-8 sm:mt-12 md:mt-16">
          {/* Product Detail Card */}
          <div className=" bg-[#FFEAD8] rounded-3xl overflow-hidden mb-12 sm:mb-16 md:mb-20 w-full">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Image Section */}
              <div className="w-full lg:w-[58%] lg:h-130 flex flex-col lg:flex-row gap-2.5 items-stretch">
                {/* Main Image */}
                <div className="flex-1 lg:flex-[2.15] rounded-3xl overflow-hidden border-gray-100 bg-[#FFEAD8] relative group lg:aspect-square">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.productHeading}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ minHeight: "360px" }}
                  />
                  {/* Image Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setSelectedImage((prev) =>
                            prev === 0 ? product.images.length - 1 : prev - 1,
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FFEAD8]/90 hover:bg-[#FFEAD8] rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#FF8000"
                        >
                          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setSelectedImage((prev) =>
                            prev === product.images.length - 1 ? 0 : prev + 1,
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFEAD8]/90 hover:bg-[#FFEAD8] rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#FF8000"
                        >
                          <path d="M504-480 320-664l56-56 184 184-184 184-56-56 184-184Z" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Side Images (Thumbnails) */}
                <div className="flex lg:flex-col gap-3 justify-center lg:justify-between overflow-x-auto lg:overflow-y-hidden pb-2 lg:pb-0 lg:h-full lg:w-52 lg:pl-2">
                  {product.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-full lg:flex-1 rounded-2xl transition-all hover:scale-[1.02] ${
                        selectedImage === idx
                          ? "  ring-2 ring-[#FF8000]/20"
                          : " "
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Variant ${idx + 1}`}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info Section */}
              <div className="flex flex-col justify-center w-full lg:w-[32%] lg:mt-[5%] h-full">
                <div className="mb-3 sm:mb-4">
                  <h1
                    className="text-1xl sm:text-3xl md:text-[30px] lg:text-[38px] font-bold text-black mb-1 sm:mb-2"
                    style={{ fontFamily: "Salsa, cursive" }}
                  >
                    {product.productHeading}
                  </h1>
                  <p
                    className="text-base sm:text-lg md:text-xl text-black"
                    style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
                  >
                    By {product.autherName}
                  </p>
                </div>

                <p
                  className="text-gray-600 mb-4 "
                  style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
                >
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="mb-5 sm:mb-6">
                  <ul className="flex flex-col gap-2 justify-center">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700 text-[10px]"
                      >
                        <div className="shrink-0 rounded-full h-3 w-3 bg-[#FF8000] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="h-2.5 w-2.5"
                            fill="white"
                          >
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                          </svg>
                        </div>
                        <span
                          style={{
                            fontFamily: "Helvetica Now Display, Helvetica",
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Quantity Section */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-row items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span
                        className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-black"
                        style={{
                          fontFamily: "Helvetica Now Display, Helvetica",
                        }}
                      >
                        ${product.price}
                      </span>
                      {/* Show Total Price */}
                      {/* {quantity > 1 && (
                      <span className="text-xs sm:text-sm text-gray-500 mt-1">
                        Total: ${totalPrice}
                      </span>
                    )} */}
                    </div>

                    <div className="flex items-center gap-3 rounded-full px-3 sm:px-4 md:px-2 md:py-2 py-2 sm:py-2.5 ">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#FF8000] hover:bg-[#FF8000]/10 transition-colors text-xl font-bold text-[#FF8000]"
                      >
                        −
                      </button>
                      <span
                        className="text-lg sm:text-xl font-semibold w-20 lg:w-24 sm:w-16 text-center bg-[#FFCE9E] text-black rounded-full py-1"
                        style={{
                          fontFamily: "Helvetica Now Display, Helvetica",
                        }}
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#FF8000] hover:bg-[#FF8000]/10 transition-colors text-xl font-bold text-[#FF8000]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      addItem(productId, quantity);
                      router.push("/checkout");
                    }}
                    className="w-full bg-[#FF8000] lg:w-full lg:py-1 text-white py-2 sm:py-5 rounded-full text-lg sm:text-xl md:text-[15px] font-bold hover:bg-[#FF8000]/90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                    style={{ fontFamily: "Helvetica Now Display, Helvetica" }}
                  >
                    <span>Buy Now</span>
                    <Image
                      src={sendIcon}
                      alt="Send"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="flex justify-center">
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </section>
    </main>
  );
};
