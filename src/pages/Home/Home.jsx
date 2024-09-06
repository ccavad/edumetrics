import React, { useEffect } from "react";
import { Header } from "../../components/layout/Header";
import { HeroSection } from "./HeroSection";
import { HomeSection } from "./HomeSection";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeSection/>
      <Footer/>
    </>
  );
};

export default Home;
