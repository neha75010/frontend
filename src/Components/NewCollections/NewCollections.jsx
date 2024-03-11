import React from "react";
import styled from "styled-components";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 100px;
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
  background-color: #252525;
`;

const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 50px;
  gap: 30px;
`;

const NewCollections = () => {
  return (
    <NewCollectionsContainer>
      <Title>NEW COLLECTIONS</Title>
      <Separator />
      <CollectionsGrid>
        {new_collection.map((item, idx) => (
          <Item
            key={idx}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </CollectionsGrid>
    </NewCollectionsContainer>
  );
};

export default NewCollections;
