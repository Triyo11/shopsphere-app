// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import DetailProductHeader from "../components/macro/DetailproductHeader";
import DetailCard from "../components/macro/DetailCard";
import DescriptionCard from "../components/macro/DescriptionCard";
import { getProductById } from "../../utils/productApiFetch.js";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProductById = async () => {
      const data = await getProductById(product_id);
      setProduct(data);
    };
    fetchProductById();
  }, [product_id]);

  return (
    <>
      <Header />
      <DetailProductHeader />
      <DetailCard
        name={product.name}
        id={product.id}
        price={product.price}
        stock={product.inventory}
        rating={product.rating}
        image={product.image}
      />
      <DescriptionCard description={product.description} />
      <Footer />
    </>
  );
};

export default DetailProduct;
