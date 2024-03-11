import React from 'react';
import styled from 'styled-components';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const StyledBreadcrum = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: 600;
  margin: 60px 170px;
  text-transform: capitalize;
`;


const Breadcrum = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <StyledBreadcrum>
       HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </StyledBreadcrum>
  );
};


export default Breadcrum;
