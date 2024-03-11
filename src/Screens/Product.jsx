import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import axios from "axios";

const Product = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    const url = `http://localhost:3001/products/${_id}`;
    axios.get(url)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        setError('Erreur lors de la récupération du produit. Veuillez réessayer plus tard.');
      });
  }, [_id]);
  
  return (
    
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Breadcrum product={product} />
      {product && <ProductDisplay product={product} />}
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
