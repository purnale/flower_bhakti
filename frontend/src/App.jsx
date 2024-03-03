//
// import Home from "./home/Home";
import Header from "./home/containers/Header";
import Footer from "./home/containers/Footer";
// import ProductDetails from "./productDetails/ProductDetails";
import { Outlet } from "react-router-dom";
import './App.css';
const App = () => {
  return (
    <>
      <Header />
      {/* <ProductDetails /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
