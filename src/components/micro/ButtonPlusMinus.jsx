import { useContext } from "react";
import { postCart } from "../../../utils/api";
import { MyContext } from "../../../utils/myContext";

/* eslint-disable react/prop-types */

const ButtonPlusMinus = ({ item }) => {
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
      <div className="lg:w-[170px] text-center">
        <p className="font-normal text-2xl italic mb-[12px]">Quantity:</p>
        <div className=" w-[100px] lg:w-[170px] flex justify-between">
          <button
            onClick={handleDecrement}
            className="font-bold text-xl text-color-light bg-color-primary  hover:bg-color-secondary w-[51px] md:p-2 rounded-l-xl"
          >
            -
          </button>
          <span className="font-bold text-2xl text-color-primary text-center bg-color-accent1 md:p-2 w-[115px]">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="font-bold text-xl text-color-light bg-color-primary hover:bg-color-secondary w-[51px] md:p-2 rounded-r-xl"
          >
            +
          </button>
        </div>
      </div>
      
    </>
  );
};
export default ButtonPlusMinus;
