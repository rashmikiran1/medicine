import React from 'react';
import Modal from './Modal';

const Cart = ({ cartItems, calculateTotalPrice}) => {
  return (
    <Modal>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>
         {item.productName}- Price: ${item.productprice}
          </p>
        </div>
      ))}
      <p>Total Price: ${calculateTotalPrice()}</p>
    </Modal>
  );
};

export default Cart;
