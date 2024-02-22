import { NavLink, useLocation } from "react-router-dom";
import Header from "../components/macro/Header";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import ManageProductCard from "../components/macro/ManageProductCard";
import Footer from "../components/macro/Footer";

const SearchProduct = () => {
  const location = useLocation();
  const keyword = location.pathname.split("/").pop();

  return (
    <>
      <Header />
      <div className="font-poppins mt-10 flex flex-col items-center w-full max-h-max pt-3 pb-24">
        <div className="bg-color-light sticky top-20 flex justify-between items-center w-full px-20 py-2">
          <NavLink to={"/"}>
            <FaArrowLeft className="text-5xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full p-2" />
          </NavLink>
          <h2 className="font-bold text-3xl text-color-primary">Search for &quot;{keyword} ...&quot;</h2>
          <NavLink to={"/"} className="invisible">
            <FaPlus className="text-5xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full p-2" />
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

export default SearchProduct