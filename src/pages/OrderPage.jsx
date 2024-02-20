import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import OrderCard from "../components/macro/OrderCard";
import OrderHeader from "../components/macro/OrderHeader";

const OrderPage = () => {
  return (
    <>  
      <Header />
      <OrderHeader />
      <OrderCard />
      <OrderCard />
      <Footer />
    </>
  );
};
export default OrderPage;
