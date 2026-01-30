// import Image from "next/image";
// import Header from "../Component/HeaderSection/Header";
// import bookImage from "../../../../public/book.png";
// import vectorImg from "../../../../public/Vector2.png";
// import firstArrow from "../../../../public/Our Mission Page/Frame 1.png";
// import secoundArrow from "../../../../public/Our Mission Page/Frame 2.png";
// import bookMassage1 from "../../../../public/Our Mission Page/USP Card 4.png";
// import bookMassage2 from "../../../../public/Our Mission Page/USP Card 5.png";
// import { KeyStatisticsSection } from "./Contant/contant";

// const OurMissionPage = () => {
//   return (
//     <main className="bg-black relative min-h-screen">
//       {/* Top Part */}
//       <div className="bg-url bg-[url('/Our%20Mission%20Page.png')] bg-cover bg-center min-h-screen">
//         <div className="pt-6 md:pt-10 text-amber-50">
//           <Header />
//         </div>

//         <div className="relative pt-8 md:pt-20 flex justify-center items-center gap-2 sm:gap-3 md:gap-5 px-4">
//           <div className="hidden sm:block w-10 sm:w-15 md:w-auto">
//             <Image src={firstArrow} alt="First arrow" className="w-full" />
//           </div>
//           <button className="w-35 sm:w-40 md:w-45 text-white h-8.75 sm:h-9.25 md:h-10 hover:outline-[1px] hover:outline-[#ff7f00] bg-[#FF8000] hover:bg-[#FFFFFF]/90 hover:text-[#ff7f00] rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-sm sm:text-base tracking-[0] leading-5 transition-colors">
//             About Us
//           </button>
//           <div className="hidden sm:block w-10 sm:w-15 md:w-auto">
//             <Image src={secoundArrow} alt="Second arrow" className="w-full" />
//           </div>
//         </div>

//         <section className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-16 md:pb-20 lg:pb-24 bg-[url('/Img/Our%20Mission%20Background.png')] bg-cover bg-center">
//           <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-black/60 uppercase">
//             Our Mission
//           </p>
//           <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
//             Discover Our Mission and Values
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/70">
//             Minar Ease brings back the simple things that make you feel human
//             again — quiet moments, creativity, and space for your mind to rest
//           </p>
//         </section>
//       </div>
//       {/* Bool Img and Massage */}
//       <div className="relative flex justify-center items-center w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-70 px-4 z-10 pb-8 sm:pb-12 md:pb-16">
//         <Image
//           src={bookImage}
//           alt="Open book illustration"
//           className="w-70 sm:w-100 md:w-125 lg:w-225 h-auto"
//         />
//         <div className="absolute top-10 sm:top-16 md:top-20 lg:top-24 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4">
//           <div className="absolute w-30 sm:w-40 md:w-50 lg:w-62.5 md:right-30 md:top-10 ">
//             <Image
//               src={bookMassage1}
//               alt="Book massage 1"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="absolute w-30 sm:w-40 md:w-50 lg:w-62.5 md:left-20 md:top-20">
//             <Image
//               src={bookMassage2}
//               alt="Book massage 2"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//       {/* Decorative Triangle Accent */}
//       <div className="absolute top-40 sm:top-52 md:top-60 hidden md:flex justify-center items-center w-full pointer-events-none">
//         <Image
//           src={vectorImg}
//           alt="Decorative triangle accent"
//           className="w-auto h-150 md:h-200 lg:h-240 object-contain mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] z-0"
//           priority
//         />
//       </div>
//       {/* Contant Section */}
//       <div className="absolute w-full top-175 z-20 ">
//         <KeyStatisticsSection />
//       </div>
//     </main>
//   );
// };

// export default OurMissionPage;
