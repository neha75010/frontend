import React, { useState, createContext, useCallback, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching products: " + error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const defaultCartItems = {};
      products.forEach(product => {
        defaultCartItems[product._id] = {
          ...product,
          quantity: 0
        };
      });
      setCartItems(defaultCartItems);
    }
  }, [products]);
  
  const addToCart = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId]) {
        updatedCartItems[productId].quantity += 1;
      } else {
        const productToAdd = products.find(product => product._id === productId);
        updatedCartItems[productId] = {...productToAdd, quantity: 1};
      }
      
      return updatedCartItems;
    });
  };
  
  const removeFromCart = useCallback((itemId) => {
    setCartItems((prevCartItems) => {
      if (!prevCartItems[itemId] || prevCartItems[itemId].quantity <= 0) {
        console.error("Item not in cart or quantity is 0");
        return { ...prevCartItems };
      }
  
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[itemId].quantity > 1) {
        updatedCartItems[itemId].quantity -= 1;
      } else {
        delete updatedCartItems[itemId];
      }
  
      return updatedCartItems;
    });
  }, []);
  

  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [id, product]) => {
      const matchedProduct = products.find((p) => p._id === id);
      return total + (matchedProduct ? matchedProduct.new_price * product.quantity : 0);
    }, 0);
  }, [cartItems, products]);
  
  const getTotalCartItems = useCallback(() => {
    return Object.values(cartItems).reduce((total, product) => total + product.quantity, 0);
  }, [cartItems]);
  

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    products,
    cartItems,
    addToCart,
    removeFromCart,
    loading,
    error,
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
