import Header from "../home/containers/Header";
import Footer from "../home/containers/Footer";
import ProductsImg from "./containers/ProductsImg";
import { Outlet } from "react-router-dom";
import Review from "../home/containers/Review";
const ProductDetails = () => {
  return (
    <>
      <Header />
     <div className="pt-32">

      <ProductsImg />
     </div>
      <Review />
      <Footer />
      <Outlet />
    </>
  );
};

export default ProductDetails;
