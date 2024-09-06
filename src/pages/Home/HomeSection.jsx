import React from "react";
import FeatureCardSection from "./FeatureCardSection";
import LeadersSection from "./LeaderSection";
import PricingSection from "./PricingSection";
import ServiceCardSection from "./ServiceCardSection";


export const HomeSection = () => {
  return (
    <>
     <FeatureCardSection/>
     <ServiceCardSection/>
     <LeadersSection/>
     <PricingSection/>
    </>
  );
};
