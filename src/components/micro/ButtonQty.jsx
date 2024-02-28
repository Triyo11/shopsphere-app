// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { MyContext } from "../../../utils/myContext";

const ButtonQty = () => {
  const { quantityAdded, setQuantityAdded } = useContext(MyContext);

  const decreaseQuantity = () => {
    if (quantityAdded > 1) {
      setQuantityAdded(quantityAdded - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantityAdded(quantityAdded + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-normal text-xl italic mb-[12px] mr-[10px]">
        Quantity:
      </p>
      <div className="w-[100px] flex justify-between">
        <button
          className="font-bold text-xl text-color-light bg-color-primary hover:bg-color-secondary w-[51px] p-2 rounded-l-xl"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="font-bold text-xl text-color-primary text-center bg-color-accent1 p-2 w-[115px]">
          {quantityAdded}
        </span>
        <button
          className="font-bold text-xl text-color-light bg-color-primary hover:bg-color-secondary w-[51px] p-2 rounded-r-xl"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonQty;
