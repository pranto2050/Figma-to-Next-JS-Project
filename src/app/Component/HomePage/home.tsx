import React from "react";
import { HeroSection } from "../HeroSection/HeroSection";
import { KeyStatisticsSection } from "./KeyStatisticsSection/KeyStatisticsSection";
import { FooterSection } from "../FooterSection/FooterSection";
function home() {
  return (
    <div>
      <HeroSection />
      <KeyStatisticsSection />
      <FooterSection />
    </div>
  );
}

export default home;
