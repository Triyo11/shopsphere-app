const OrderDetailCard = () => {
  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex">
          <img
            className="h-[170px] w-[170px] object-fill rounded-[10px]"
            src="https://dummyimage.com/300"
            alt=""
          />

          <div className="mt-[34px] ml-[35px]">
            <h3 className="font-normal  text-4xl mb-[14px]">Product Name</h3>
            <p className="font-bold text-color-primary text-3xl">Rp100.000</p>
          </div>
        </div>

        <div className="ml-[93px]">
            <p className="font-bold text-4xl text-color-primary">5</p>
        </div>
      </div>
    </>
  );
};
export default OrderDetailCard;
