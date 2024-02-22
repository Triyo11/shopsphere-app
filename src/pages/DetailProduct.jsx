// eslint-disable-next-line no-unused-vars
import React from "react";
import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import DetailProductHeader from "../components/macro/DetailproductHeader";
import DetailCard from "../components/macro/DetailCard";
import DetailContinueCard from "../components/macro/DetailContinueCard";

const DetailProduct = () => {
  return (
    <>
        <Header />
        <DetailProductHeader />
        <DetailCard />
        <DetailContinueCard />
        <Footer />
    </>
  );
};

export default DetailProduct;
