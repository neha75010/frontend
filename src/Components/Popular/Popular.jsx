import React from "react";
import styled from "styled-components";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 90vh;
`;

const PopularTitle = styled.h1`
  color: #171717;
  font-size: 50px;
  font-weight: 600;
`;

const PopularSeparator = styled.hr`
  width: 200px;
  height: 6px;
  border-radius: 10px;
  background-color: #252525;
`;

const PopularItems = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const Popular = () => {
  return (
    <PopularContainer>
      <PopularTitle>POPULAR IN WOMEN</PopularTitle>
      <PopularSeparator />
      <PopularItems>
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
      </PopularItems>
    </PopularContainer>
  );
};

export default Popular;
