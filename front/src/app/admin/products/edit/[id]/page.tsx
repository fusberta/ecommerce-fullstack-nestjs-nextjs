import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/assets/constants'
import UpdateProductForm from './UpdateProductForm'
import ProductService from '@/services/product.service'
import { IPageIdParam } from '@/types/page-params'

export const metadata: Metadata = {
    title: 'Update Product',
    ...NO_INDEX_PAGE
}

export async function generateStaticParams() {
    const products = await ProductService.getAll()

    const paths = products.products.map(product => {
        return {
            params: {
                id: product.id,
            }
        }
    })

    return paths
}


export default function UpdateProductPage({ params }: IPageIdParam) {
    return <UpdateProductForm id={params.id} />
}
