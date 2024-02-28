/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import OrderDetailCard from "./OrderDetailCard";
import { useState } from "react";

const OrderCard = ({ orders }) => {
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <div className="mx-[30px] md:mx-[135px] border-b-[1px] border-color-primary py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-normal text-xl  lg:text-4xl">
              Order ORD-{orders.id}
            </h3>
          </div>

          <div className="flex items-center">
            <p className="font-bold lg:text-3xl text-color-primary mr-[10px] lg:mr-[130px]">
              {orders.status}
            </p>
            <NavLink
              to={`/payment/${orders.id}/${orders.total}`}
              className="font-bold lg:text-xl"
            >
              <button className="font-bold lg:text-xl text-color-light rounded-xl bg-color-primary hover:bg-color-secondary p-1 md:p-2">
                Pay Now
              </button>
            </NavLink>
          </div>
        </div>

        {/* awal looping untuk detail produk */}

        {showDetail &&
          orders.items.length > 0 &&
          orders.items.map((item, index) => (
            <OrderDetailCard key={index} item={item} />
          ))}

        {/* akhir looping untuk detail produk */}

        <div className="flex justify-between items-center">
          <p className="font-bold text-color-primary text-xl lg:text-3xl">
            Total Price Rp{orders.total}
          </p>
          <button
            onClick={toggleDetail}
            className="font-bold lg:text-xl rounded-xl"
          >
            {showDetail ? "Close" : "Detail"}
          </button>
        </div>
      </div>
    </>
  );
};
export default OrderCard;
