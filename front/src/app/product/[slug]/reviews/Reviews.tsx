import { Button } from '@/components/ui/button/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useAuth } from '@/hooks/useAuth'
import { IReview } from '@/types/review.interface'
import type { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import LeaveReviewForm from './LeaveReviewForm'
import ReviewItem from './ReviewItem'
import Heading from '@/components/ui/Heading'

interface IReviews {
  reviews: IReview[]
  productId: number
}

/**
 * Renders a section for displaying product reviews.
 *
 * @param reviews - An array of product reviews.
 * @param productId - The ID of the product.
 * @returns A React component that displays the product reviews.
 */
const Reviews: FC<IReviews> = ({ reviews, productId }) => {
  const { user } = useAuth()

  if (!reviews.length) return (
    <section id='reviews' className='mt-20'>
      <Dialog>
        <div className="flex justify-between">
          <Heading title='Отзывы' className='text-xl font-extrabold' />
          <div className="mb-9">
            {user && (
              <>
                <DialogTrigger>
                  <Button
                    size={'icon'}
                    variant={'ghost'}
                  >
                    <FaPlus />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <LeaveReviewForm productId={productId} />
                </DialogContent>
              </>
            )}
          </div>
        </div>

        <div className="py-5 text-center text-sm">
          Оставьте первый отзыв на этот товар
        </div>

      </Dialog>
    </section>
  )
  return (
    <section id='reviews' className='mt-20'>
      <Dialog>
        <div className="flex justify-between">
          <Heading title='Отзывы' className='text-xl font-extrabold' />
          <div className="mb-9">
            {user && (
              <>
                <DialogTrigger>
                  <Button
                    size={'icon'}
                    variant={'ghost'}
                  >
                    <FaPlus />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <LeaveReviewForm productId={productId} />
                </DialogContent>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {reviews.map(review => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>

      </Dialog>
    </section>
  )
}

export default Reviews