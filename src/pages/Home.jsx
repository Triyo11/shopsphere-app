import CategoryEtalase from "../components/macro/CategoryEtalase";
import GeneralEtalase from "../components/macro/GeneralEtalase";
import LinkCategoryProduct from "../components/micro/LinkCategoryProduct";

const Home = () => {
  const category = ["Electronics", "Fashion", "Grocery", "Home", "Beauty", "Tools", "Toys"]
  return (
    <>
      <div className="bg-color-light flex flex-col items-center w-full max-h-max pt-3">
        <div className="list-category flex flex-wrap justify-center mx-60">
          {
            category.map((category, index) => (
              <LinkCategoryProduct key={index} category={category} />
            ))
          }
        </div>
        <GeneralEtalase />
        {
          category.map((category, index) => (
            <CategoryEtalase key={index} categoryName={category} />
          ))
        }
      </div>
    </>
  )
}

export default Home