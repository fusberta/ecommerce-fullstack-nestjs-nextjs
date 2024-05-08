import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/assets/constants'
import ProductService from '@/services/product.service'
import { IProductFilters } from '@/types/product.interface'
import ProductExplorer from './ProductExplorer'

export const metadata: Metadata = {
    title: 'Explorer',
    ...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts(searchParams: IProductFilters) {
    const data = await ProductService.getAll(searchParams)

    return data
}


export default async function ExplorerPage(searchParams: IProductFilters) {
    const data = await getProducts(searchParams)
    return (
        <ProductExplorer initialProducts={data}/>
    )
}
