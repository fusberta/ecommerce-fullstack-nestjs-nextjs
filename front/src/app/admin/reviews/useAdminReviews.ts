import { useQuery } from "@tanstack/react-query"
import { IListItem } from '@/types/admin.interface'
import ReviewService from "@/services/review.service"

export const useAdminReviews = () => {
    const { data, isFetching } = useQuery({
        queryKey: ['get admin reviews'],
        queryFn: () => ReviewService.getAll(),
        select: ({data}) => data.map((review): IListItem => {
            return {
                id: review.id,
                items: [
                    Array.from({ length: review.rating })
                        .map(() => '⭐')
                        .join(' '),
                    review.user.name,
                    review.createdAt,
                    review.text,
                ]
            }
        })
    })

    return {
        data,
        isFetching
    }
}