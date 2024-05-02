'use client'

import PaginationCatalog from '@/components/ui/catalog/PaginationCatalog'
import Layout from '@/components/ui/layout/Layout'
import { IPaginationProducts } from '@/types/product.interface'
import React, { FC } from 'react'

const Catalog: FC<IPaginationProducts> = ({ length, products }) => {

    return (
        <Layout>
            <PaginationCatalog title="Каталог" data={{ products, length }} isPagination />
        </Layout>
    )
}

export default Catalog