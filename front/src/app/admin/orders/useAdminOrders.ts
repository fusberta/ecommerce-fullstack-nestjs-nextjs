import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IListItem } from '@/types/admin.interface'
import OrderService from "@/services/order.service"
import { EnumOrderStatus } from "@/types/order.interface"
import { useToast } from "@/components/ui/use-toast"

export const useAdminOrders = () => {
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { data, isFetching, isError, error } = useQuery({
        queryKey: ['get admin orders'],
        queryFn: () => OrderService.getAll(),
        select: ({ data }) => {
            const orders = data.map((order): IListItem => {
                return {
                    id: order.id,
                    items: [
                        order.status,
                        new Date(order.createdAt).toLocaleDateString('ru-RU') + ' '
                        + new Date(order.createdAt).toLocaleTimeString('ru-RU'),
                        order.items.map((item) => item.product.name + ' x ' + item.quantity).join(', '),
                        order.total.toString() + ' ₽'
                    ]
                }
            })
            return orders;
        }
    })

    const { mutate: confirmMutation } = useMutation({
        mutationKey: ['confirm order'],
        mutationFn: (id: number) => OrderService.updateOrderStatus(id, { status: EnumOrderStatus.CONFIRMED }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['get admin orders'] }),
        onError: () =>
            toast({
                title: "Ошибка при подтверждении заказа",
                description: "Подтвердить можно только заказы со статусом 'Новый'",
            })
    })

    const { mutate: rejectMutation } = useMutation({
        mutationKey: ['reject order'],
        mutationFn: (id: number) => OrderService.updateOrderStatus(id, { status: EnumOrderStatus.CANCELED }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['get admin orders'] }),
        onError: () =>
            toast({
                className: "bg-slate-950",
                title: "Ошибка при отклонении заказа",
                description: "Отклонить можно только заказы со статусом 'Новый'",
            })
    })

    if (isError) {
        console.error('Error fetching orders:', error);
    }

    return {
        confirmMutation,
        rejectMutation,
        data,
        isFetching
    }
}