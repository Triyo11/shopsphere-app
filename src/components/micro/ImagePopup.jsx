/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from "react-icons/io";

const ImagePopup = ({ image, setIsImagePopup }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-fit h-fit flex flex-col items-end">
        <button onClick={() => setIsImagePopup(false)}>
          <IoIosCloseCircleOutline className="text-4xl text-color-light mb-2"/>
        </button>
        <img src={image} className="w-full h-96"/>
      </div>
    </div>
  )
}

export default ImagePopup