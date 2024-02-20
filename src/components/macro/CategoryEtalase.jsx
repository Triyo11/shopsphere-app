/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import ProductCard from "./ProductCard"

const CategoryEtalase = ({ categoryName }) => {
  return (
    <div className="font-poppins mt-24 bg-color-secondary max-h-max md:px-10 px-5 py-10 rounded-3xl">
      <div className="flex justify-between w-full px-3 pb-2">
        <h2 className="font-bold text-2xl text-color-light">{categoryName}</h2>
        <NavLink to={"/"} className="font-bold text-xl text-color-primary">See more ...</NavLink>
      </div>
      <div className="grid min-[1190px]:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[359px]:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-10 md:gap-x-16 gap-x-7 mt-3">
        <ProductCard stock={0}/>
        <ProductCard stock={10}/>
        <ProductCard stock={10}/>
        <ProductCard stock={0}/>
        <ProductCard stock={10}/>
        <ProductCard stock={10}/>
        <ProductCard stock={0}/>
        <ProductCard stock={0}/>
      </div>
    </div>
  )
}

export default CategoryEtalase