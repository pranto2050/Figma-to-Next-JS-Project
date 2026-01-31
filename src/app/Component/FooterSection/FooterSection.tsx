"use client";

import {
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import mobileFooterImg from "../../../../public/Mobile Footer.png";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: TwitterIcon, label: "Twitter" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
];

const exploreLinks = [
  { text: "Home" },
  { text: "Our Mission" },
  { text: "Products" },
  { text: "Blog" },
];

const productLinks = [
  { text: "Vini" },
  { text: "Vini" },
  { text: "Vini" },
  { text: "Vini" },
];

const contactInfo = [
  { icon: PhoneIcon, text: "+880 1898-753003" },
  { icon: MailIcon, text: "contact@minarease.com" },
  {
    icon: MapPinIcon,
    text: "Minar Ease, Stationsstraat 12,\n1234 AB Amsterdam NETHERLANDS",
  },
];

export const FooterSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isMobile ? mobileFooterImg.src : "/Footer Back.png";

  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat py-10 sm:py-12 md:py-14 lg:py-[70px] px-4 sm:px-6 md:px-10 lg:px-[60px] overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="flex flex-col max-w-[1320px] mx-auto items-start gap-6 md:gap-8">
        <div className="relative w-full border-b border-white/20 md:border-[#d9d9d9] pb-6 md:pb-8">
          {/* Main content: logo + description left, links right — two columns from md (768px) */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-20 md:justify-between">
            {/* Brand block — fixed width on md+ for balance */}
            <div className="flex flex-col w-full md:max-w-[380px] lg:w-[429px] items-start gap-4 md:gap-5 shrink-0">
              <img
                className="w-[140px] sm:w-[160px] md:w-[177px] h-auto object-contain"
                alt="Minar Ease logo"
                src="/Img/whatsapp-image-2025-11-15-at-21-02-1-1.png"
              />

              <p className="w-full font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-base sm:text-lg md:text-[15px] lg:text-base tracking-[0] leading-6 md:leading-[22px]">
                Minar Ease brings back the simple things that make you feel
                human again — quiet moments, creativity, and space for your mind
                to rest.
              </p>

              <div className="inline-flex items-center gap-2 md:gap-2.5 flex-wrap">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-2xl bg-blend-overlay bg-[linear-gradient(0deg,rgba(255,230,224,0.5)_0%,rgba(255,230,224,0.5)_100%),linear-gradient(0deg,rgba(255,230,224,1)_0%,rgba(255,230,224,1)_100%)] hover:bg-[linear-gradient(0deg,rgba(255,230,224,0.7)_0%,rgba(255,230,224,0.7)_100%),linear-gradient(0deg,rgba(255,230,224,1)_0%,rgba(255,230,224,1)_100%)] flex items-center justify-center transition-opacity hover:opacity-90"
                  >
                    <social.icon className="w-4 h-4 text-[#ff7f00]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Link columns — responsive grid for tablets & desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-auto md:flex-1 md:max-w-[520px] lg:max-w-none lg:flex-initial gap-8 md:gap-6 lg:gap-[45px] md:justify-end">
              <nav className="flex flex-col items-start gap-4 md:gap-5 min-w-0">
                <h3 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl tracking-[0] leading-6">
                  Explore
                </h3>

                <ul className="flex flex-col items-start gap-3 md:gap-[15px]">
                  {exploreLinks.map((link, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 md:gap-5"
                    >
                      <ChevronRightIcon className="w-[7px] h-[19px] text-white flex-shrink-0" />
                      <a
                        href="#"
                        className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[21px] hover:underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col items-start gap-4 md:gap-5 min-w-0">
                <h3 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl tracking-[0] leading-6">
                  Products
                </h3>

                <ul className="flex flex-col items-start gap-3 md:gap-[15px]">
                  {productLinks.map((link, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 md:gap-5"
                    >
                      <ChevronRightIcon className="w-[7px] h-[19px] text-white flex-shrink-0" />
                      <a
                        href="#"
                        className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[21px] hover:underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col items-start gap-4 md:gap-5 min-w-0 sm:col-span-2 md:col-span-1">
                <h3 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl tracking-[0] leading-6">
                  Get In Touch
                </h3>

                <div className="flex flex-col items-start gap-3 md:gap-[15px] w-full max-w-[320px] md:max-w-none">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-3 md:gap-4"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index === 0 && (
                          <img
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            alt="Phone"
                            src="/Img/background.svg"
                          />
                        )}
                        {index === 1 && (
                          <img
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            alt="Email"
                            src="/Img/background-1.svg"
                          />
                        )}
                        {index === 2 && (
                          <img
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            alt="Location"
                            src="/Img/background-2.svg"
                          />
                        )}
                      </div>

                      <p className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-5 sm:leading-[22px] whitespace-pre-line break-words">
                        {contact.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — stacks on small, row on sm+; wraps gracefully on md */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <a
            href="#"
            className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-[15px] lg:text-base tracking-[0] leading-6 hover:underline text-center sm:text-left order-1 sm:order-1"
          >
            Terms &amp; Conditions
          </a>

          <p className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-[15px] lg:text-base tracking-[0] leading-6 text-center order-3 sm:order-2 shrink-0">
            <span className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal">
              © 2025,{" "}
            </span>
            <span className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold">
              Minar Ease
            </span>
            <span className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal">
              , All Rights Reserved.
            </span>
          </p>

          <a
            href="#"
            className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-[15px] lg:text-base tracking-[0] leading-6 hover:underline text-center sm:text-right order-2 sm:order-3"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
