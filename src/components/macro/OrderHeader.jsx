const OrderHeader = () => {
    return (
      <>
        <div className="flex items-center  mt-[31px] mb-[75px]">
          <button className="bg-color-primary hover:bg-color-secondary rounded-full ml-[30px] md:ml-[135px]">
            <svg
              width="49px"
              height="49px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              />
              <path
                fill="#fff"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              />
            </svg>
          </button>
          <h2 className="font-bold text-3xl text-color-primary text-center w-full">
            Order status
          </h2>
          <div className="w-[49px] mr-[30px] md:mr-[135px]"></div>
        </div>
      </>
    );
  };
  export default OrderHeader;
  