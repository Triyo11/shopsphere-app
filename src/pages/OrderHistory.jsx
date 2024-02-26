// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/macro/Header";
import Footer from "../components/macro/Footer";

export default function OrderHistory() {
  return (
    <div className="min-h-screen text-center">
      <div className="fixed top-0 z-20 left-0 w-full">
        <Header />
      </div>

      <div className=" py-10  ">
        <h1 className="text-color-secondary text-2xl mb-10 md:pt-5 pt-10 md:relative fixed top-8 z-10 left-0 w-full">Order History</h1>

        <div className="overflow-scroll-x max-sm:mt-20 md:pt-4 pt-2">
          <div className="w-10/12 mx-auto max-sm:w-fit md:w-11/12  lg:w-11/12  bg-color-light rounded shadow-md  shadow-black pb-4 mb-10">
            <div className=" w-full max-sm:w-full max-sm:text-sm max-sm:font-thin max-sm:gap-24 md:w-full md:text-sm md:gap-10 lg:w-full lg:gap-24 lg:text-md flex justify-center text-color-secondary font-bold gap-24 mb-8 sticky md:top-20 top-32 py-3 glass_pink">
              <p>Image</p>
              <p>Product Name</p>
              <p>Product Price</p>
              <p>Quantity</p>
              <p>Total Price</p>
              <p>Customer</p>
              <p>Status order</p>
            </div>

            <div className=" max-w-max flex gap-8 mb-10 max-sm:text-sm md:text-normal lg:text-normal md:gap-6 lg:gap-14">
              <div className=" w-40 h-32 border-2 border-solid border-color-secondary ml-10 md:w-16 md:h-20 md:ml-6 lg:w-48 lg:h-24 lg:ml-20 max-lg:w-20 ">
                <img src="" alt="" />
              </div>

              <div className="  pl-4 mt-4 md:w-11/12  md:mt-0 lg:w-full ">
                <div className="flex gap-24 mb-8 md:gap-9 md:mb-3 lg:gap-20">
                  <p>Lennovo</p>
                  <p className="ml-12 lg:ml-12">Rp 20000</p>
                  <p className="ml-14 lg:ml-14">2</p>
                  <p className="ml-14  md:ml-6 lg:ml-12">Rp 40000</p>
                  <p className="ml-8">Ratna</p>
                  <button
                    type="submit"
                    className="ml-8 md:ml-2 lg:ml-8 bg-color-accent1 text-color-secondary border-2 border-solid border-color-secondary rounded px-4 py-1 cursor-default lg:mr-10"
                  >
                    Unpaid
                  </button>
                </div>

                <div className="  text-color-secondary  mt-3">
                  <form action="" className="py-1 flex gap-4">
                    <input
                      type="text"
                      className="h-10 w-56 md:h-8 md:w-48 lg:h-10 lg:w-56 rounded border-2 border-solid block px-2   outline-none "
                      placeholder="input no.resi"
                    />

                    <button
                      type="submit"
                      className="bg-color-primary text-normal text-color-light lg:px-8 Lg:py-1 ml-2 md:py-0 md:px-5 max-sm:py-0 max-sm:px-5 cursor-pointer hover:bg-color-secondary shadow-md  shadow-color-secondary "
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className=" w-full flex gap-8 mb-10 max-sm:text-sm md:text-normal lg:text-normal md:gap-6 lg:gap-14">
              <div className=" w-40 h-32 border-2 border-solid border-color-secondary ml-10 md:w-16 md:h-20 md:ml-6 lg:w-48 lg:h-24 lg:ml-20 max-lg:w-20 ">
                <img src="" alt="" />
              </div>

              <div className=" w-full pl-4 mt-4 md:w-11/12  md:mt-0 lg:w-full ">
                <div className="flex gap-24 mb-8 md:gap-9 md:mb-3 lg:gap-20">
                  <p>Lennovo</p>
                  <p className="ml-12 lg:ml-12">Rp 20000</p>
                  <p className="ml-14 lg:ml-14">2</p>
                  <p className="ml-14  md:ml-6 lg:ml-12">Rp 40000</p>
                  <p className="ml-8">Ratna</p>
                  <button
                    type="submit"
                    className="ml-8 md:ml-2 lg:ml-8 bg-color-accent1 text-color-secondary border-2 border-solid border-color-secondary rounded px-4 py-1 cursor-default lg:mr-10"
                  >
                    Unpaid
                  </button>
                </div>

                <div className="  text-color-secondary  mt-3">
                  <form action="" className="py-1 flex gap-4">
                    <input
                      type="text"
                      className="h-10 w-56 md:h-8 md:w-48 lg:h-10 lg:w-56 rounded border-2 border-solid block px-2   outline-none "
                      placeholder="input no.resi"
                    />

                    <button
                      type="submit"
                      className="bg-color-primary text-normal text-color-light lg:px-8 Lg:py-1 ml-2 md:py-0 md:px-5 max-sm:py-0 max-sm:px-5 cursor-pointer hover:bg-color-secondary shadow-md  shadow-color-secondary "
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className=" w-full flex gap-8 mb-10 max-sm:text-sm md:text-normal lg:text-normal md:gap-6 lg:gap-14">
              <div className=" w-40 h-32 border-2 border-solid border-color-secondary ml-10 md:w-16 md:h-20 md:ml-6 lg:w-48 lg:h-24 lg:ml-20 max-lg:w-20 ">
                <img src="" alt="" />
              </div>

              <div className=" w-full pl-4 mt-4 md:w-11/12  md:mt-0 lg:w-full ">
                <div className="flex gap-24 mb-8 md:gap-9 md:mb-3 lg:gap-20">
                  <p>Lennovo</p>
                  <p className="ml-12 lg:ml-12">Rp 20000</p>
                  <p className="ml-14 lg:ml-14">2</p>
                  <p className="ml-14  md:ml-6 lg:ml-12">Rp 40000</p>
                  <p className="ml-8">Ratna</p>
                  <button
                    type="submit"
                    className="ml-8 md:ml-2 lg:ml-8 bg-color-accent1 text-color-secondary border-2 border-solid border-color-secondary rounded px-4 py-1 cursor-default lg:mr-10"
                  >
                    Unpaid
                  </button>
                </div>

                <div className="  text-color-secondary  mt-3">
                  <form action="" className="py-1 flex gap-4">
                    <input
                      type="text"
                      className="h-10 w-56 md:h-8 md:w-48 lg:h-10 lg:w-56 rounded border-2 border-solid block px-2   outline-none "
                      placeholder="input no.resi"
                    />

                    <button
                      type="submit"
                      className="bg-color-primary text-normal text-color-light lg:px-8 Lg:py-1 ml-2 md:py-0 md:px-5 max-sm:py-0 max-sm:px-5 cursor-pointer hover:bg-color-secondary shadow-md  shadow-color-secondary "
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className=" w-full flex gap-8 mb-10 max-sm:text-sm md:text-normal lg:text-normal md:gap-6 lg:gap-14">
              <div className=" w-40 h-32 border-2 border-solid border-color-secondary ml-10 md:w-16 md:h-20 md:ml-6 lg:w-48 lg:h-24 lg:ml-20 max-lg:w-20 ">
                <img src="" alt="" />
              </div>

              <div className=" w-full pl-4 mt-4 md:w-11/12  md:mt-0 lg:w-full ">
                <div className="flex gap-24 mb-8 md:gap-9 md:mb-3 lg:gap-20">
                  <p>Lennovo</p>
                  <p className="ml-12 lg:ml-12">Rp 20000</p>
                  <p className="ml-14 lg:ml-14">2</p>
                  <p className="ml-14  md:ml-6 lg:ml-12">Rp 40000</p>
                  <p className="ml-8">Ratna</p>
                  <button
                    type="submit"
                    className="ml-8 md:ml-2 lg:ml-8 bg-color-accent1 text-color-secondary border-2 border-solid border-color-secondary rounded px-4 py-1 cursor-default lg:mr-10"
                  >
                    Unpaid
                  </button>
                </div>

                <div className="  text-color-secondary  mt-3">
                  <form action="" className="py-1 flex gap-4">
                    <input
                      type="text"
                      className="h-10 w-56 md:h-8 md:w-48 lg:h-10 lg:w-56 rounded border-2 border-solid block px-2   outline-none "
                      placeholder="input no.resi"
                    />

                    <button
                      type="submit"
                      className="bg-color-primary text-normal text-color-light lg:px-8 Lg:py-1 ml-2 md:py-0 md:px-5 max-sm:py-0 max-sm:px-5 cursor-pointer hover:bg-color-secondary shadow-md  shadow-color-secondary "
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer className="fixed" />
    </div>
  );
}
