import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Marketplace from './Components/Marketplace/Marketplace';
import Info from './Components/info/Info';
import Guide from './Components/Learner_guide/Guide_home';
import Cactus from './Components/Learner_guide/Cactus';
import Bills from './Components/Bills/Bills';

function App() {
  const [orders, setOrders] = useState([]); // State to store orders

  const addOrder = (orderDetails) => {
    setOrders([...orders, orderDetails]);
  };

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/marketplace' element={<Marketplace addOrder={addOrder} />} />
      <Route path='/info' element={<Info />} />
      <Route path='/guide' element={<Guide />} />
      <Route path='/cactus' element={<Cactus />} />
      <Route path='/bills' element={<Bills orders={orders} />} />
    </Routes>
  );
}

export default App;
