/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ManageProductCard = ({ name, price, image, id }) => {
  return (
    <>
      <div className="bg-color-accent1 hover:shadow-2xl transition-all duration-300 flex flex-col md:w-48 w-36 h-full rounded-lg font-poppins">
        <img src={image} className="w-full h-48 rounded-t-lg object-cover hover:scale-105 ease-in-out transition-all duration-300" />
        <div className="md:p-4 p-2">
          <h2 className="font-bold md:text-md text-sm text-color-accent2">
            {name}
          </h2>
          <h2 className="font-semibold md:text-md text-sm text-color-black">
            ${price}
          </h2>
        </div>
        <NavLink to={`/edit-product/${id}`}>
          <button className="bg-color-primary hover:bg-color-accent1 text-color-light hover:text-color-primary font-semibold hover:font-bold transition-all w-full py-2 rounded-b-lg">
            Edit product
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ManageProductCard;
