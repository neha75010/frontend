import React from "react";
import styled from "styled-components";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 90vh;
`;

const Title = styled.h1`
  color: #171717;
  font-size: 50px;
  font-weight: 600;
`;

const Separator = styled.hr`
  width: 200px;
  height: 6px;
  border-radius: 10px;
  background: #252525;
`;

const ItemsContainer = styled.div`
  margin: 50px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap; 
`;

const RelatedProducts = () => {
  return (
    <RelatedProductsContainer>
      <Title>Related Products</Title>
      <Separator />
      <ItemsContainer>
        {data_product.map((item, idx) => (
          <Item
            key={idx}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </ItemsContainer>
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;
