import "./style.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
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
import Payment from "./pages/Payment";
import AddProduct from "./pages/AddProductPage";
import PaymentSuccess from "./components/macro/PaymentSuccess";
import OrderHistory from "./pages/OrderHistory";
import Cookies from "js-cookie";
import { MyContext } from "./../utils/myContext";
import { getProfile } from "../utils/profileApiFetch";
import EditProductPage from "./pages/EditProductPage";
import CategoryProduct from "./pages/CategoryProduct";

function App() {
  const [cartData, setCartData] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [deletedCart, setDeletedCart] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [productData, setProductData] = useState([]);
  const [quantityAdded, setQuantityAdded] = useState(1);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const fetchProfileData = async () => {
        const data = await getProfile();
        setUserData(data);
      };
      fetchProfileData();
    }
  }, []);

  return (
    <>
      <MyContext.Provider
        value={{
          quantityAdded,
          setQuantityAdded,
          userData,
          setUserData,
          cartData,
          setCartData,
          addCart,
          setAddCart,
          deletedCart,
          setDeletedCart,
          orderData,
          setOrderData,
          checkedItems,
          setCheckedItems,
          productData,
          setProductData,
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
            <Route
              path="/payment/:order_id/:order_total"
              element={<Payment />}
            />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/profile" element={<EditProfile />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route
              path="/edit-product/:product_id"
              element={<EditProductPage />}
            />
            <Route path="/manage-product" element={<ManageProduct />} />
            <Route path="/products/:product_id" element={<DetailProduct />} />
            <Route
              path="/category/:category_id"
              element={<CategoryProduct />}
            />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
