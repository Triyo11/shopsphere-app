/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, putProduct } from "../../../utils/productApiFetch";

const EditProduct = () => {
  const { product_id } = useParams();
  const Navigate = useNavigate();

  const [photo, setPhoto] = useState("");
  const [photoObject, setPhotoObject] = useState([]);
  const [urlPhoto, setUrlPhoto] = useState("");
  const [dataChanged, setDataChanged] = useState([]);
  const cloudName = "dbqbijf9v";
  const uploadPreset = "shopsphere";

  // // fetch GET PRODUCT BY ID
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProductById = async () => {
      const data = await getProductById(product_id);
      let newData = {
        ...data,
        category: data.category[0],
      };
      delete newData.created_at;
      delete newData.updated_at;
      delete newData.rating;
      delete newData.seller_id;

      setProduct(newData);
      setPhoto(newData.image);
    };
    fetchProductById();
  }, [product_id]);

  const handleUploadPhoto = async () => {
    const data = new FormData();
    data.append("file", photoObject);
    data.append("upload_preset", uploadPreset);
    data.append("folder", "shopsphere2");
    await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const url = data.url;
        setUrlPhoto(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const data = {
      name: document.getElementById("ProductName").value,
      price: Number(document.getElementById("Price").value),
      description: document.getElementById("Description").value,
      inventory: Number(document.getElementById("Inventory").value),
      category_id: Number(document.getElementById("Category").value),
      image: urlPhoto,
    };
    setDataChanged(data);
  }, [urlPhoto]);

  console.log(dataChanged);

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    await handleUploadPhoto();
  };

  useEffect(() => {
    const putProductData = async (dataChanged, product_id) => {
      const response = await putProduct(dataChanged, product_id);
      if (response.message === "product has been updated") {
        Navigate("/manage-product");
      }
    };
    putProductData(dataChanged, product_id);
  }, [dataChanged]);

  // console.log(dataChanged);

  return (
    <div className="font-poppins w-full">
      <div className="font-bold text-5xl pt-16 text-center  ">
        <h1 className="text-5xl flex flex-col items-center font-bold space-x-3 ">
          <h2 className="text-color-primary max-sm:text-2xl md:text-4xl lg:text-5xl">
            Edit <span className="text-color-secondary"> Product</span>
          </h2>
        </h1>
      </div>
      <div className="md:mx-48 mx-2 md:mb-48 mb-2 flex flex-col justify-center rounded-xl shadow-2xl p-8">
        <form onSubmit={handleSaveProduct}>
          <label
            htmlFor="ProductName"
            className="block text-xl font-medium leading-6"
          >
            Product Name
          </label>
          <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
            <input
              type="text"
              name="ProductName"
              id="ProductName"
              className="block flex-1 border-0 bg-transparent py-2 px-4 ring-2 ring-color-secondary focus:ring-color-primary outline-none rounded-sm sm:text-sm sm:leading-6"
              placeholder="What do you sell?"
              defaultValue={product.name}
              required
            />
          </div>
          <label
            htmlFor="Price"
            className="pt-4 block text-xl font-medium leading-6"
          >
            Price
          </label>
          <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
            <input
              type="number"
              name="Price"
              id="Price"
              className="block flex-1 border-0 bg-transparent py-2 px-4 ring-2 ring-color-secondary focus:ring-color-primary outline-none rounded-sm sm:text-sm sm:leading-6"
              placeholder="How much do you sell?"
              min="0"
              defaultValue={product.price}
              required
            />
          </div>
          <label
            htmlFor="Category"
            className="pt-4 grid grid-cols-1 gap-x-6 gap-y-8 text-xl font-medium leading-16 w-32 "
          >
            Category
          </label>
          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8">
            <select
              id="Category"
              name="Category"
              className="text-md flex rounded-md outline-0 shadow-sm py-2 pl-4 ring-2 ring-inset ring-color-secondary focus-within:ring-2 focus-within:ring-inset focus-within:ring-color-primary sm:max-w-md"
              defaultValue={product.category}
              required
            >
              <option disabled value="">
                Choose category
              </option>
              <option value={1}>Fashion</option>
              <option value={2}>Furniture</option>
              <option value={3}>Electronic</option>
              <option value={4}>Tools</option>
              <option value={5}>Food</option>
            </select>
          </div>
          <label
            htmlFor="Description"
            className="pt-4 block text-xl font-medium leading-6"
          >
            Description
          </label>
          <div className="mt-2 flex gap-x-6 gap-y-8">
            <textarea
              id="Description"
              name="Description"
              rows="7"
              cols="100"
              placeholder="How you describe your product?"
              className="p-4 ring-2 rounded-md ring-color-secondary focus:ring-color-primary outline-none"
              defaultValue={product.description}
              required
            />
          </div>
          <label
            htmlFor="Inventory"
            className="pt-4 block text-xl font-medium leading-6"
          >
            Inventory
          </label>
          <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
            <input
              type="number"
              name="Inventory"
              id="Inventory"
              className="block flex-1 border-0 bg-transparent py-2 px-4 ring-2 ring-color-secondary focus:ring-color-primary outline-none rounded-sm sm:text-sm sm:leading-6"
              placeholder="How many do you have?"
              min="0"
              defaultValue={product.inventory}
              required
            />
          </div>
          <h2 className="pt-4 block text-xl font-medium leading-6">
            Add photo
          </h2>
          <label
            htmlFor="Photo"
            className="relative cursor-pointer rounded-md bg-white font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
          >
            <span className="no-underline hover:underline">Upload a photo</span>
          </label>
          <input
            id="Photo"
            name="Photo"
            type="file"
            className="sr-only"
            onChange={(e) => {
              setPhotoObject(e.target.files[0]);
              setPhoto(URL.createObjectURL(e.target.files[0]));
            }}
            required
          />
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="flex flex-col items-center">
              {photo.length > 0 ? (
                <img src={photo} />
              ) : (
                <img src={product.image} />
              )}
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-x-6">
            <NavLink
              to={"/manage-product"}
              type="button"
              className="text-sm font-semibold leading-6 text-color-dark py-3 px-5 rounded-xl transition duration-500 ease-in-out bg-color-light hover:bg-color-primary transform hover:-translate-y-1 hover:scale-110"
            >
              Cancel
            </NavLink>
            <input
              type="submit"
              value={"Save"}
              className="cursor-pointer font-bold text-l text-color-light py-3 px-5 rounded-xl bg-color-primary hover:bg-color-secondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
