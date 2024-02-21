// eslint-disable-next-line react/prop-types
const ButtonCheckout = ({ onClick }) => {
    return (
      <>
        <div className="text-right mr-[83px] mb-[109px] mt-[32px]">
          <button className="font-bold text-xl text-color-light py-4 px-6 rounded-xl bg-color-primary hover:bg-color-secondary" onClick={onClick}>
            Add To cart
          </button>
        </div>
      </>
    );
  };
  export default ButtonCheckout;
  