import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import './Marketplace.css';

const Marketplace = ({ addOrder }) => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const handleCheckout = () => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const orderDetails = {
      items: cart,
      total: totalAmount,
      date: new Date().toISOString(),
    };
    
    addOrder(orderDetails); // Add order details to the parent component's state
    setCart([]); // Clear the cart after checkout
    setOpenCart(false); // Close cart
  };

  return (
    <div>
      <div className='topbar-1'>
        <div className="logo">
          <img src="https://static-00.iconduck.com/assets.00/leaf-icon-1394x2048-ij4dulk2.png" alt="Logo" />
        </div>
        <Link to='/'><strong>Leafling</strong></Link>
        <div className='icons-1'>
          <div className="icon-item">
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png' alt="Home" />
            <Link to='/home'></Link>
          </div>
          <div className="icon-item">
            <img src="https://cdn-icons-png.flaticon.com/128/847/847969.png" alt="Profile" />
            <Link to='/profile'></Link>
          </div>
          <div className="icon-item">
            <img src="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=bell" alt="Notification" />
            <Link to='/notifications'></Link>
          </div>
        </div>
        <div className="search-bar-2">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="icon-item">
          <button className="cart-button" onClick={handleOpenCart}>
            View Cart
          </button>
        </div>
      </div>

      <div className="mainpage-1">
        <div className="sidebar-1">
          <ul>
            <li><img src="https://cdn-icons-png.flaticon.com/128/628/628324.png" alt="Plants" /><Link to="/plants">Plants</Link></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/2917/2917734.png" alt="Gardening Tools" /><Link to="/tools">Gardening Tools</Link></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/10912/10912867.png" alt="Seeds" /><Link to="/seeds">Seeds</Link></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/10415/10415565.png" alt="Soil" /><Link to="/soil">Soil</Link></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/3072/3072498.png" alt="Fertilizers" /><Link to="/fertilizers">Fertilizers</Link></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/4837/4837957.png" alt="Planters" /><Link to="/planters">Planters</Link></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/4837/4837957.png" alt="Bills" /><Link to="/bills">Bills</Link></li>
          </ul>
        </div>

        <div className="content-2">
          <ProductList cart={cart} setCart={setCart} updateQuantity={updateQuantity} />

          {openCart && (
            <Cart 
              cart={cart} 
              open={openCart} 
              onClose={handleCloseCart} 
              updateQuantity={updateQuantity} 
              onCheckout={handleCheckout} // Pass the checkout function to Cart
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
