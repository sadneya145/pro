import React, { useState } from 'react';
import ProductCard from './ProductCard';
import FilterSort from './FilterSort';
import { products } from './data';
import './ProductList.css';

const ProductList = ({ cart, setCart, updateQuantity }) => {
  const [sort, setSort] = useState('price-asc');
  const [filter, setFilter] = useState('all');

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'under-100') return product.price < 100;
    if (filter === '100-200') return product.price >= 100 && product.price <= 200;
    return true;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <FilterSort setSort={setSort} setFilter={setFilter} />
      <div className="product-list">
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
