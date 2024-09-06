import React, { useEffect } from "react";
import { Header } from "../../components/layout/Header";
import { HeroSection } from "./HeroSection";
import { HomeSection } from "./HomeSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeSection/>
    </>
  );
};

export default Home;
