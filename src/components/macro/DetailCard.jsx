import ButtonAddToCart from "../micro/ButtonAddToCart";
import ButtonQty from "../micro/ButtonQty";

const DetailCard = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-start w-full">
        
        {/* Bagian Sebelah Kiri */}
        <div className="flex flex-col items-center justify-start w-1/2 pb-20">
          <div className="overflow-hidden">
           <img
             className="h-[300px] w-[300px] object-fill rounded-[10px] ml-[5vw] mr-[10vw]"
             src="https://lh3.googleusercontent.com/-yM_AuhEwYVQ/V5WMpsR7ARI/AAAAAAAABYo/crluWTceUFw/monyet.jpg"
             alt=""
           />
          </div>
        </div>

        {/* Bagian Sebelah Kanan */}
        <div className="flex flex-col items-start justify-start w-1/2 p-2 align-self-start">
             <h3 className="font-normal text-2xl mb-[14px]">Product Name</h3>
             <p className="font-bold text-color-primary text-2xl mb-[14px]">Rp100.000</p>
             <h3 className="font-normal text-2xl mb-[5vw]">Stock: 10</h3>
             <ButtonQty />
             <ButtonAddToCart />
        </div>
      </div>
    </>
  );
};

export default DetailCard;







// const DetailCard = () => {
//   return (
//     <>
//       <div className="shadow-xl rounded-lg pt-10 ml-[63px] mb-6 flex justify-between items-center">
//         <div className="flex">
//           <img
//             className="h-[300px] w-[300px] object-fill rounded-[10px] ml-[5vw] mr-[10vw]"
//             src="https://lh3.googleusercontent.com/-yM_AuhEwYVQ/V5WMpsR7ARI/AAAAAAAABYo/crluWTceUFw/monyet.jpg"
//             alt=""
//           />
//           <div>
//             <h3 className="font-normal text-2xl mb-[14px]">Product Name</h3>
//             <p className="font-bold text-color-primary text-2xl mb-[14px]">Rp100.000</p>
//             <h3 className="font-normal text-2xl mb-[5vw]">Stock: 10</h3>
//             <ButtonQty />
//             <ButtonAddToCart />
//           </div>
//         </div>
//       </div>
//       <div className="ml-[63px] mb-6 flex justify-between items-center">
//         <div></div> {/* Placeholder untuk gambar */}
//       </div>
//     </>
//   );
// };
// export default DetailCard;
