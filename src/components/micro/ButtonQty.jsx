const ButtonQty = () => {
    return (
      <>
        <div className="flex items-center">
          <p className="font-normal text-xl italic mb-[12px] mr-[10px]">Quantity:</p>
          <div className="w-[100px] flex justify-between">
            <button className="font-bold text-xl text-color-light bg-color-primary hover:bg-color-secondary w-[51px] p-2 rounded-l-xl">
              -
            </button>
            <span className="font-bold text-xl text-color-primary text-center bg-color-accent1 p-2 w-[115px]">
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
  
  export default ButtonQty;
  
  