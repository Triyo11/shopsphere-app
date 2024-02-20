/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const LinkCategoryProduct = ({category}) => {
  return (
    <>
      <NavLink to={`/category`} className="text-color-black mx-3 my-2">{category}</NavLink>
    </>
  );
};

export default LinkCategoryProduct;
