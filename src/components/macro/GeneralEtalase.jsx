import ProductCard from "./ProductCard";
import { MyContext } from "../../../utils/myContext";
import { useEffect, useContext } from "react";
import { getProducts } from "../../../utils/productApiFetch";

const GeneralEtalase = () => {
  const { productData, setProductData } = useContext(MyContext);
  useEffect(() => {
    const fetchProductData = async () => {
      const data = await getProducts();
      setProductData(data);
    };
    fetchProductData();
  }, []);

  return (
    <>
      <div className="grid min-[1190px]:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[359px]:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-10 md:gap-x-16 gap-x-7 mt-10">
        {productData?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            stock={product.inventory}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default GeneralEtalase;
