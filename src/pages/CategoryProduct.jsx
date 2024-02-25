import { NavLink, useParams } from "react-router-dom";
import Header from "../components/macro/Header";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import Footer from "../components/macro/Footer";
import { useState, useEffect } from "react";
import { getProductByCategory } from "../../utils/productApiFetch";
import ProductCard from "../components/macro/ProductCard";

const CategoryProduct = () => {
  const { category_id } = useParams();
  const [categoryProductData, setCategoryProductData] = useState([]);

  useEffect(() => {
    const fetchCategoryProduct = async () => {
      const data = await getProductByCategory(category_id);
      setCategoryProductData(data);
    };
    fetchCategoryProduct();
  }, []);
  const keyword = categoryProductData[0]?.category[0];

  return (
    <>
      <Header />
      <div className="font-poppins mt-10 flex flex-col items-center w-full max-h-max pt-3 pb-24">
        <div className="bg-color-light sticky top-16 flex justify-between items-center w-full px-20 py-2">
          <NavLink to={"/"} className="md:visible invisible">
            <FaArrowLeft className="text-5xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full p-2" />
          </NavLink>
          <h2 className="font-bold md:text-3xl text-xl text-color-primary max-w-[50rem] text-center">
            &quot;{keyword}&quot;
          </h2>
          <NavLink to={"/"} className="invisible">
            <FaPlus className="text-5xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full p-2" />
          </NavLink>
        </div>
        <div className="grid min-[1190px]:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[359px]:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-10 md:gap-x-16 gap-x-7 mt-10">
          {categoryProductData.map((product) => (
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
      <Footer />
    </>
  );
};

export default CategoryProduct;
