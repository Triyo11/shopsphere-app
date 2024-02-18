import ButtonPlusMinus from "../micro/ButtonPlusMinus";
import Checkbox from "../micro/Checkbox";

const CartCard = () => {
  return (
    <>
      <div className="ml-[63px] mb-6 flex justify-between items-center">
        <div className="flex">
          <div className="flex items-center">
            <Checkbox />
            <img
              className="h-[170px] w-[170px] object-fill rounded-[10px]"
              src="https://dummyimage.com/300"
              alt=""
            />
          </div>
          <div className="mt-[34px] ml-[35px]">
            <h3 className="font-normal  text-4xl mb-[14px]">Product Name</h3>
            <p className="font-bold text-color-primary text-3xl">Rp100.000</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <ButtonPlusMinus />
          </div>
          <div className="mr-[83px] ml-[93px]">
            <img className="" src="public\assets\rubbish-bin.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartCard;
