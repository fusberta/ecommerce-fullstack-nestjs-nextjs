import AddToCartBtn from '@/components/ui/catalog/product-item/AddToCartBtn'
import FavoriteBtn from '@/components/ui/catalog/product-item/FavoriteBtn'
import { IProduct } from '@/types/product.interface'
import type { FC } from 'react'
import { FaLock } from 'react-icons/fa'

interface IProductInformation {
    product: IProduct
}

const ProductInformation: FC<IProductInformation> = ({ product }) => {
    return (
        <div className='bg-gray-200 rounded-xl p-6 relative h-max w-96 text-black'>
            <div className="text-3xl font-bold text-center">
                {product.price} ₽
            </div>
            <div className="mt-4 text-sm">
                <span className='opacity-60 mr-1'>Доставка</span>
                - бесплатная для заказов от 3000 ₽
            </div>
            <p className='flex items-center mt-3 text-sm text-green-600'>
                <FaLock className='mr-2' /> Безопасный платеж
            </p>
            <div className="flex items-center justify-center mt-4 shadow-lg shadow-gray-400 rounded-full">
                <FavoriteBtn productId={product.id} className='rounded-l-full' />
                <AddToCartBtn product={product} className='rounded-r-full' />
            </div>
        </div>
    )
}

export default ProductInformation