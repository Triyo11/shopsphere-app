/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const LinkCategoryProduct = ({ category, category_id }) => {
  return (
    <>
      <NavLink
        to={`/category/${category_id}`}
        className="text-color-black mx-3 my-2"
      >
        {category}
      </NavLink>
    </>
  );
};

export default LinkCategoryProduct;
