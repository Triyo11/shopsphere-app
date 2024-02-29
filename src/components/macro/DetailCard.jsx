import ButtonAddToCart from "../micro/ButtonAddToCart";
import ButtonQty from "../micro/ButtonQty";
import { MyContext } from "../../../utils/myContext.js";
import { useState, useContext } from "react";
import { postCart } from "../../../utils/cartApiFetch";
import ImagePopup from "../micro/ImagePopup.jsx";

// eslint-disable-next-line react/prop-types
const DetailCard = ({ name, price, stock, image, id }) => {
  const [successAdd, setSuccessAdd] = useState(false);
  const [isImagePopup, setIsImagePopup] = useState(false);
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

  const handleImagePopup = () => {
    setIsImagePopup(!isImagePopup);
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-evenly md:gap-0 gap-10 mx-24 max-h-max md:mb-10 mb-5">
        {
          isImagePopup && 
            <div onClick={() => setIsImagePopup(false)} className="bg-color-black/50 w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-20">
              <ImagePopup image={image} setIsImagePopup={setIsImagePopup} />
            </div>
        }

        {/* Bagian Sebelah Kiri */}
        <div onClick={handleImagePopup} className="flex flex-col items-center justify-start cursor-pointer hover:shadow-2xl transition-all duration-300">
          <img
            className="h-[200px] w-[200px] object-fill rounded-[10px]"
            src={image}
            alt=""
          />
        </div>

        {/* Bagian Sebelah Kanan */}
        <div>
          <div className="flex flex-col md:items-start items-center">
            <h3 className="font-normal md:text-2xl text-xl mb-[14px]">{name}</h3>
            <p className="font-bold text-color-primary md:text-2xl text-xl mb-[14px]">
              ${price}
            </p>
            <h3 className="font-normal md:text-2xl text-xl mb-[1vw]">Stock: {stock}</h3>
            <ButtonQty />
            <ButtonAddToCart onClick={updateQuantity} successAdd={successAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
