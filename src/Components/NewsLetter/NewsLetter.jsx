import React from "react";
import styled from "styled-components";

const NewsletterContainer = styled.div`
  width: 65%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0px 140px;
  margin-bottom: 150px;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  gap: 30px;
`;

const NewsletterTitle = styled.h1`
  color: #454545;
  font-size: 55px;
  font-weight: 600;
`;

const NewsletterParagraph = styled.p`
  color: #454545;
  font-size: 20px;
`;

const NewsletterInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 730px;
  height: 70px;
  border-radius: 80px;
  border: 1px solid #e3e3e3;
`;

const NewsletterInput = styled.input`
  width: 500px;
  margin-left: 30px;
  border: none;
  outline: none;
  color: #616161;
  font-family: Poppins;
  font-size: 16px;
`;

const NewsletterButton = styled.button`
  width: 210px;
  height: 75px;
  border-radius: 80px;
  background: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <NewsletterContainer>
      <NewsletterTitle>Get Exclusive Offers On Your Email</NewsletterTitle>
      <NewsletterParagraph>Subscribe to our newsletter and stay updated</NewsletterParagraph>
      <NewsletterInputContainer>
        <NewsletterInput type="email" placeholder="Your Email Id" />
        <NewsletterButton>Subscribe</NewsletterButton>
      </NewsletterInputContainer>
    </NewsletterContainer>
  );
};

export default NewsLetter;
