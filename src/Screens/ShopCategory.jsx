import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import axios from "axios";
import { Link } from "react-router-dom";

const Banner = styled.img`
  display: block;
  margin: 30px auto;
  width: 82%;
`;

const IndexSort = styled.div`
  display: flex;
  margin: 0px 170px;
  justify-content: space-between;
  align-items: center;
`;

const Sort = styled.div`
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid #888;
`;

const Products = styled.div`
  margin: 20px 170px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 80px;
`;

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 150px auto;
  width: 233px;
  height: 69px;
  border-radius: 75px;
  background: #ededed;
  color: #787878;
  font-size: 18px;
  font-weight: 500;
`;

const ShopCategory = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <Banner src={props.banner} alt="" />
      <IndexSort>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <Sort>
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </Sort>
      </IndexSort>
      <Products>
        {products.map((item, idx) => {
          if (props.category === item.category) {
            return (
              <Link key={idx} to={`/product/${item._id}`}>
                <Item
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </Products>
      <LoadMore>Explore More</LoadMore>
    </div>
  );
};

export default ShopCategory;
