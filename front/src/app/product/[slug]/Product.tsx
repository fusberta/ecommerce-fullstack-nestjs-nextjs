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

interface IProductPage {
    initialProduct: IProduct
    similarProducts: IProduct[]
    slug?: string
}

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
            <div className="flex justify-between mt-5 flex-wrap">
                <div>
                    <ProductGallery images={product.data.images} />
                </div>
                <ProductInformation product={product.data} />
            </div>
            <SimilarProducts similarProducts={similarProducts} />
            <Reviews productId={product.data.id} reviews={product.data.reviews} />
        </div>
    )
}

export default Product