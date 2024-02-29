// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
/* eslint-disable react/prop-types */
const OrderDetailCard = ({ item }) => {
  const [value, setValue] = useState(`${item.receipt}`);
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="mb-6 flex justify-between items-center ">
        <div className="flex">
          <img
            className="h-[100px] w-[100px] lg:h-[170px] lg:w-[170px] object-fill rounded-[10px]"
            src={item.product.image}
            alt={item.product.name}
          />

          <div className="mt-[10px] lg:mt-[34px] ml-3 md:ml-[35px]">
            <h3 className="font-normal text-xl  lg:text-2xl mb-[5px]">
              {item.product.name}
            </h3>
            <p className="font-bold text-color-primary text-xl lg:text-2xl mb-3">
              Rp{item.total}
            </p>

            {item.receipt === null ? (
              ``
            ) : (
              <div>
                <div>
                  No. Resi: {value}
                  <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                    <button className="ml-1 rounded-md border-[1px] px-1">
                      Copy
                    </button>
                  </CopyToClipboard>
                </div>
                {copied ? <span style={{ color: "red" }}>Copied!</span> : null}
              </div>
            )}
          </div>
        </div>

        <div className="ml-[93px]">
          <p className="font-bold text-xl md:text-2xl text-color-primary">
            {item.quantity}
          </p>
        </div>
      </div>
    </>
  );
};
export default OrderDetailCard;
