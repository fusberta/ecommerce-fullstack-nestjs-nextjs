import { useMutation, useQuery } from "@tanstack/react-query"
import { IListItem } from '@/types/admin.interface'
import CategoryService from "@/services/category.service"

export const useAdminCategories = () => {
    const { data, isFetching, refetch } = useQuery({
        queryKey: ['get admin categories'],
        queryFn: () => CategoryService.getAll(),
        select: ({data}) => data.map((category): IListItem => {
            return {
                id: category.id,
                viewUrl: `/explorer?page=1&categoryId=${category.id}`,
                editUrl: `/admin/categories/edit/${category.id}`,
                items: [
                    category.name,
                    category.slug,
                ]
            }
        })
    })

    const { mutate } = useMutation({
        mutationKey: ['delete category'],
        mutationFn: (id: number) => CategoryService.delete(id),
        onSuccess: () => refetch()
    })

    return {
        mutate,
        data,
        isFetching
    }
}