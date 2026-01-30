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
      className="relative w-full bg-cover bg-center py-10 sm:py-12 md:py-16 lg:py-[70px] px-4 sm:px-6 md:px-8 lg:px-[60px] overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="flex flex-col max-w-[1320px] mx-auto items-start gap-5">
        <div className="relative w-full border-b border-[#d9d9d9] pb-5">
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-20">
            <div className="flex flex-col w-full lg:w-[429px] items-start gap-4 md:gap-[15px]">
              <img
                className="w-[140px] sm:w-[160px] md:w-[177px] h-auto object-cover"
                alt="Whatsapp image"
                src="/Img/whatsapp-image-2025-11-15-at-21-02-1-1.png"
              />

              <p className="w-full lg:w-[426px] font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-base sm:text-lg tracking-[0] leading-6">
                Minar Ease brings back the simple things that make you feel
                human again — quiet moments, creativity, and space for your mind
                to rest.
              </p>

              <div className="inline-flex items-center gap-2.5">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 rounded-2xl bg-blend-overlay bg-[linear-gradient(0deg,rgba(255,230,224,0.5)_0%,rgba(255,230,224,0.5)_100%),linear-gradient(0deg,rgba(255,230,224,1)_0%,rgba(255,230,224,1)_100%)] hover:bg-[linear-gradient(0deg,rgba(255,230,224,0.7)_0%,rgba(255,230,224,0.7)_100%),linear-gradient(0deg,rgba(255,230,224,1)_0%,rgba(255,230,224,1)_100%)] flex items-center justify-center"
                  >
                    <social.icon className="w-4 h-4 text-[#ff7f00]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-start lg:justify-end gap-6 sm:gap-8 md:gap-10 lg:gap-[45px] flex-1 w-full lg:w-auto">
              <nav className="flex flex-col w-full sm:w-[172px] items-start gap-4 md:gap-5">
                <h3 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl tracking-[0] leading-6">
                  Explore
                </h3>

                <ul className="w-full flex flex-col items-start gap-3 md:gap-[15px]">
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

              <nav className="flex flex-col w-full sm:w-32 items-start gap-4 md:gap-5">
                <h3 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl tracking-[0] leading-6">
                  Products
                </h3>

                <ul className="w-full sm:w-[114px] flex flex-col items-start gap-3 md:gap-[15px]">
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

              <div className="flex flex-col w-full sm:w-[314px] items-start gap-4 md:gap-5">
                <h3 className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl tracking-[0] leading-6">
                  Get In Touch
                </h3>

                <div className="w-full sm:w-[314px] flex flex-col items-start gap-3 md:gap-[15px]">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-3 md:gap-4"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 mt-1">
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

                      <p className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-5 sm:leading-[22px] whitespace-pre-line">
                        {contact.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-0">
          <a
            href="#"
            className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg tracking-[0] leading-6 hover:underline text-center sm:text-left"
          >
            Terms &amp; Conditions
          </a>

          <p className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg tracking-[0] leading-6 text-center">
            <span className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg tracking-[0] leading-6">
              © 2025,{" "}
            </span>
            <span className="font-['Helvetica_Now_Display-Bold',Helvetica] font-bold">
              Minar Ease
            </span>
            <span className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg tracking-[0] leading-6">
              , All Rights Reserved.
            </span>
          </p>

          <a
            href="#"
            className="font-['Helvetica_Now_Display-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg tracking-[0] leading-6 hover:underline text-center sm:text-right"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
