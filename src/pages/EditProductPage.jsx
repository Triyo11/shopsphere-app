/* eslint-disable react-hooks/rules-of-hooks */
import EditProduct from "../components/macro/EditProduct";
import Header from "../components/macro/Header";
import Footer from "../components/macro/Footer";
import { useParams } from "react-router-dom";

const editProduct = () => {
  const { product_id } = useParams();
  console.log(product_id);
  return (
    <>
      <Header />
      <EditProduct product_id={product_id} />
      <Footer />
    </>
  );
};
export default editProduct;
