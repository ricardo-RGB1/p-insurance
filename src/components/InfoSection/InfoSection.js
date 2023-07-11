import React from "react";
import { Button } from "../Button";
import { BsRobot } from "react-icons/bs";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoSection-styles";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  opacity,
  imgTop,
  center,
  robot,
  maxWidth,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart} imgTop={imgTop}>
            <Column1>
              <TextWrapper maxWidth={maxWidth}>
                <TopLine center={center}>{topLine}</TopLine> 
                <Heading center={center} lightText={lightText}>{headline}  <BsRobot size={25} color="#FF3775" display={robot ? 'inline-block' : 'none'} padding={30} /></Heading>
                <Subtitle darkText={darkText} center={center}>{description}</Subtitle>
                <BtnWrap  opacity={opacity ? 1 : 0}>
                  <Button to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};


export default InfoSection;
