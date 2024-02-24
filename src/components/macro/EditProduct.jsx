const product = {
  id: 1,
  name: "TV",
  price: 1000,
  description: "This is the best product of all time",
  inventory: 100,
  image: "public/assets/astronaut_spacesuit_reflection_144426_3840x2160.jpg",
  category: "Furniture",
};

const EditProduct = () => {
  return (
    <div className="">
      <div className="font-bold text-5xl py-16 text-center  ">
        <h1 className="text-5xl font-bold space-x-3 ">
          <span className="text-color-primary max-sm:text-2xl md:text-4xl lg:text-5xl">
            Edit
          </span>
          <span className="text-slate-800 max-sm:text-2xl md:text-4xl lg:text-5xl">
            Product
          </span>
          <img
            className=" h-24 w-full"
            src="public/assets/—Pngtree—shadow straight line transparent png_7961413.png"
            alt=""
          />
        </h1>
      </div>
      <div className="mx-48 mb-48 flex-auto rounded-xl shadow-2xl py-4">
        <div className="mx-16 flex-2 w-64 space-y-12">
          <div className="mt-10 grid-cols-1 gap-x-6 gap-y-8 ">
            <div className="max-sm:2xl md:4xl lg:5xl">
              <label
                htmlFor="Product Name"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Product Name"
                    id="Product Name"
                    autoComplete="Product Name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Baju bagus"
                    defaultValue={product.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-16 flex-2 w-64 space-y-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="sm:col-span-4">
              <label
                htmlFor="Product Name"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Price"
                    id="Price"
                    autoComplete="Price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Rp 20.000"
                    defaultValue={product.price}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-16 flex-2 w-64 space-y-12">
          <div>
            <label className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 text-xl font-medium leading-16 text-gray-900 w-32 ">
              Category
            </label>

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8">
              <select
                type="text"
                className="flex rounded-md shadow-sm py-2 pl-4 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                defaultValue={product.category}
              >
                <input></input>
                <option>Fashion</option>
                <option>Electronic</option>
                <option>Furniture</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mx-16 flex-2 w-64 space-y-12">
          <div className="mt-10 grid grid-cols-1">
            <div className="sm:col-span-4">
              <label
                htmlFor="Product Name"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Description"
                    id="Description"
                    autoComplete="Description"
                    className="block flex-1 border-0 bg-color-light rounded-lg py-10 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="..."
                    defaultValue={product.description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-16 flex-2 w-64 space-y-12">
          <div className="mt-10 grid grid-cols-1">
            <div className="sm:col-span-4">
              <label
                htmlFor="Product Name"
                className="block text-xl font-medium leading-6 text-gray-900"
              >
                Inventory
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Inventory"
                    id="Inventory"
                    autoComplete="Inventory"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="100"
                    defaultValue={product.inventory}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-16 flex-2 w-64 col-span-full">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <label
              htmlFor="cover-photo"
              className="block text-xl font-medium leading-6 text-gray-900"
            >
              Edit photo
            </label>
          </div>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <img
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
                src="https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text-thumbnail.png"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className="no-underline hover:underline text-blue-500">
                    Upload a file
                  </span>

                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className=" mx-16 flex-1 w-64 mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-bold text-l text-color-light py-3 px-5 rounded-xl bg-color-primary hover:bg-color-secondary transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
