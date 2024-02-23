/* eslint-disable no-unused-vars */
import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import OrderCard from "../components/macro/OrderCard";
import OrderHeader from "../components/macro/OrderHeader";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../utils/myContext";
import { getOrder } from "../../utils/orderApiFetch";

const OrderPage = () => {
  //Consume ContextAPI
  const { orderData, setOrderData } = useContext(MyContext);

  //Fungsi yang mengtriger getCart api
  useEffect(() => {
    const fetchCart = async () => {
      const data = await getOrder();
      setOrderData(data);
    };
    fetchCart();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <OrderHeader />
      <div className="flex-grow">
        {orderData.orders ? (
          <>
            {orderData.orders.map((orders, index) => (
              <OrderCard key={index} orders={orders} />
            ))}
          </>
        ) : (
          <p className="font-bold text-color-primary text-3xl text-center">
            {orderData.message}
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default OrderPage;
