import React, { useContext, useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import axios from 'axios';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
`;

const CartItemsContainer = styled.div`
  margin: 100px 170px;
`;

const CartItemsHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  text-align: center;
  padding: 20px 0;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  align-items: center;
  padding: 20px 0;
  ${props => props.isRemoving && css`animation: ${fadeOut} 0.5s ease-out forwards;`}
`;

const ProductIcon = styled.img`
  width: 100px;
  object-fit: contain;
`;

const QuantityButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
`;

const RemoveIcon = styled.img`
  cursor: pointer;
  width: 20px;
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const CartTotal = styled.div`
  flex: 1;
`;

const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const PromoCode = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PromoInputBox = styled.div`
  display: flex;
  align-items: center;
  background: #eaeaea;
  border-radius: 5px;
  padding: 0 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;



const CartItems = () => {
  const { getTotalCartAmount, cartItems, removeFromCart, products } = useContext(ShopContext);
  const [error, setError] = useState('');
  const [removingId, setRemovingId] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  console.log("CartItems:", cartItems);
  console.log("Products:", products);
  useEffect(() => {
    const fetchData = async () => {
      try {
       await axios.get(`http://localhost:3001/products`);
        setIsLoading(false);
      } catch (error) {
        setError('Erreur lors du chargement des produits depuis l\'API');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRemove = async (id) => {
  setRemovingId(id);
  try {
    await removeFromCart(id);
    setRemovingId(null);
    setMessage('Item removed successfully!');
    setTimeout(() => setMessage(''), 3000); 
  } catch (e) {
    setError(e.message);
    setRemovingId(null);
    setMessage(e.message);
    setTimeout(() => setMessage(''), 3000);
  }
};


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <CartItemsContainer>
      {message && <div style={{ color: 'green', textAlign: 'center', margin: '10px 0' }}>{message}</div>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <CartItemsHeader>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </CartItemsHeader>
      <hr />
      {cartItems && Object.keys(cartItems).map((id, idx) => {
  const product = cartItems[id];
  if (product.quantity > 0) {
    return (
      <React.Fragment key={idx}>
        <CartItem isRemoving={removingId === id}> {/* Utilisez id au lieu de product.id */}
          <ProductIcon src={product.image} alt="" />
          <p>{product.name}</p>
          <p>${product.new_price}</p>
          <QuantityButton>{product.quantity}</QuantityButton>
          <p>${product.new_price * product.quantity}</p>
          <RemoveIcon src={remove_icon} onClick={() => handleRemove(id)} alt="Remove" /> {/* Utilisez id au lieu de product.id */}
        </CartItem>
        <hr />
      </React.Fragment>
    );
  }
  return null;
})}

      <CartSummary>
        <CartTotal>
          <h1>Cart Total</h1>
          <TotalItem>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </TotalItem>
          <hr />
          <TotalItem>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </TotalItem>
          <SubmitButton>PROCEED TO CHECKOUT</SubmitButton>
        </CartTotal>
        <PromoCode>
          <p>If you have a promo code, Enter it here</p>
          <PromoInputBox>
            <Input type="text" placeholder="promo code" />
            <SubmitButton>Submit</SubmitButton>
          </PromoInputBox>
        </PromoCode>
      </CartSummary>
    </CartItemsContainer>
  );
};

export default CartItems;
