'use client'

import Heading from '@/components/ui/Heading'
import ProductService from '@/services/product.service'
import { IProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import React, { FC } from 'react'
import ReviewsCount from './ReviewsCount'
import ProductGallery from './ProductGallery'
import ProductInformation from './information/ProductInformation'
import SimilarProducts from './SimilarProducts'
import Reviews from './reviews/Reviews'
import ProductDescription from './information/ProductDescription'

interface IProductPage {
    initialProduct: IProduct
    similarProducts: IProduct[]
    slug?: string
}

/**
 * Renders the product page component, displaying the product details, reviews, and similar products.
 *
 * @param initialProduct - The initial product data to display.
 * @param similarProducts - The list of similar products to display.
 * @param slug - The slug of the current product.
 * @returns The rendered product page component.
 */
const Product: FC<IProductPage> = ({ initialProduct, similarProducts, slug = '' }) => {
    const { data: product } = useQuery({
        queryKey: ['get product', initialProduct.id],
        queryFn: () => ProductService.getBySlug(slug),
        initialData: { data: initialProduct } as AxiosResponse<IProduct>,
        enabled: !!slug
    })

    return (
        <div className='px-28 py-32'>
            <Heading title={product.data.name} className='mb-2 text-2xl font-extrabold' />
            <ReviewsCount product={product.data} />
            <div className="flex justify-between mt-5">
                <div className='mr-5'>
                    <ProductGallery images={product.data.images} />
                </div>
                <ProductInformation product={product.data} />
            </div>
            <ProductDescription description={product.data.description} />
            <SimilarProducts similarProducts={similarProducts} />
            <Reviews productId={product.data.id} reviews={product.data.reviews} />
        </div>
    )
}

export default Product