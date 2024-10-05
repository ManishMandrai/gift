import React from 'react';
import shoppingImg from '../../assets/banner.png'; // Ensure the image path is correct

const Banner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50 ">
      <div className="container mx-auto rounded-xl overflow-hidden bg-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-12 md:py-16 lg:px-20">
          
          {/* Left: Text Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Discover Gifts for <span className="text-pink-500">Every Occasion</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Find thoughtful and unique gifts for your loved ones that make every moment special.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              From birthdays to anniversaries, explore our handpicked collections that bring smiles to faces.
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div >
              <img
                src={shoppingImg}
                alt="Shopping Banner"
                // className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
