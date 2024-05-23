import ProductRating from '@/components/ui/catalog/product-item/ProductRating'
import { IProduct } from '@/types/product.interface'
import React, { FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

interface IReviewsCount {
    product: IProduct
}

/**
 * Renders a component that displays the number of reviews for a product.
 *
 * @param product - The product object containing the reviews data.
 * @returns A React component that displays the number of reviews and a link to the reviews section.
 */
const ReviewsCount: FC<IReviewsCount> = ({ product }) => {
    const reviewsCount = product.reviews.length

    if (!reviewsCount) return null

    return (
        <div>
            <ProductRating product={product} />
            <div>
                <Link
                    className='opacity-50 font-semibold text-xs cursor-pointer'
                    to='reviews'
                    smooth
                    offset={-60}
                    duration={500}
                >
                    {reviewsCount} reviews <FiChevronRight className='inline' />
                </Link>
            </div>
        </div>
    )
}

export default ReviewsCount