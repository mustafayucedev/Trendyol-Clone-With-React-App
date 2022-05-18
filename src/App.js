import React from 'react';
import Header from './components/header/Header';
import PopularCategories from './components/popular-categories/PopularCategories';
import Banner from './components/banner/Banner';
import Product from './components/product/Product';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <PopularCategories />
      <Banner />
      <Product />
      <Footer />
    </div>
  )
}

export default App