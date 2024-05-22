import ProductRating from '@/components/ui/catalog/product-item/ProductRating'
import { IProduct } from '@/types/product.interface'
import React, { FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

interface IReviewsCount {
    product: IProduct
}

const ReviewsCount: FC<IReviewsCount> = ({ product }) => {
    const reviewsCount = product.reviews.length

    if (!reviewsCount) return null

    return (
        <div>
            <ProductRating product={product} />
            <div>
                <Link
                    className='opacity-50 font-semibold text-sm cursor-pointer'
                    to='reviews'
                    smooth
                    offset={-100}
                    duration={1000}
                >
                    {reviewsCount} reviews <FiChevronRight className='inline' />
                </Link>
            </div>
        </div>
    )
}

export default ReviewsCount