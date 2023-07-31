import React from "react";
import { AppProvider } from "./Context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./CSS/GlobalStyle.js";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home.js";
import About from "./Component/About/About.js";
import Product from "./Component/Product/Product.js";
import Products from "./Component/Product/Products.js";
import Contact from "./Component/Contact/Contact.js";
import Cart from "./Component/Cart/Cart.js";
import Error from "./Component/Error/Error.js";
import Login from './Component/Login/Login.js'
import { ThemeProvider } from "styled-components";

const App = () => {
// function App(){
  const theme = {
    colors:{
      heading: "rbg(24 24 29)",
      text:"rgba(29, 29, 29, 0.8)",
      white: "#FFF",
      black: "#212529",
      helper: "#8490FF",
      bg: "#f6f8fa",
      footer_bg: "#0a1435",
      btn: "rgb( 98 84 243)",
      border: "rgba(98 84 243 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgba(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px"

    },
    media:{
      mobile: "768px",
      tab: "998px"
    }
  };

  return (
    <AppProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
    </AppProvider> 
  );
}

export default App;
