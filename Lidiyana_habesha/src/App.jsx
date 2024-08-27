// src/App.jsx
import React from "react";
import Layout from "../src/component/layout/Layout";
import HomeSection from "./page/Home/Home";
import ProductDisplay from "./page/product/product";
import About from "./page/About/About";
import { BrowserRouter as Router } from "react-router-dom";

// import ContactForm from './page/contact/Contact';

const App = () => {
  return (
    <Router>
      <Layout>
        <HomeSection />
        <ProductDisplay />
        <About />
      </Layout>
    </Router>
  );
};

export default App;
