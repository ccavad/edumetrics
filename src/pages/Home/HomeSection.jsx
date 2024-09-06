import React from "react";
import FeatureCardSection from "./FeatureCardSection";
import LeadersSection from "./LeaderSection";
import PricingSection from "./PricingSection";
import ServiceCardSection from "./ServiceCardSection";
import TopSubjects from "./TopSubjects";


export const HomeSection = () => {
  return (
    <>
     <FeatureCardSection/>
     <ServiceCardSection/>
     <TopSubjects/>
     <LeadersSection/>
     <PricingSection/>
    </>
  );
};
