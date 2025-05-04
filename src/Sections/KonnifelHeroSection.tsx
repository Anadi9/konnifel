import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LatestActivities from "./LatestActivities";
import StatisticsSection from "./StatisticsSection";
import FooterBanner from "./FooterBanner";

const KonnifelHeroSection: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-7 pb-40 bg-white max-w-[1480px] mx-auto max-md:flex max-md:pb-24 max-sm:flex">
      <Header />
      <HeroSection />
      <LatestActivities />
      <StatisticsSection />
      <FooterBanner />
    </main>
  );
};

export default KonnifelHeroSection;