import React from "react";
import styled from "styled-components";

const DescriptionBoxContainer = styled.div`
  margin: 120px 170px;
`;

const Navigator = styled.div`
  display: flex;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  width: 171px;
  height: 70px;
  border: 1px solid #d0d0d0;

  &.fade {
    background: #fbfbfb;
    color: #555;
  }
`;

const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  border: 1px solid #d0d0d0;
  padding: 48px;
  padding-bottom: 70px;
`;

const DescriptionBox = () => {
  return (
    <DescriptionBoxContainer>
      <Navigator>
        <NavBox>Description</NavBox>
        <NavBox className="fade">Reviews (122)</NavBox>
      </Navigator>
      <DescriptionContent>
        <p>
          An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet. it serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </DescriptionContent>
    </DescriptionBoxContainer>
  );
};

export default DescriptionBox;
