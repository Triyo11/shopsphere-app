import OrderDetailCard from "./OrderDetailCard";
import { useState } from "react";

const OrderCard = () => {
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <>
      <div className="mx-[30px] md:mx-[135px] border-b-[1px] border-color-primary py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-normal text-xl  lg:text-4xl">Order ORD-154</h3>
          </div>

          <div className="flex items-center">
            <p className="font-bold lg:text-3xl text-color-primary mr-[10px] lg:mr-[130px]">
              Unpaid
            </p>
            <button className="font-bold lg:text-xl text-color-light rounded-xl bg-color-primary hover:bg-color-secondary p-1 md:p-2">
              Pay Now
            </button>
          </div>
        </div>
        {showDetail && <OrderDetailCard />}
        {showDetail && <OrderDetailCard />}

        <div className="flex justify-between items-center">
          <p className="font-bold text-color-primary text-xl lg:text-3xl">
            Total Rp200.000
          </p>
          <button
            onClick={toggleDetail}
            className="font-bold lg:text-xl rounded-xl"
          >
            {showDetail ? 'Close' : 'Detail'}
          </button>
        </div>
      </div>
    </>
  );
};
export default OrderCard;
