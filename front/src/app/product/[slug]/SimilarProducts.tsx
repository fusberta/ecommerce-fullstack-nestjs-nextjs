import Heading from '@/components/ui/Heading'
import ProductItem from '@/components/ui/catalog/product-item/ProductItem'
import { IProduct } from '@/types/product.interface'
import React, { FC } from 'react'

interface ISimilarProducts {
    similarProducts: IProduct[]
}

/**
 * Renders a component that displays a list of similar products.
 *
 * @param similarProducts - An array of product objects that are similar to the current product.
 * @returns A React component that renders the similar products.
 */
const SimilarProducts: FC<ISimilarProducts> = ({ similarProducts }) => {
    return (
        <section className='mt-14'>
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
        </section>
    )
}

export default SimilarProducts