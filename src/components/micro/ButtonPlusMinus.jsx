const ButtonPlusMinus = () => {
  return (
    <>
      <div className="bg-color-accent1 w-[170px] ">
        <p className="font-bold text-xl m-2">Quantity:</p>
        <div className="bg-color-primary w-[170px] flex justify-between border-2 border-color-secondary">
          <button className="font-bold text-xl text-color-light  hover:bg-color-secondary w-16 p-2 border-r-2 border-color-secondary">
            -
          </button>
          <span className="font-bold text-xl text-color-light text-center p-2 w-16">
            1
          </span>
          <button className="font-bold text-xl text-color-light hover:bg-color-secondary w-16 p-2 border-l-2 border-color-secondary">
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default ButtonPlusMinus;
