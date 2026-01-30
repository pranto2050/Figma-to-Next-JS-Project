import React from "react";
import { Avatar, AvatarImage } from "../../../../Avater/avatar";

const avatarImages = [
  {
    src: "/Img/ellipse-27.png",
    alt: "Customer testimonial avatar 1",
    className:
      "absolute top-[-23px] left-[-150px] w-[248px] h-[248px] md:top-[43px] md:left-[-26px] md:w-[148px] md:h-[148px] md:block",
  },
  {
    src: "/Img/ellipse-29.png",
    alt: "Customer testimonial avatar 2",
    className:
      "absolute top-[211px] -left-6 w-[164px] h-[164px] hidden md:block",
  },
  {
    src: "/Img/ellipse-30.png",
    alt: "Customer testimonial avatar 3",
    className:
      "absolute top-[273px] left-[149px] w-[148px] h-[148px] hidden md:block",
  },
  {
    src: "/Img/ellipse-31.png",
    alt: "Customer testimonial avatar 4",
    className:
      "absolute top-[100px]  left-[50px] w-[290px] h-[290px] md:left-[108px] md:w-[190px] md:h-[190px]  md:block",
  },
  {
    src: "/Img/ellipse-28.png",
    alt: "Customer testimonial avatar 5",
    className:
      "absolute top-[-80px] left-30 w-[224px] h-[224px] md:left-40 md:-top-4 md:w-[124px] md:h-[124px] md:block",
  },
];

export const CustomerTestimonialsSection = () => {
  return (
    <section className="relative flex flex-col bg-[#FFEAD8] px-10 lg:px-20 pt-10 gap-10 pb-20">
      <div className="flex">
        <button className="flex items-center justify-center gap-2 w-[180px] md:w-[180px] h-[40px] md:h-[35px] outline-[1px] outline-[#ff7f00] bg-[#FFEAD8] hover:bg-[#ff7f00]/90 text-black rounded-[100px] border border-solid border-[#ffe6e0] font-['Helvetica_Now_Display-Medium',Helvetica] font-medium text-base tracking-[0] leading-5 transition-colors">
          What people says
          <img src="/Img/massage.png" alt="Message icon" className="w-4 h-4" />
        </button>
      </div>

      <section className="flex flex-col w-full gap-[5px] lg:px-4 mb-10">
        <h2 className="flex justify-start font-bold text-black text-[40px] lg:text-5xl tracking-[0] leading-[1.1] text-left">
          Loved by those who needed a break
        </h2>

        <p className="w-fit [font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-black text-[20px]  lg:text-4xl tracking-[0] mt-2 leading-[1.2] text-left">
          Join hundreds of others who traded scrolling for creating.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-[130px] w-full justify-center">
        <div className="relative w-[200px] h-[280px] md:w-[272px] md:h-[385px] flex-shrink-0 scale-75 md:scale-100">
          {avatarImages.map((avatar, index) => (
            <Avatar key={index} className={avatar.className}>
              <AvatarImage src={avatar.src} alt={avatar.alt} />
            </Avatar>
          ))}
        </div>

        <img
          className="w-[17px] md:h-[200px] md:h-[257px] flex-shrink-0 h-[200px] rotate-90 md:rotate-180"
          alt="Decorative divider"
          src="/Img/frame-25.svg"
        />

        <div className="flex items-start gap-4 md:gap-[30px] flex-shrink-0 w-full lg:w-auto">
          <img
            className=" flex-shrink-0 mt-[-0.50px] ml-[-0.50px] w-[40px] md:w-auto"
            alt="Quotation marks"
            src="/Img/frame-20.svg"
          />

          <blockquote className="w-full lg:w-[510px] mt-[-1.00px] [font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-base md:text-xl tracking-[0] leading-[1.4]">
            <p className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-black text-base md:text-xl tracking-[0] leading-[1.4]">
              My screen-time report was bullying me. I bought this hoping it
              would stop my 11 PM doomscrolling — and somehow it worked. I
              colour for 20 minutes and my brain finally relaxes. Cheaper than
              therapy.
            </p>
            <br />
            <footer className="[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-black text-base md:text-xl tracking-[0] leading-[1.4]">
              Lieke Visser
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
