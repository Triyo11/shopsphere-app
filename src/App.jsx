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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-product" element={<ManageProduct />} />
          <Route path="/search/:keyword" element={<SearchProduct keyword={useParams.keyword}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/DetailProduct" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
