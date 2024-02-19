import ButtonPlusMinus from "../micro/ButtonPlusMinus";
import ButtonPlusMinusFlex from "../micro/ButtonPlusMinusFlex";
import Checkbox from "../micro/Checkbox";

const CartCard = () => {
  return (
    <>
      <div className="md:ml-[63px] mb-6 flex justify-between items-center">
        <div className="flex">
          <div className="flex items-center">
            <Checkbox />
            <img
              className="h-[100px] w-[100px] lg:h-[170px] lg:w-[170px] object-fill rounded-[10px]"
              src="https://dummyimage.com/300"
              alt=""
            />
          </div>
          <div className="sm:mt-[10px] lg:mt-[30px] ml-[35px] max-w-44 sm:max-w-[300px] xl:max-w-[480px]">
            <h3 className="line-clamp-2 font-normal text-xl lg:text-3xl sm:mb-[14px]">
              Product Name Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="font-bold text-color-primary text-xl lg:text-3xl">
              Rp100.000
            </p>
            <div className="sm:hidden">
              <ButtonPlusMinusFlex />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden sm:block">
            <ButtonPlusMinus />
          </div>
          <div className="mr-[35px] md:mr-[83px] ml-[30px] lg:ml-[93px]">
            <img
              className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
              src="public\assets\rubbish-bin.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartCard;
