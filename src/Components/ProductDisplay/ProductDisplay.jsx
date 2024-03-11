import React, { useContext } from "react";
import styled from "styled-components";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplayContainer = styled.div`
  display: flex;
  margin: 0px 170px;
`;

const ProductDisplayLeft = styled.div`
  display: flex;
  gap: 17px;
`;

const ProductDisplayImgList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Img = styled.img`
  display: block;
  height: 163px;
  object-fit: contain;
`;

const MainImg = styled(Img)`
  width: 586px;
  height: 700px;
  object-fit: cover;
`;

const ProductDisplayRight = styled.div`
  margin: 0px 70px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: #3d3d3d;
  font-size: 40px;
  font-weight: 700;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
  gap: 5px;
  color: #1c1c1c;
  font-size: 16px;
`;

const Prices = styled.div`
  display: flex;
  margin: 40px 0px;
  gap: 30px;
  font-size: 24px;
  font-weight: 700;
`;

const PriceOld = styled.div`
  color: #818181;
  text-decoration: line-through;
`;

const PriceNew = styled.div`
  color: #ff4141;
`;

const SizeSection = styled.div`
  margin-top: 55px;
  color: #656565;
  font-size: 20px;
  font-weight: 600;
`;

const Sizes = styled.div`
  display: flex;
  margin: 30px 0px;
  gap: 20px;
`;

const SizeDiv = styled.div`
  padding: 18px 24px;
  background-color: #fbfbfb;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 20px 40px;
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #ff4141;
  margin-bottom: 40px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Category = styled.p`
  margin-top: 10px;
  span {
    font-weight: 600;
  }
`;


const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    console.log("handleAddToCart appelé pour le produit ID:", product ? product._id : "ID inconnu");
    if (product && product._id) {
      console.log("Adding product to cart with ID:", product._id);
      addToCart(product._id);
    } else {
      console.error("Invalid product ID:", product ? product._id : "Product is undefined");
    }
  };
  
  

  return (
    <ProductDisplayContainer>
      <ProductDisplayLeft>
        <ProductDisplayImgList>
          <Img src={product.image} alt="" />
          <Img src={product.image} alt="" />
          <Img src={product.image} alt="" />
          <Img src={product.image} alt="" />
        </ProductDisplayImgList>
        <MainImg src={product.image} alt="" />
      </ProductDisplayLeft>
      <ProductDisplayRight>
        <Heading>{product.name}</Heading>
        <Stars>
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Dull Star" />
          <p>(122)</p>
        </Stars>
        <Prices>
          <PriceOld>${product.old_price}</PriceOld>
          <PriceNew>${product.new_price}</PriceNew>
        </Prices>
        <div className="productdisplay-right-description">
          <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
        </div>
        <SizeSection>Select Size</SizeSection>
        <Sizes>
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <SizeDiv key={size}>{size}</SizeDiv>
          ))}
        </Sizes>
        <Button onClick={handleAddToCart}>ADD TO CART</Button>
        <Category>
          <span>Category : </span>{product.category}
        </Category>
      </ProductDisplayRight>
    </ProductDisplayContainer>
  );
};

export default ProductDisplay;
