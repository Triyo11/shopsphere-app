import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const CartHeader = () => {
  return (
    <>
      <div className="bg-color-light sticky top-16 flex justify-between items-center w-full px-20 pt-4 pb-6">
        <NavLink to={"/"} className="md:visible invisible">
          <FaArrowLeft className="text-5xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full p-2" />
        </NavLink>
        <h2 className="font-bold md:text-3xl text-xl text-color-primary max-w-[50rem] text-center">
          Your Cart:
        </h2>
        <NavLink to={"/"} className="invisible">
          <FaPlus className="text-5xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full p-2" />
        </NavLink>
      </div>
    </>
  );
};
export default CartHeader;
