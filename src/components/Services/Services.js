import React from "react";
import Renters from "../../images/apartment.svg";
import Home from "../../images/home.svg";
import Car from "../../images/car.svg";
import Pet from "../../images/pet.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesBtn,
} from "./Services-styles";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Bundle Our Services for More Discounts</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Renters} />
          <ServicesH2>Renters</ServicesH2>
          <ServicesP>
            Coverage for your stuff, in and out of your home
          </ServicesP>
          <ServicesBtn>check our prices</ServicesBtn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Home} />
          <ServicesH2>Homeowners</ServicesH2>
          <ServicesP>Wall to wall coverage, and beyond...</ServicesP>
          <ServicesBtn>check our prices</ServicesBtn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Car} />
          <ServicesH2>Car</ServicesH2>
          <ServicesP>Protect your car, passengers, and the planet</ServicesP>
          <ServicesBtn>check our prices</ServicesBtn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Pet} />
          <ServicesH2>Pet</ServicesH2>
          <ServicesP>Health insurance for furry family members</ServicesP>
          <ServicesBtn>check our prices</ServicesBtn>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
