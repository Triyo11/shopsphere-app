// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css'


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/register' element={ <Register/> }/>
        </Routes>
      </BrowserRouter>
      
      <CartPage />
      <CheckoutPage />

     
    </>
  );
}

export default App;
