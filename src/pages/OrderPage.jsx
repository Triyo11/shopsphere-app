import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import OrderCard from "../components/macro/OrderCard";
import OrderHeader from "../components/macro/OrderHeader";

const OrderPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <OrderHeader />
        <OrderCard />
        <Footer />
      </div>
    </>
  );
};
export default OrderPage;
