/* eslint-disable no-unused-vars */
import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const EditProfilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[71px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[135px] mt-[26px] md:px-5 w-[47%] md:w-full">
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
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtInterRegular32"
            >
              Your Profile
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[927px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-auto">
              <div className="bg-gray-400_03 h-[250px] rounded-[50%] w-[250px]"></div>
              <Button
                className="cursor-pointer leading-[normal] min-w-[163px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                shape="round"
                color="gray_400_03"
                size="sm"
                variant="fill"
              >
                edit photo
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[53px] w-[61%] md:w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    Name
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[90px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    User
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[279px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    Edit
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    Email
                  </Text>
                  <Text
                    className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    email@email.com
                  </Text>
                  <Text
                    className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    Edit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    Password
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[38px] sm:mt-0 mt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    h***********p
                  </Text>
                  <Text
                    className="mb-[3px] sm:ml-[0] ml-[154px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterRegular28"
                  >
                    Edit
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer leading-[normal] min-w-[184px] md:ml-[0] ml-[267px] mr-[829px] mt-9 sm:text-2xl md:text-[26px] text-[28px] text-center"
            shape="round"
            color="gray_400_03"
            size="md"
            variant="fill"
          >
            open store
          </Button>
          <Text
            className="md:ml-[0] ml-[342px] mt-[13px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtInterRegular28"
          >
            or
          </Text>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[247px] mt-2 md:px-5 w-[17%] md:w-full">
            <Button
              className="cursor-pointer leading-[normal] min-w-[217px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="gray_400_03"
              size="md"
              variant="fill"
            >
              manage store
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
