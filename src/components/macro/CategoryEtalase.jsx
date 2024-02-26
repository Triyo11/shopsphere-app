/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductByCategory } from "../../../utils/productApiFetch";
import { useEffect, useState } from "react";

const CategoryEtalase = ({ categoryName, category_id }) => {
  // Mengambil data product berdasarkan category_id
  const [categoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    const fetchCategoryProduct = async () => {
      const data = await getProductByCategory(category_id);
      setCategoryProduct(data);
    };
    fetchCategoryProduct();
  }, [category_id]);

  return (
    <div className="font-poppins mt-24 bg-color-secondary max-h-max md:px-10 px-5 py-10 rounded-3xl">
      <div className="flex justify-between w-full px-3 pb-2">
        <h2 className="font-bold text-2xl text-color-light">{categoryName}</h2>
        <NavLink
          to={`/category/${category_id}`}
          className="font-bold text-xl text-color-primary"
        >
          See more ...
        </NavLink>
      </div>
      <div className="grid min-[1190px]:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[359px]:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-10 md:gap-x-16 gap-x-7 mt-3">
        {categoryProduct.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            stock={product.inventory}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryEtalase;
