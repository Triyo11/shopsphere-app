import { useContext } from "react";
import { MyContext } from "../../../utils/myContext";

const Subtotal = () => {
  const { cartData, checkedItems } = useContext(MyContext);

  let total = cartData.cart
    .filter((item) => checkedItems.includes(item.id)) // filter items with id in checkedItems
    .reduce((sum, item) => sum + item.total, 0); // sum up the total of those items

  return (
    <div className="text-right mt-[64px] mr-[83px] mb-6">
      <p className="font-bold text-color-primary text-2xl italic">
        Sub total Rp{total}
      </p>
    </div>
  );
};
export default Subtotal;
