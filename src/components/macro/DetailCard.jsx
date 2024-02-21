import ButtonAddToCart from "../micro/ButtonAddToCart";
import ButtonQty from "../micro/ButtonQty";

const DetailCard = () => {
  return (
    <>
      <div className="shadow-2xl rounded-lg pt-10 ml-[63px] mr-[63px] mb-6 flex justify-between items-center">
        <div className="flex">
          <img
            className="h-[300px] w-[300px] object-fill rounded-[10px] ml-[5vw] mr-[10vw]"
            src="https://lh3.googleusercontent.com/-yM_AuhEwYVQ/V5WMpsR7ARI/AAAAAAAABYo/crluWTceUFw/monyet.jpg"
            alt=""
          />
          <div>
            <h3 className="font-normal text-2xl mb-[14px]">Product Name</h3>
            <p className="font-bold text-color-primary text-2xl mb-[14px]">Rp100.000</p>
            <h3 className="font-normal text-2xl mb-[5vw]">Stock: 10</h3>
            <ButtonQty />
            <ButtonAddToCart />
          </div>
        </div>
      </div>
      <div className="ml-[63px] mb-6 flex justify-between items-center">
        <div></div> {/* Placeholder untuk gambar */}
      </div>
    </>
  );
};
export default DetailCard;
