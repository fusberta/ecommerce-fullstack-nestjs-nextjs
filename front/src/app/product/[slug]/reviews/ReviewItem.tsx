import { IReview } from '@/types/review.interface'
import Image from 'next/image'
import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

/**
 * Renders a single review item with the reviewer's avatar, name, rating, and review text.
 *
 * @param review - The review object containing the user information and review details.
 * @returns A React component that displays the review item.
 */
const ReviewItem: FC<{ review: IReview }> = ({ review }) => {

    return (
        <div className='bg-gray-200 rounded-xl p-6 text-black text-sm'>
            <div className="flex items-center mb-2">
                <Image
                    width={30}
                    height={30}
                    alt={review.user.name}
                    src={review.user.avatarPath}
                    className='mr-3 block rounded-full'
                />
                <b>{review.user.name}</b>
            </div>
            <Rating
                readonly
                initialValue={review.rating}
                SVGstyle={{
                    display: 'inline-block'
                }}
                size={20}
                allowFraction
                transition
            />
            <div className="text mt-4 leading-relaxed">{review.text}</div>
        </div>
    )
}

export default ReviewItem