import { useContext } from "react";
import { postCart } from "../../../utils/api";
import { MyContext } from "../../../utils/myContext";

/* eslint-disable react/prop-types */

const ButtonPlusMinusFlex = ({ item }) => {
  const { setAddCart } = useContext(MyContext);
  const updateQuantity = async (amount) => {
    const addCart = await postCart({
      product_id: item.product_id,
      quantity: amount,
    });
    await setAddCart(addCart);
  };

  const handleIncrement = () => {
    updateQuantity(1);
  };

  const handleDecrement = () => {
    updateQuantity(-1);
  };
  return (
    <>
      <div className=" w-[100px] lg:w-[170px] mt-2 flex items-center justify-between">
        <button
          onClick={handleDecrement}
          className="font-bold text-md text-color-light bg-color-primary  hover:bg-color-secondary w-[51px] md:p-2 rounded-l-xl"
        >
          -
        </button>
        <span className="font-bold text-md text-color-primary text-center bg-color-accent1 md:p-2 w-[115px] ">
          {item.quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="font-bold text-md text-color-light bg-color-primary hover:bg-color-secondary w-[51px]  md:p-2 rounded-r-xl"
        >
          +
        </button>
      </div>
    </>
  );
};
export default ButtonPlusMinusFlex;
