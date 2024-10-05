import './App.css';
import React, { useRef } from "react";
import Navbar from './components/Navbar/Navbar';
import ResponsiveMenu from './components/Navbar/ResponsiveMenu';
import Hero from './components/Hero/Hero';
import ProductCard from './components/product/ProductCard';
import ProductGrid from './components/product/ProductGrid';
// import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

// import ProductPage from './components/product/Productpage';

function App() {
  const productRef = useRef(null);
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <ResponsiveMenu />
      <Hero productRef={productRef} />
      <ProductGrid ref={productRef} />
      <ProductCard />
      {/* <Banner/> */}
      <Footer />
      {/* <ProductPage/> */}
    </div>
  );
}

export default App;

