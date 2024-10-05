// src/components/ProductGrid.jsx
import { useRef } from "react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Banner from "../Banner/Banner"; // Import the Banner component

const ProductGrid = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true); // Add loading state

   useEffect(() => {
      // Fetch the products from products.json
      fetch("/products.json")
         .then((response) => response.json())
         .then((data) => {
            setProducts(data);
            setLoading(false); // Set loading to false after data is fetched
         })
         .catch((error) => {
            console.error("Error fetching products:", error);
            setLoading(false); // Ensure loading is false even on error
         });
   }, []);

   // Inline styles for loader
   const loaderStyle = {
      border: "8px solid #f3f3f3", // Light grey
      borderTop: "8px solid #3498db", // Blue
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      animation: "spin 1s linear infinite",
      display: "inline-block",
   };

   const containerStyle = {
      background: "linear-gradient(to right, #ebf8ff, #fff0f6)", // Adjust your background gradient
      padding: "40px 20px",
   };

   return (
      <div style={containerStyle}>
         <div className="container mx-auto px-4 py-10">
            {loading ? (
               <div className="flex justify-center items-center h-screen">
                  <div style={loaderStyle}></div> {/* Loader */}
               </div>
            ) : (
               <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                     {products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                     ))}
                  </div>
                  <Banner /> {/* Display the Banner component after the first row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                     {products.slice(4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                     ))}
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default ProductGrid;

// CSS Keyframes for spinning animation (included here for completeness)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
   @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
}`, styleSheet.cssRules.length);
