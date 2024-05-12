import CategoryService from "@/services/category.service"
import { ICategory } from "@/types/category.interface"
import { useQuery } from "@tanstack/react-query"

export const useCategories = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['categories'], 
        queryFn: () => CategoryService.getAll(),
        select: ({ data }) => data
    })

    return {
        data,
        isLoading
    }
}