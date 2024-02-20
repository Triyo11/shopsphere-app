import ProductCard from "./ProductCard";

const GeneralEtalase = () => {
  return (
    <>
      <div className="grid min-[1190px]:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[359px]:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-10 md:gap-x-16 gap-x-7 mt-10">
        <ProductCard stock={10} />
        <ProductCard stock={10} />
        <ProductCard stock={0} />
        <ProductCard stock={0} />
        <ProductCard stock={10} />
        <ProductCard stock={0} />
        <ProductCard stock={10} />
        <ProductCard stock={10} />
      </div>
    </>
  );
};

export default GeneralEtalase;
