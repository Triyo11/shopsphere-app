import ButtonAddToCart from "../micro/ButtonAddToCart";
import ButtonQty from "../micro/ButtonQty";

const DetailCard = () => {
  return (
    <>
      <div className="md:flex flex-row justify-center items-start w-full">
       {/* Bagian Sebelah Kiri */}
        <div className="flex flex-col items-center justify-start pb-20 pt-5">
          <div className="overflow-hidden">
           <img
             className="h-[320px] w-[320px] object-fill rounded-[10px] ml-[5vw] mr-[10vw] md:mr-[25vw]"
             src="https://lh3.googleusercontent.com/-yM_AuhEwYVQ/V5WMpsR7ARI/AAAAAAAABYo/crluWTceUFw/monyet.jpg"
             alt=""
           />
          </div>
        </div>

        {/* Bagian Sebelah Kanan */}
        <div className="items-start pt-5 mr-20">
        <div className="flex flex-col items-start pl-[25vw] md:pl-[10%]">
             <h3 className="font-normal text-2xl mb-[14px]">Product Name</h3>
             <p className="font-bold text-color-primary text-2xl mb-[14px]">Rp100.000</p>
             <h3 className="font-normal text-2xl mb-[5vw]">Stock: 10</h3>
             <ButtonQty />
             <ButtonAddToCart />
        </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;