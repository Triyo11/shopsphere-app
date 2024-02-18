const ButtonPlusMinus = () => {
  return (
    <>
      <div className="w-[170px] text-center">
        <p className="font-normal text-2xl italic mb-[12px]">Quantity:</p>
        <div className=" w-[170px] flex justify-between">
          <button className="font-bold text-xl text-color-light bg-color-primary  hover:bg-color-secondary w-[51px] p-2 rounded-l-xl">
            -
          </button>
          <span className="font-bold text-2xl text-color-primary text-center bg-color-accent1 p-2 w-[115px]">
            1
          </span>
          <button className="font-bold text-xl text-color-light bg-color-primary hover:bg-color-secondary w-[51px] p-2 rounded-r-xl">

            +
          </button>
        </div>
      </div>
    </>
  );
};
export default ButtonPlusMinus;
