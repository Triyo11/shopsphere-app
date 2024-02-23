import AddProduct from "../components/macro/AddProduct";
import HeaderAddEdit from "../components/macro/HeaderAddEdit";
import Footer from "../components/macro/Footer";


const addProduct = () => {
  return (
    <>
      <HeaderAddEdit />

      <AddProduct />
      <Footer />
    </>
  );
};
export default addProduct;
