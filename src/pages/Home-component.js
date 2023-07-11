import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar-component";
import Sidebar from "../components/Sidebar/Sidebar-component";
import HeroSection from "../components/HeroSection/HeroSection-component";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/footer";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // update the state of isOpen to the opposite of what it currently is
  const toggle = () => {
    setIsOpen(!isOpen);
};

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
