// import { NavLink } from "react-router-dom"

const ProductCard = () => {
  return (
    <>
      <div className="bg-color-accent1 flex flex-col w-48 h-56 rounded-t-lg font-poppins">
        <img src="https://placehold.co/600x400" className="w-full h-3/5 object-cover"/>
        <div className="p-2">
          <h2 className="font-bold text-md text-color-accent2">Product Name</h2>
          <h2 className="font-semibold text-md text-color-black">Rp 100.000</h2>
        </div>
        <button className="bg-color-primary text-color-light font-semibold w-full rounded-b-lg">Add to cart</button>
      </div>
    </>
  )
}

export default ProductCard