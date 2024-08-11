// src/App.jsx
import React from 'react';
import Layout from '../src/component/layout/Layout';
import HomeSection from './page/Home/Home';
import ProductDisplay from './page/product/product';
import About from './page/About/About';
import ContactForm from './page/contact/Contact';

const App = () => {
  return (
    <Layout>
     <HomeSection/>
     <ProductDisplay/>
     <About/>
     <ContactForm/>
    </Layout>
  );
};

export default App;
