// src/layout/Layout.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
