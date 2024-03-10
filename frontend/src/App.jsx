//
// import Home from "./home/Home";
import Header from "./home/containers/Header";
import Footer from "./home/containers/Footer";
// import ProductDetails from "./productDetails/ProductDetails";
import { Outlet } from "react-router-dom";
import './App.css';
import { useState } from "react";
import SignIn from "./pages/SignIn";
const App = () => {

  const [isSignIn, setIsSingIn] = useState(true);


  return (
    <>
      <Header />
      {/* <ProductDetails /> */}

      {isSignIn === true ? <Outlet /> : <SignIn setIsSignIn={setIsSingIn} />}


      <Footer />
    </>
  );
};

export default App;
