import React from "react";
import styled from "styled-components";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
  display: flex;
`;

const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 180px;
  line-height: 1.1;
`;

const HeroTitle = styled.h2`
  color: #090909;
  font-size: 26px;
  font-weight: 600;
`;

const HeroParagraph = styled.p`
  color: #171717;
  font-size: 100px;
  font-weight: 700;
`;

const HeroHandIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 105px;
    display: block;
  }
`;

const HeroLatestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 310px;
  height: 70px;
  border-radius: 75px;
  margin-top: 30px;
  background-color: #ff4141;
  color: white;
  font-size: 22px;
  font-weight: 500;
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroTitle>New Arrivals Only</HeroTitle>
        <HeroHandIcon>
          <p>new</p>
          <img src={hand_icon} alt="" />
        </HeroHandIcon>
        <HeroParagraph>collections</HeroParagraph>
        <HeroParagraph>for everyone</HeroParagraph>
        <HeroLatestButton>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </HeroLatestButton>
      </HeroLeft>
      <HeroRight>
        <img src={hero_image} alt="" />
      </HeroRight>
    </HeroContainer>
  );
};

export default Hero;
