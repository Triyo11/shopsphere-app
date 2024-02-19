const ButtonPlusMinusFlex = () => {
  return (
    <>
      <div className=" w-[100px] lg:w-[170px] mt-2 flex items-center justify-between">
        <button className="font-bold text-md text-color-light bg-color-primary  hover:bg-color-secondary w-[51px] md:p-2 rounded-l-xl">
          -
        </button>
        <span className="font-bold text-md text-color-primary text-center bg-color-accent1 md:p-2 w-[115px] ">
          1
        </span>
        <button className="font-bold text-md text-color-light bg-color-primary hover:bg-color-secondary w-[51px]  md:p-2 rounded-r-xl">
          +
        </button>
      </div>
    </>
  );
};
export default ButtonPlusMinusFlex;
