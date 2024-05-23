import Heading from '@/components/ui/Heading'
import ProductItem from '@/components/ui/catalog/product-item/ProductItem'
import { IProduct } from '@/types/product.interface'
import React, { FC } from 'react'

interface ISimilarProducts {
    similarProducts: IProduct[]
}

const SimilarProducts: FC<ISimilarProducts> = ({ similarProducts }) => {
    return (
        <div className='mt-20'>
            <Heading className='mb-7 text-xl font-extrabold' title='Похожие продукты' />
            {similarProducts.length ? (
                <div className="grid grid-cols-4 gap-10">
                    {similarProducts.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-2 text-sm">Не найдено похожих продуктов</div>
            )}
        </div>
    )
}

export default SimilarProducts