/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom"
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../../utils/myContext";
import { postCart } from "../../../utils/cartApiFetch";
// id={product.id}
// name={product.name}
// price={product.price}
// stock={product.inventory}

const ProductCard = ({ id, stock, name, price, rating, image }) => {
  const [successAdd, setSuccessAdd] = useState(false);
  const { setAddCart } = useContext(MyContext);

  const updateQuantity = async () => {
    const Cart = await postCart({
      product_id: id,
      quantity: 1,
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
      <div className="bg-color-accent1 hover:shadow-2xl transition-all duration-300 flex flex-col md:w-48 w-36 h-full rounded-lg font-poppins">
        <NavLink
          to={`/products/${id}`}
          className="cursor-pointer w-full h-full rounded-t-lg"
        >
          <img
            src={image}
            className="w-full h-48 rounded-t-lg object-cover hover:scale-105 ease-in-out transition-all duration-300"
          />
          <div className="md:p-4 p-2">
            <h2 className="font-bold md:text-md text-sm text-color-accent2 line-clamp-1">
              {name}
            </h2>
            <h2 className="font-semibold md:text-md text-sm text-color-black">
              $ {price}
            </h2>
            <div className="flex gap-x-1 md:mb-0 mb-4">
              <div className="text-color-accent2 font-semibold pt-[0.20rem]">
                {rating}
              </div>
              <FaStar className="fill-color-accent2 my-1 text-xl" />
            </div>
          </div>
        </NavLink>
        {stock > 0 ? (
          <button
            onClick={updateQuantity}
            className="bg-color-primary hover:bg-color-accent1 text-color-light hover:text-color-primary font-semibold hover:font-bold transition-all w-full py-2 rounded-b-lg"
          >
            {successAdd === true ? "Added" : "Add to cart"}
          </button>
        ) : (
          <div className="flex justify-center bg-color-accent1 text-color-black font-semibold w-full py-2 rounded-b-lg">
            Empty
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
