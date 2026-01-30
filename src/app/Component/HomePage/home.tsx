import React from "react";
import { HeroSection } from "../HeroSection/HeroSection";
import { KeyStatisticsSection } from "./KeyStatisticsSection/KeyStatisticsSection";
import { FooterSection } from "../FooterSection/FooterSection";
import { Experience } from "../../our-mission/Experience/Experience";

function home() {
  return (
    <div>
      <HeroSection />
      <KeyStatisticsSection />
      <FooterSection />
      {/* <Experience /> */}
    </div>
  );
}

export default home;
