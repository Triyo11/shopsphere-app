import { NavLink } from "react-router-dom"
import Header from "../components/macro/Header"
import Footer from "../components/macro/Footer"
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import ManageProductCard from "../components/macro/ManageProductCard";

const ManageProduct = () => {
  return (
    <>
      <Header />
      <div className="font-poppins mt-10 flex flex-col items-center w-full max-h-max pt-3 pb-24">
        <div className="bg-color-light sticky top-16 flex justify-between items-center w-full md:px-20 px-10 py-2">
          <NavLink to={"/"}>
            <FaArrowLeft className="md:text-5xl text-3xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full md:p-2 p-1" />
          </NavLink>
          <h2 className="font-bold md:text-3xl text-xl text-center text-color-primary">Manage My Product</h2>
          <NavLink to={"/"}>
            <FaPlus className="md:text-5xl text-3xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full md:p-2 p-1" />
          </NavLink>
        </div>
        <div className="grid min-[1190px]:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[359px]:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-10 md:gap-x-16 gap-x-7 mt-10">
          <ManageProductCard />
          <ManageProductCard />
          <ManageProductCard />
          <ManageProductCard />
          <ManageProductCard />
          <ManageProductCard />
          <ManageProductCard />
          <ManageProductCard />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ManageProduct