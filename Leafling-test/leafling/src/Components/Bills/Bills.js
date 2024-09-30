import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './Bills.css';

const stripePromise = loadStripe('your_stripe_public_key');

const Bills = ({ orders }) => {
  const handlePay = async (order) => {
    const stripe = await stripePromise;

    // Call your backend to create the PaymentIntent
    const response = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: order.total * 100 }), // amount in cents
    });

    const { clientSecret } = await response.json();

    // Confirm the payment
    const result = await stripe.confirmCardPayment(clientSecret);

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      alert(result.error.message);
    } else {
      // Payment succeeded
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
      }
    }
  };

  return (
    <div className="bills">
      <h2>Your Bills</h2>
      {orders.length === 0 ? (
        <p>No bills available.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="bill">
            <h3>Bill #{index + 1}</h3>
            <p>Date: {new Date(order.date).toLocaleString()}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <button onClick={() => handlePay(order)}>Pay Now</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Bills;
