import React, { FC } from 'react'
import ProductCarousel from '../Product-carousel'
import { IProduct } from '@/types/product.interface'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductCarouselProps {
    products: IProduct[];
}

const NewProducts: FC<ProductCarouselProps> = ({ products }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div className='px-12 snap-start h-screen flex justify-center items-center overflow-hidden'>
            <h2 className='text-4xl font-bold mb-8'>New Products</h2>
            <div className="slider-container z-50 flex">
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <div key={index}>
                            <img src={product.images[0]} alt={product.name} className="h-48 w-full object-cover" />
                            <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default NewProducts