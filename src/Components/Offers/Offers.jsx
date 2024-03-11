import React from "react";
import styled from "styled-components";
import exclusive_image from "../Assets/exclusive_image.png";

const OffersContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  margin: auto;
  padding: 0px 140px;
  margin-bottom: 150px;
  background: linear-gradient(180deg, #fed1ff 0%, #e1ffea22 60%);
`;

const OffersLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #171717;
    font-size: 80px;
    font-weight: 600;
  }

  p {
    color: #171717;
    font-size: 22px;
    font-weight: 600;
  }

  button {
    width: 282px;
    height: 70px;
    border-radius: 35px;
    background: #ff4141;
    border: none;
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
  }
`;

const OffersRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 50px;
`;

const Offers = () => {
  return (
    <OffersContainer>
      <OffersLeft>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Seller Products</p>
        <button>Check Now</button>
      </OffersLeft>
      <OffersRight>
        <img src={exclusive_image} alt="" />
      </OffersRight>
    </OffersContainer>
  );
};

export default Offers;
