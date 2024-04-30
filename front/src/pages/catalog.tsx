import { CategoriesMenu } from '@/components/ui/Categories-menu'
import Meta from '@/components/ui/Meta'
import PaginationCatalog from '@/components/ui/catalog/PaginationCatalog'
import Layout from '@/components/ui/layout/Layout'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import { IPaginationProducts } from '@/types/product.interface'
import React from 'react'

const CatalogPage: NextPageAuth<IPaginationProducts> = ({ length, products }) => {
    
    return (
        <Meta title="Catalog">
            <Layout>
                <PaginationCatalog title="Каталог" data={{products, length}} isPagination />
            </Layout>
        </Meta>
    )
}

export default CatalogPage