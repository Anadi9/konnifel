import React from "react";
import Header from "./Header";
import KonnifelMemberShip from "./KonnifelMemberShip";
import InternshipsSection from "./InternshipsSection";
import StatisticsSection from "./StatisticsSection";
import FooterBanner from "./FooterBanner";
import {konnifelMembershipData} from '../mocks/KonnifelMembershipData'

const KonnifelHeroSection: React.FC = () => {
  return (
    <main className="flex overflow-hidden w-full max-w-[2600px] flex-col bg-white max-md:flex">
      <Header />
      <KonnifelMemberShip
      membershipInfo={konnifelMembershipData.membershipInfo}
      internshipUpdates={konnifelMembershipData.internshipUpdates}
    />
      <InternshipsSection />
    </main>
  );
};

export default KonnifelHeroSection;