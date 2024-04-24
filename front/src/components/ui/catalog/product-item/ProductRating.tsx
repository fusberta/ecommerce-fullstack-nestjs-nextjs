import ReviewService from "@/services/review.service";
import { IProduct } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
    const [rating, setRating] = useState(
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
            <span className="pt-1">({product.reviews.length} reviews)</span>
        </div>
    )
}

export default ProductRating