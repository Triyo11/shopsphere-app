/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom"
import { FaStar } from "react-icons/fa6";

const ManageProductCard = () => {

  return (
    <>
      <div className="bg-color-accent1 shadow-2xl flex flex-col md:w-48 w-36 h-full rounded-lg font-poppins">
        <img src="https://placehold.co/600x400" className="w-full h-3/5 rounded-t-lg object-cover"/>
        <div className="md:p-4 p-2">
          <h2 className="font-bold md:text-md text-sm text-color-accent2">Product Name</h2>
          <h2 className="font-semibold md:text-md text-sm text-color-black">Rp 100.000</h2>
          <div className="flex gap-x-1">
            <div className="text-color-accent2 font-semibold pt-[0.20rem]">4.3</div>
            <FaStar className="fill-color-accent2 my-1 text-xl"/>
          </div>
        </div>
        <button className="bg-color-primary hover:bg-color-accent1 text-color-light hover:text-color-primary font-semibold hover:font-bold transition-all w-full py-2 rounded-b-lg">Edit product</button>
      </div>
    </>
  )
}

export default ManageProductCard