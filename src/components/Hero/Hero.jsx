import React from "react";
import heroImg from "../../assets/heroImg.png";

const Hero = ({ productRef }) => {
   const scrollToProducts = () => {
      if (productRef.current) {
         productRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <>
         <section className="bg-gradient-to-r from-blue-50 to-pink-50 relative">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative items-center py-8 px-4 md:px-0">
                  {/* Left Side: Text Section */}
                  <div className="flex flex-col justify-center space-y-6 md:space-y-8">
                     <h1 className="text-center md:text-left text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide">
                        Explore
                     </h1>
                     <h1 className="text-center md:text-left text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-red-500 tracking-wide">
                        Unique <span className="text-black">Gifts</span>
                     </h1>
                     <p className="text-pretty text-gray-700 text-center md:text-left text-sm md:text-base xl:max-w-[500px]">
                        Discover the most thoughtful, unique, and creative gifts
                        to bring joy to your loved ones. Special deals and
                        handpicked collections just for you!
                     </p>

                     {/* Buttons */}
                     <div className="flex justify-center md:justify-start gap-6 mt-4">
                        <button
                           onClick={scrollToProducts} // Call scrollToProducts on click
                           className="primary-btn px-5 md:px-7 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                           Shop Now
                        </button>
                        <button className="secondary-btn px-5 md:px-7 py-3 md:py-4 bg-white text-blue-600 border-2 border-blue-500 font-semibold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105">
                           Explore Collections
                        </button>
                     </div>

                     {/* Features */}
                     <div className="flex justify-center md:justify-start mt-8 space-x-8 text-gray-700 text-xs md:text-base">
                        <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                           <i className="fas fa-shipping-fast text-2xl md:text-3xl text-blue-500"></i>
                           <span className="mt-2">Free Shipping</span>
                        </div>
                        <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                           <i className="fas fa-gift text-2xl md:text-3xl text-red-500"></i>
                           <span className="mt-2">Handpicked Gifts</span>
                        </div>
                        <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                           <i className="fas fa-headset text-2xl md:text-3xl text-green-500"></i>
                           <span className="mt-2">24/7 Support</span>
                        </div>
                     </div>
                  </div>

                  {/* Right Side: Image Section */}
                  <div className="relative mt-8 md:mt-0">
                     <img
                        src={heroImg}
                        alt="Gift Banner"
                        className="rounded-lg shadow-lg w-full h-auto"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Testimonial or Feature Section */}
         {/* <section className="bg-white py-12">
            <div className="container mx-auto text-center">
               <h2 className="text-3xl font-bold mb-6">Why Shop With Us?</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 shadow-md rounded-lg">
                     <i className="fas fa-thumbs-up text-2xl md:text-3xl text-blue-500"></i>
                     <h3 className="text-xl font-semibold mt-4">5000+ Happy Customers</h3>
                     <p className="text-gray-600">Our customers love our unique gift collections!</p>
                  </div>
                  <div className="p-6 shadow-md rounded-lg">
                     <i className="fas fa-star text-2xl md:text-3xl text-yellow-500"></i>
                     <h3 className="text-xl font-semibold mt-4">Premium Quality</h3>
                     <p className="text-gray-600">We only offer the best quality products for every occasion.</p>
                  </div>
                  <div className="p-6 shadow-md rounded-lg">
                     <i className="fas fa-lock text-2xl md:text-3xl text-green-500"></i>
                     <h3 className="text-xl font-semibold mt-4">Secure Payments</h3>
                     <p className="text-gray-600">Safe and secure payment options for a hassle-free shopping experience.</p>
                  </div>
               </div>
            </div>
         </section> */}
      </>
   );
};

export default Hero;
