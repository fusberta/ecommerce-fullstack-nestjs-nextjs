'use client'

import Heading from '@/components/ui/Heading'
import ProductService from '@/services/product.service'
import { IProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import React, { FC } from 'react'
import ReviewsCount from './ReviewsCount'
import ProductGallery from './ProductGallery'

interface IProductPage {
    initialProduct: IProduct
    similarProducts: IProduct[]
    slug?: string
}

const Product: FC<IProductPage> = ({ initialProduct, similarProducts, slug = '' }) => {
    const { data: product } = useQuery({
        queryKey: ['get products', initialProduct.id],
        queryFn: () => ProductService.getBySlug(slug),
        initialData: { data: initialProduct } as AxiosResponse<IProduct>,
        enabled: !!slug
    })

    return (
        <div className='px-28 py-32'>
            <Heading title={product.data.name} className='mb-2' />
            <ReviewsCount product={product.data} />
            <ProductGallery images={product.data.images} />
        </div>
    )
}

export default Product