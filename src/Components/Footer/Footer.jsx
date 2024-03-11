import React from "react";
import styled from "styled-components";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png"; 
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LogoText = styled.p`
  color: #383838;
  font-size: 46px;
  font-weight: 700;
`;

const LinksContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  color: #252525;
  font-size: 20px;

  li {
    cursor: pointer;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const IconWrapper = styled.div`
  padding: 10px;
  padding-bottom: 6px;
  background: #fbfbfb;
  border: 1px solid #ebebeb;
`;

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;
  color: #1a1a1a;
  font-size: 20px;

  hr {
    width: 80%;
    border: none;
    border-radius: 10px;
    height: 3px;
    background: #c7c7c7;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={footer_logo} alt="" />
        <LogoText>Sofi Mehndi</LogoText>
      </LogoContainer>
      <LinksContainer>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </LinksContainer>
      <SocialIconsContainer>
        <IconWrapper>
          <img src={instagram_icon} alt="" />
        </IconWrapper>
        <IconWrapper>
          <img src={pinterest_icon} alt="" />
        </IconWrapper>
        <IconWrapper>
          <img src={whatsapp_icon} alt="" />
        </IconWrapper>
      </SocialIconsContainer>
      <CopyrightContainer>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
