import { IProduct } from "@/types/product.interface";
import { FC, useState } from "react";
import { Rating } from 'react-simple-star-rating'

interface IProductRating {
    product: IProduct
    isText?: boolean
}

/**
 * Renders a product rating component that displays the average rating of a product based on its reviews.
 *
 * @param product - The product object containing the reviews data.
 * @param isText - An optional boolean flag to display the number of reviews as text.
 * @returns A React component that renders the product rating.
 */
const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
    const [rating, setRating] = useState<number>(
        Math.round(
            product.reviews.reduce((acc, review) => acc + review.rating, 0) /
            product.reviews.length
        ) || 0
    )
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="mr-1 flex justify-between items-center">
                <Rating
                    readonly
                    initialValue={rating}
                    SVGstyle={{
                        display: 'inline-block'
                    }}
                    className="relative"
                    size={20}
                    allowFraction
                    transition
                />
                <span className="text-amber-400 font-semibold ml-1 pt-1">
                    {rating}
                </span>
            </span>

            {isText && (
                <span className="pt-1">({product.reviews.length} reviews)</span>
            )}
        </div>
    )
}

export default ProductRating