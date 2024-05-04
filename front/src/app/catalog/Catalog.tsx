'use client'

import PaginationCatalog from '@/components/ui/catalog/PaginationCatalog'
import { IPaginationProducts } from '@/types/product.interface'
import React, { FC } from 'react'

const Catalog: FC<IPaginationProducts> = ({ length, products }) => {

    return (
        <div className='px-28'>
            <PaginationCatalog title="Каталог" data={{ products, length }} isPagination />
        </div>
    )
}

export default Catalog