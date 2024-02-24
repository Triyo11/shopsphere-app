// eslint-disable-next-line react/prop-types
const ButtonCheckout = ({ onClick, successAdd }) => {
  return (
    <>
      <div className="w-[135px] flex justify-center pt-5 pb-5">
        {" "}
        {/* Menggunakan flexbox untuk membuat tombol menyesuaikan lebar layar */}
        <button
          className="font-bold text-0.5xl text-color-light py-4 px-6 rounded-xl bg-color-primary hover:bg-color-secondary"
          onClick={onClick}
          style={{ width: "100%", maxWidth: "400px" }} // Menambahkan style untuk lebar maksimum dan responsif
        >
          {successAdd === true ? "Added" : "Add to cart"}
        </button>
      </div>
    </>
  );
};
export default ButtonCheckout;
