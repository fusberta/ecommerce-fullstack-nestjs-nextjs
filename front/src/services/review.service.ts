import { instance } from '@/api/api.interceptor'
import { IReview, IReviewCreate } from '@/types/review.interface'

const reviews = '/reviews'

export const ReviewService = {
    async getAll() {
        return instance<IReview[]>({
            url: reviews,
            method: 'GET',
        })
    },
    async leave(productId: string | number, data: IReviewCreate) {
        return instance<IReview>({
            url: `${reviews}/leave/${productId}`,
            method: 'POST',
            data
        })
    },
    async getAverageByProduct(productId: string | number) {
        return instance<number>({
            url: `${reviews}/average-by-product/${productId}`,
            method: 'GET'
        })
    }
}

export default ReviewService