import CartCard from "../components/macro/CartCard";
import CartHeader from "../components/macro/CartHeader";
import ButtonCheckout from "../components/micro/ButtonCheckout";
import Subtotal from "../components/micro/Subtotal";

const CartPage = () => {
  return (
    <>
      <CartHeader />
      <CartCard />
      <CartCard />
      <CartCard />
      <Subtotal />
      <ButtonCheckout />
    </>
  );
};
export default CartPage;
