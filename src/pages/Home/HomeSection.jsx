import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import LightBulb from "../../assets/images/light.png";
import Arrow from "../../assets/images/arrow.png";
import Books from "../../assets/images/books.png";
import Presentation from "../../assets/images/presentation.png";
import Weakness from "../../assets/images/weakness.png";
import Math from "../../assets/images/math.png";
import Math2 from "../../assets/images/math2.png";
import Azlang from "../../assets/images/azlang.png";
import HomeAvatar from "../../assets/images/HomeAvatar.png";
import Badge from "../../assets/images/badge.png";
import FeatureCardSection from "./FeatureCardSection";
import ServiceCardSection from "./ServiceCardSection";
import LeadersSection from "./LeaderSection";
import PricingSection from "./PricingSection";





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
