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
import { postOrder } from "../../utils/orderApiFetch";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  //Consume ContextAPI
  const { cartData, setCartData, addCart, deletedCart } = useContext(MyContext);
  const navigate = useNavigate();

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

  //Proses Order:
  // eslint-disable-next-line no-unused-vars
  const { checkedItems, setCheckedItems } = useContext(MyContext);

  const handleCheckout = async (checkedItems) => {
    try {
      const response = await postOrder(checkedItems);
      const data = await response;
      if (data.message === "Order placed successfully") {
        navigate("/order");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            {cartData.cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
            <Subtotal />
            <ButtonCheckout onClick={() => handleCheckout(checkedItems)} />
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
