import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSection-styles";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer  id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Insurance, For The Stuff That Matters The Most</HeroH1>
        <HeroP>See how we can help you today</HeroP>
        <HeroBtnWrapper>
          <Button
            to="home"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            fontBig="false"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
