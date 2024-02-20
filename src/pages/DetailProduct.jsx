import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const DetailProductPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-11 w-full">
        <div className="flex flex-col gap-[26px] justify-start w-full">
          <Header className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[135px] md:px-5 w-3/4 md:w-full">
            <Button
              className="flex h-[49px] items-center justify-center rounded-[24px] w-[49px]"
              color="blue_gray_100"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[38px]"
                src="images/img_pharrowleft.svg"
                alt="pharrowleft"
              />
            </Button>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-start justify-start mt-[25px] w-[90%] md:w-full">
              <div className="flex flex-col gap-[35px] items-start justify-start w-[46%] md:w-full">
                <div className="bg-gray-400_01 h-[372px] rounded-[10px] w-full"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInterBold32"
                >
                  Detail product
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[372px] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterRegular40"
                >
                  Product name
                </Text>
                <Text
                  className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInterBold32"
                >
                  Rp 100.000
                </Text>
                <Text
                  className="mt-[19px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInterRegular32"
                >
                  Stock: 10
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between mt-[38px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInterRegular32Black900"
                  >
                    Quantity
                  </Text>
                  <div className="bg-blue_gray-100 flex flex-row gap-[15px] items-start justify-end px-[15px] rounded-[10px]">
                    <Text
                      className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtInterBold32"
                    >
                      -
                    </Text>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[115px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                      shape="square"
                      color="gray_400_02"
                      size="sm"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Text
                      className="mt-3 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtInterBold32"
                    >
                      +
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold italic leading-[normal] min-w-[227px] mt-12 md:text-3xl sm:text-[28px] text-[32px] text-center"
                  shape="round"
                  color="blue_gray_100"
                  size="lg"
                  variant="fill"
                >
                  Add to cart
                </Button>
              </div>
            </div>
            <div className="bg-gray-600 h-[125px] ml-2.5 md:ml-[0] mt-[30px] w-[99%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductPage;
