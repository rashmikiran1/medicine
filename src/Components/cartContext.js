import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (productName, productprice) => {
    const newItem = { productName, productprice };
    const updatedCart = [...cartItems, newItem];
    
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
