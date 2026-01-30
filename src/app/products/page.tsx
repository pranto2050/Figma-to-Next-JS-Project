import Image from "next/image";
import Header from "../Component/HeaderSection/Header";
import firstArrow from "../../../public/Our Mission Page/Frame 1.png";
import secoundArrow from "../../../public/Our Mission Page/Frame 2.png";
import { KeyStatisticsSection } from "./ProductCartSection/productCart";
import productIcon from "../../../public/Icon/report-search.svg";

const OurProduct = () => {
  return (
    <main className="bg-black relative min-h-screen">
      {/* Top Part */}
      <div className="bg-url bg-[url('/Our%20Mission%20Page.png')] bg-cover bg-center">
        <div className="pt-6 md:pt-10 text-amber-50">
          <Header />
        </div>

        <div className="relative pt-8 md:pt-20 flex justify-center items-center gap-2 sm:gap-3 md:gap-5 px-4">
          <div className="hidden sm:block w-10 sm:w-15 md:w-auto">
            <Image src={firstArrow} alt="First arrow" className="w-full" />
          </div>
          <button className="w-35 sm:w-40 md:w-45 text-black h-8.75 sm:h-9.25 md:h-10 hover:outline-[1px] hover:outline-[#ff7f00] bg-[#FFEAD8] outline-[1px] outline-[#FF9E3D] hover:bg-[#FF8000]/90 hover:text-black rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-sm sm:text-base tracking-[0] leading-5 transition-colors flex items-center justify-center gap-2">
            <span>Product</span>
            <img
              src={productIcon.src}
              alt="Product Icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
          <div className="hidden sm:block w-10 sm:w-15 md:w-auto">
            <Image src={secoundArrow} alt="Second arrow" className="w-full" />
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
      <KeyStatisticsSection />
    </main>
  );
};

export default OurProduct;
