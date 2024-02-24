// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import ManageProduct from "./pages/ManageProduct";
import SearchProduct from "./pages/SearchProduct";
import DetailProduct from "./pages/DetailProduct";
import "./style.css";
import { MyContext } from "./../utils/myContext";
import { useState } from "react";
import Payment from "./pages/Payment";
import PaymentSuccess from "./components/macro/PaymentSuccess";
import OrderHistory from "./pages/OrderHistory";

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
            <Route
              path="/search/:keyword"
              element={<SearchProduct keyword={useParams.keyword} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/DetailProduct" element={<DetailProduct />} />
            <Route path="/*" element={<NotFound />} />

            <Route path="/payment_success" element={<PaymentSuccess />} />
            <Route path="/order_history" element={<OrderHistory />} />


          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
