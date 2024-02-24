// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ButtonQty = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center">
      <p className="font-normal text-xl italic mb-[12px] mr-[10px]">Quantity:</p>
      <div className="w-[100px] flex justify-between">
        <button className="font-bold text-xl text-color-light bg-color-primary hover:bg-color-secondary w-[51px] p-2 rounded-l-xl" onClick={decreaseQuantity}>
          -
        </button>
        <span className="font-bold text-xl text-color-primary text-center bg-color-accent1 p-2 w-[115px]">
          {quantity}
        </span>
        <button className="font-bold text-xl text-color-light bg-color-primary hover:bg-color-secondary w-[51px] p-2 rounded-r-xl" onClick={increaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonQty;
