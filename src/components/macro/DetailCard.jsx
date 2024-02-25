import ButtonAddToCart from "../micro/ButtonAddToCart";
import ButtonQty from "../micro/ButtonQty";
import { MyContext } from "../../../utils/myContext.js";
import { useState, useContext } from "react";
import { postCart } from "../../../utils/cartApiFetch";

// eslint-disable-next-line react/prop-types
const DetailCard = ({ name, price, stock, image, id }) => {
  const [successAdd, setSuccessAdd] = useState(false);
  const { setAddCart, quantityAdded } = useContext(MyContext);

  const updateQuantity = async () => {
    const Cart = await postCart({
      product_id: id,
      quantity: quantityAdded,
    });
    await setAddCart(Cart);
    //set timeout to remove the added message
    setSuccessAdd(true);
    setTimeout(() => {
      setSuccessAdd(false);
    }, 1000);
  };

  return (
    <>
      <div className="md:flex flex-row justify-center items-start w-full">
        {/* Bagian Sebelah Kiri */}
        <div className="flex flex-col items-center justify-start pb-20 pt-5">
          <div className="overflow-hidden">
            <img
              className="h-[320px] w-[320px] object-fill rounded-[10px] ml-[5vw] mr-[10vw] md:mr-[25vw]"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* Bagian Sebelah Kanan */}
        <div className="items-start pt-5 mr-20">
          <div className="flex flex-col items-start pl-[25vw] md:pl-[10%]">
            <h3 className="font-normal text-2xl mb-[14px]">{name}</h3>
            <p className="font-bold text-color-primary text-2xl mb-[14px]">
              Rp{price}
            </p>
            <h3 className="font-normal text-2xl mb-[5vw]">Stock: {stock}</h3>
            <ButtonQty />
            <ButtonAddToCart onClick={updateQuantity} successAdd={successAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
