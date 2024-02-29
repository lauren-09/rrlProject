import React from "react";
import "./App.css";

import Products from "./Components/ecommercePages/Products";
import EcommerceHero from "./Components/ecommercePages/Hero";
import FooterEcommerce from "./Components/ecommercePages/FooterEcommerce";
import Ecommerce from "./Components/ecommercePages/Ecommerce";
function App() {
  return (
    <>
      <div className="App">
        <Ecommerce />
        <EcommerceHero />
        <Products />
        <FooterEcommerce />
      </div>
    </>
  );
}

export default App;
