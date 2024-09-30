import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, cart, addToCart, updateQuantity }) => {
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      {cartItem ? (
        <div className="quantity-controls">
          <button onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}>+</button>
        </div>
      ) : (
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
