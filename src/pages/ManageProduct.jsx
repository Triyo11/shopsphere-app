import { NavLink } from "react-router-dom"
import ProductCard from "../components/macro/ProductCard"

const ManageProduct = () => {
  return (
    <>
      <div className="font-poppins mt-10">
      <div className="flex justify-between items-center w-full px-7">
        <h2 className="font-bold text-2xl text-color-primary">All products :</h2>
        <NavLink to={"/"} className=" text-lg bg-color-secondary text-color-light p-2 rounded-lg">Add product</NavLink>
      </div>
      <div className="list-product flex justify-center items-baseline flex-wrap md:gap-8 gap-10 mt-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    </>
  )
}

export default ManageProduct