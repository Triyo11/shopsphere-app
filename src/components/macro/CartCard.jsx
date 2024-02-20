/* eslint-disable react/prop-types */
import ButtonDelete from "../micro/ButtonDelete";
import ButtonPlusMinus from "../micro/ButtonPlusMinus";
import ButtonPlusMinusFlex from "../micro/ButtonPlusMinusFlex";
import Checkbox from "../micro/Checkbox";

const CartCard = ({ item }) => {
  return (
    <div className="md:ml-[63px] mb-6 flex justify-between items-center">
      <div className="flex">
        <div className="flex items-center">
          <Checkbox />
          <img
            className="h-[100px] w-[100px] lg:h-[170px] lg:w-[170px] object-fill rounded-[10px]"
            src={item.product.image}
            alt={item.product.name}
          />
        </div>
        <div className="sm:mt-[10px] lg:mt-[30px] ml-[35px] max-w-44 sm:max-w-[300px] xl:max-w-[480px]">
          <h3 className="line-clamp-2 font-normal text-xl lg:text-3xl sm:mb-[14px]">
            {item.product.name}
          </h3>
          <p className="font-bold text-color-primary text-xl lg:text-3xl">
            Rp{item.total}
          </p>
          <div className="sm:hidden">
            <ButtonPlusMinusFlex item={item} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden sm:block">
          <ButtonPlusMinus item={item} />
        </div>
        <ButtonDelete item={item} />
      </div>
    </div>
  );
};
export default CartCard;
