'use client'

import PaginationCatalog from '@/components/ui/catalog/PaginationCatalog'
import { IPaginationProducts } from '@/types/product.interface'
import React, { FC } from 'react'

const Catalog: FC<IPaginationProducts> = ({ length, products }) => {

    return (
        <>
            <PaginationCatalog title="Каталог" data={{ products, length }} isPagination />
        </>
    )
}

export default Catalog