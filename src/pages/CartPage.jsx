/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import CartCard from "../components/macro/CartCard";
import CartHeader from "../components/macro/CartHeader";
import ButtonCheckout from "../components/micro/ButtonCheckout";
import Subtotal from "../components/micro/Subtotal";
import { MyContext } from "../../utils/myContext";
import { getCart } from "../../utils/cartApiFetch";
import Header from "../components/macro/Header";
import Footer from "../components/macro/Footer";

const CartPage = () => {
  //Consume ContextAPI
  const { cartData, setCartData, addCart, deletedCart } = useContext(MyContext);

  //Fungsi yg ngatur lama pesan muncul
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    setShowMessage(true);
    if (addCart.message) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [addCart.message]);

  //Fungsi yang mengtriger getCart api
  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCart();
      setCartData(data);
    };
    fetchCart();
  }, [addCart, deletedCart]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <CartHeader />
        <div className="mb-auto flex justify-center items-center pb-4">
          {showMessage && addCart.message && (
            <p className="text-center text-color-secondary absolute">
              {addCart.message}
            </p>
          )}
        </div>

        {cartData.cart && cartData.cart.length > 0 ? (
          <>
            {cartData.cart.map((item, index) => (
              <CartCard key={index} item={item} />
            ))}
            <Subtotal />
            <ButtonCheckout />
          </>
        ) : (
          <p className="font-bold text-color-primary text-3xl text-center">
            {cartData.message}
          </p>
        )}

        <Footer />
      </div>
    </>
  );
};
export default CartPage;
