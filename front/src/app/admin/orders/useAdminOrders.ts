import { useQuery } from "@tanstack/react-query"
import { IListItem } from '@/types/admin.interface'
import { getAdminUrl } from "@/config/url.config"
import OrderService from "@/services/order.service"

export const useAdminOrders = () => {
    const { data, isFetching } = useQuery({
        queryKey: ['get admin orders'],
        queryFn: () => OrderService.getAll(),
        select: ({data}) => data.map((order): IListItem => {
            return {
                id: order.id,
                editUrl: getAdminUrl(`/orders/edit/${order.id}`),
                items: [
                    `# ${order.id}`,
                    order.status,
                    order.createdAt,
                    order.total.toString()
                ]
            }
        })
    })

    return {
        data,
        isFetching
    }
}