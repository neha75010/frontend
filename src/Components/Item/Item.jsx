import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 350px;
  &:hover {
    transform: scale(1.05);
    transition: 0.6s;
  }
`;

const ItemParagraph = styled.p`
  margin: 6px 0px;
`;

const ItemPrices = styled.div`
  display: flex;
  gap: 20px;
`;

const ItemPriceNew = styled.div`
  color: #374151;
  font-size: 18px;
  font-weight: 600;
`;

const ItemPriceOld = styled.div`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: 500;
  text-decoration: line-through;
`;

const Item = (props) => {
  return (
    <StyledItem>
      
        <div onClick={() => window.scrollTo(0, 0)}>
          <img src={props.image} alt={props.name} />
        </div>
      
      <ItemParagraph>{props.name}</ItemParagraph>
      <ItemPrices>
        <ItemPriceNew>${props.new_price}</ItemPriceNew>
        <ItemPriceOld>${props.old_price}</ItemPriceOld>
      </ItemPrices>
    </StyledItem>
  );
};

export default Item;
