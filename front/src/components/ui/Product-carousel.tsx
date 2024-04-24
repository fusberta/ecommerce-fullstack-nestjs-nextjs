import { IProduct } from '@/types/product.interface';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProductCarouselProps {
  products: IProduct[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const visibleProducts = [
    ...products.slice(currentIndex),
    ...products.slice(0, currentIndex + 4 - (products.length - currentIndex)),
  ].slice(0, 4);

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-4 w-full">
        {visibleProducts.map((product) => (
          <div key={product.id} className="w-full">
            <div className="bg-black rounded-lg overflow-hidden h-full flex flex-col">
              <div className="bg-white w-full h-48">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between border border-zinc-400 rounded-b-lg">
                <h3 className="text-xs font-bold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="bg-white rounded-full text-black p-2 shadow-md -translate-x-10 hover:bg-gray-200 focus:outline-none"
          onClick={handlePrevClick}
        >
          <FaChevronLeft />
        </button>
        <button
          className="bg-white rounded-full text-black p-2 shadow-md translate-x-10 hover:bg-gray-200 focus:outline-none"
          onClick={handleNextClick}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;