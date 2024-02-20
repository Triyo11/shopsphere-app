// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.css";
import { MyContext } from "./../utils/myContext";
import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [deletedCart, setDeletedCart] = useState([]);

  console.log(cartData.cart);

  return (
    <>
      <MyContext.Provider
        value={{
          cartData,
          setCartData,
          addCart,
          setAddCart,
          deletedCart,
          setDeletedCart,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
