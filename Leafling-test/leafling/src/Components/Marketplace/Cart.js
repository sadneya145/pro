import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, open, onClose, updateQuantity, onCheckout }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Calculate total amount
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleCheckout = () => {
    // Call the passed onCheckout function to update the parent component's state
    onCheckout();
    
    // Redirect to the bills page
    navigate('/bills');
    
    // Clear the cart in the parent component (already handled in the onCheckout function)
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className='close-button-container'>
        <button className='close-button' onClick={onClose}>Close Cart</button>
        {cart.length > 0 && (
          <div>
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
