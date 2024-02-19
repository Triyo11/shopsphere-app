const OrderDetailCard = () => {
  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex">
          <img
            className="h-[100px] w-[100px] lg:h-[170px] lg:w-[170px] object-fill rounded-[10px]"
            src="https://dummyimage.com/300"
            alt=""
          />

          <div className="mt-[10px] lg:mt-[34px] ml-3 md:ml-[35px]">
            <h3 className="font-normal text-xl  lg:text-4xl mb-[14px]">Product Name</h3>
            <p className="font-bold text-color-primary text-xl lg:text-3xl">Rp100.000</p>
          </div>
        </div>

        <div className="ml-[93px]">
            <p className="font-bold text-xl md:text-4xl text-color-primary">5</p>
        </div>
      </div>
    </>
  );
};
export default OrderDetailCard;
