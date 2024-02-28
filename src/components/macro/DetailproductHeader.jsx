import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


const DetailProductHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center sticky top-16 py-2 md:px-60 px-16 z-10 bg-color-light mt-[25px] mb-[25px]">
        <button onClick={() => navigate(-1)} className="bg-color-primary hover:bg-color-secondary rounded-full">
          <FaArrowLeft className="md:text-5xl text-3xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full md:p-2 p-1" />
        </button>
        <h2 className="font-bold md:text-3xl text-xl text-color-primary text-center w-full">
          Detail Product
        </h2>
        <button onClick={() => navigate(-1)} className="bg-color-primary hover:bg-color-secondary rounded-full invisible">
          <FaArrowLeft className="md:text-5xl text-3xl fill-color-light bg-color-primary hover:bg-color-secondary rounded-full md:p-2 p-1" />
        </button>
      </div>
    </>
  );
};
export default DetailProductHeader;
  