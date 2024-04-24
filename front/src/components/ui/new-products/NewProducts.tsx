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
        <div className='px-12 snap-start h-screen flex justify-center items-center'>
            <h2 className='text-4xl font-bold mb-8'>New Products</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default NewProducts