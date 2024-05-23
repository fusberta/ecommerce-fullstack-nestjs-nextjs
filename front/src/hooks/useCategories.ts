import CategoryService from "@/services/category.service"
import { useQuery } from "@tanstack/react-query"

/**
 * A custom React hook that fetches and returns all categories from the CategoryService.
 * 
 * @returns An object containing the fetched category data and a loading state.
 */
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