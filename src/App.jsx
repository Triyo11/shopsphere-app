// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ManageProduct from "./pages/ManageProduct";
import "./style.css";
import { MyContext } from "./../utils/myContext";
import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [deletedCart, setDeletedCart] = useState([]);
  const [orderData, setOrderData] = useState([]);

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
          orderData,
          setOrderData,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage-product" element={<ManageProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
