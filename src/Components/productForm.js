import React, { useState } from 'react';
import { useCart } from './cartContext';
import Cart from './cart';


const ProductForm = ({ addProduct }) => {
  const [medicine, setMedicine] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();


  const { cartItems} = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.productprice,0);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      medicine,
      description,
      price,
    };
    addProduct(product);
    
    setMedicine('');
    setDescription('');
    setPrice(0);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Medicine:
        <input type="text" value={medicine} onChange={(e) => setMedicine(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
      </label>
      <button type="submit">Add Product</button>
  
    </form>
      <Cart
        cartItems={cartItems}
        calculateTotalPrice={calculateTotalPrice}
      />
      </div>
  );
};

export default ProductForm;
