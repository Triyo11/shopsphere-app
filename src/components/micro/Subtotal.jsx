import { useContext } from "react";
import { MyContext } from "../../../utils/myContext";

const Subtotal = () => {
  const { cartData } = useContext(MyContext);
  return (
    <div className="text-right mt-[64px] mr-[83px] mb-6">
      <p className="font-bold text-color-primary text-2xl italic">
        Sub total Rp{cartData.total}
      </p>
    </div>
  );
};
export default Subtotal;
