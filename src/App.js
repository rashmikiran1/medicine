import React, { useState } from 'react';
import ProductForm from './Components/productForm';
import Product from './Components/product';
import { CartProvider } from './Components/cartContext';


const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <CartProvider>
      <div>
        <h1>Medical Store</h1>
        <ProductForm addProduct={addProduct} />
        {products.map((product, index) => (
          <Product
            key={index}
            medicine={product.medicine}
            description={product.description}
            price={product.price}
          />
        ))}
        
      </div>
    </CartProvider>
  );
};

export default App;
