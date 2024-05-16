import ProductService from "@/services/product.service"
import { useMutation, useQuery } from "@tanstack/react-query"
import { IListItem } from '@/types/admin.interface'
import { getAdminUrl } from "@/config/url.config"

export const useAdminProducts = () => {
    const { data, isFetching, refetch } = useQuery({
        queryKey: ['get admin products'],
        queryFn: () => ProductService.getAll(),
        select: data => data.products.map((product): IListItem => {
            return {
                id: product.id,
                viewUrl: `/product/${product.slug}`,
                editUrl: getAdminUrl(`/products/edit/${product.id}`),
                items: [
                    product.name,
                    product.category.name,
                    product.createdAt
                ]
            }
        })
    })

    const { mutate } = useMutation({
        mutationKey: ['delete product'],
        mutationFn: (id: number) => ProductService.delete(id),
        onSuccess: () => refetch()
    })

    return {
        mutate,
        data,
        isFetching
    }
}