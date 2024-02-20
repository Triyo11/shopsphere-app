/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MyContext } from "../../../utils/myContext";
import { deleteCartProduct } from "../../../utils/api";

const ButtonDelete = ({ item }) => {
  const { setDeletedCart } = useContext(MyContext);

  const handleDelete = async () => {
    const deleteProduct = await deleteCartProduct(item.id);
    setDeletedCart(deleteProduct);
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="mr-[35px] md:mr-[83px] ml-[30px] lg:ml-[93px]"
      >
        <img
          className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
          src="public\assets\rubbish-bin.png"
          alt=""
        />
      </button>
    </>
  );
};

export default ButtonDelete;
