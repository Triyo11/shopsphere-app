// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "../components/macro/Header";
import Footer from "../components/macro/Footer";
import { useParams } from "react-router-dom";
import { getOrderBySeller, postReceiptOrder } from "../../utils/orderApiFetch";

export default function OrderHistory() {
  const { seller_id } = useParams();
  const [orderSellerData, setOrderSellerData] = useState([]);
  const [receipts, setReceipts] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchOrderSeller = async () => {
      const data = await getOrderBySeller(seller_id);
      if (data.message === "Successfull show") {
        setOrderSellerData(data.orders);
      }
    };
    fetchOrderSeller();
    setTrigger(false);
  }, [seller_id, trigger]);

  const handleReceiptChange = (orderId, newReceipt) => {
    setReceipts((prevReceipts) => {
      const existingReceipt = prevReceipts.find(
        (receipt) => receipt.orderId === orderId
      );
      if (existingReceipt) {
        existingReceipt.receipt = newReceipt;
        return [...prevReceipts];
      } else {
        return [...prevReceipts, { orderId, receipt: newReceipt }];
      }
    });
  };

  const handleSubmit = async (event, orderId) => {
    event.preventDefault();
    const receipt = receipts.find(
      (receipt) => receipt.orderId === orderId
    )?.receipt;
    const data = await postReceiptOrder(seller_id, orderId, receipt);
    if (data.message === "Receipt numbers updated successfully.") {
      setTrigger(true);
    }
    console.log(data);
    console.log(seller_id, orderId, receipt);
  };

  console.log(orderSellerData);

  return (
    <div className="min-h-screen text-center">
      <div className="fixed top-0 z-20 left-0 w-full">
        <Header />
      </div>

      <div className=" py-10  ">
        <h1 className="text-color-secondary text-2xl mb-10 md:pt-5 pt-10 md:relative fixed top-8 z-10 left-0 w-full">
          Order History
        </h1>

        <div className="overflow-scroll-x max-sm:mt-20 md:pt-4 pt-2">
          <div className="w-10/12 mx-auto max-sm:w-fit md:w-11/12  lg:w-11/12  bg-color-light shadow-md  shadow-black pb-4 mb-10">
            <div className=" w-full max-sm:w-full max-sm:text-sm max-sm:font-thin max-sm:gap-24 md:w-full md:text-sm md:gap-10 lg:w-full lg:gap-24 lg:text-md flex justify-center text-color-secondary font-bold gap-24 mb-4 sticky md:top-20 top-32 py-3 glass_pink">
              <p>Order Id</p>
              <p>Image</p>
              <p>Product Name</p>
              <p>Product Price</p>
              <p>Quantity</p>
              <p>Shipping Cost</p>
              <p>Customer</p>
              <p>Status order</p>
            </div>

            {Object.values(orderSellerData).map((orders, index) => (
              <div
                key={index}
                className=" p-2 border-b-[1px] border-color-secondary"
              >
                <div className="flex">
                  <p>{orders.id}</p>
                  <div>
                    {orders.items.map((item, index) => (
                      <div key={index} className="flex-wrap">
                        <div className="flex w-full gap-8 mb-2 max-sm:text-sm md:text-normal lg:text-normal md:gap-6 lg:gap-14">
                          <div className="h-32 border-[1px] border-solid border-color-secondary ml-10 md:w-16 md:h-20 md:ml-6 lg:w-48 lg:h-24 lg:ml-20 max-lg:w-20 ">
                            <img
                              className="object-fit w-full h-full"
                              src={item.product.image}
                              alt=""
                            />
                          </div>

                          <div className="  pl-4 mt-4 md:w-11/12  md:mt-0 lg:w-full ">
                            <div className="flex gap-24 mb-8 md:gap-9 md:mb-3 lg:gap-20">
                              <p>{item.product.name}</p>
                              <p className="ml-12 lg:ml-12">
                                Rp {item.product.price}
                              </p>
                              <p className="ml-14 lg:ml-14">{item.quantity}</p>
                              <p className="ml-14  md:ml-6 lg:ml-12">
                                Rp {item.order.shipping_cost}
                              </p>
                              <p className="ml-8">{orders.user.name}</p>
                              <button
                                type="submit"
                                className="ml-8 md:ml-2 lg:ml-8 bg-color-accent1 text-color-secondary border-2 border-solid border-color-secondary rounded px-2 py-1 cursor-default lg:mr-10 w-20"
                              >
                                {orders.status}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div
                      className={`ml-10 md:ml-6 lg:w-48 lg:ml-20 text-color-secondary ${
                        orders.items[0].receipt === null ? "" : "hidden"
                      } `}
                    >
                      <form
                        onSubmit={(event) => handleSubmit(event, orders.id)}
                        action=""
                        className="py-1 flex gap-4"
                      >
                        <input
                          type="text"
                          className="h-10 w-56 md:h-8 md:w-48 lg:h-10 lg:w-56 rounded border-2 border-solid block px-2   outline-none "
                          placeholder="input no.resi"
                          value={
                            receipts.find(
                              (receipt) => receipt.orderId === orders.id
                            )?.receipt || ""
                          }
                          onChange={(e) =>
                            handleReceiptChange(orders.id, e.target.value)
                          }
                        />

                        <button
                          type="submit"
                          className="bg-color-primary text-normal text-color-light lg:px-8 Lg:py-1 ml-2 md:py-0 md:px-5 max-sm:py-0 max-sm:px-5 cursor-pointer hover:bg-color-secondary shadow-md  shadow-color-secondary "
                        >
                          Send
                        </button>
                      </form>
                    </div>

                    <p
                      className={`text-left ml-10 md:ml-6  lg:ml-20  text-color-secondary ${
                        orders.items[0].receipt === null ? "hidden" : ""
                      } `}
                    >
                      No. Resi:{" "}
                      <span className="font-bold">
                        {orders.items[0].receipt}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer className="fixed" />
    </div>
  );
}
