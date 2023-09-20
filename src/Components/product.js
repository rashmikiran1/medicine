import React from 'react';
import { useCart } from './cartContext';

const Product = ({ medicine, description, price}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
      addToCart(medicine, price, description) ;
    }

  return (
    <div>
        <div style={{display:'flex', justifySelf:'baseline'}}>
      <div>&nbsp;&nbsp;&nbsp;{medicine}</div>
      <div>&nbsp;&nbsp;&nbsp;{description}</div>
      <div>&nbsp;&nbsp;&nbsp;Price: ${price}</div>
      <div>
        <button onClick={() => handleAddToCart()}>Add to cart</button>
      </div>
      </div>
    </div>
  );
};

export default Product;
