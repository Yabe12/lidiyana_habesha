// src/App.jsx
import React from 'react';
import Layout from '../src/component/layout/Layout';
import HomeSection from './page/Home/Home';
import ProductDisplay from './page/product/product';

const App = () => {
  return (
    <Layout>
     <HomeSection/>
     <ProductDisplay/>
    </Layout>
  );
};

export default App;
