import { instance } from '@/api/api.interceptor'
import { EnumOrderStatus, IOrder } from '@/types/order.interface'

const orders = '/orders'

type TypeData = {
    status?: EnumOrderStatus
    items: {
        productId: number
        price: number
        quantity: number
    }[]
}

export const OrderService = {
    async getAll() {
        return instance<IOrder[]>({
            url: orders,
            method: 'GET'
        })
    },

    async getByUserId() {
        return instance<IOrder[]>({
            url: `${orders}/by-user`,
            method: 'GET'
        })
    },

    async getById(id: number | string) {
        return instance<IOrder>({
            url: `${orders}/${id}`,
            method: 'GET'
        })
    },

    async updateOrderStatus(id: string | number, data: { status: EnumOrderStatus }) {
        console.log(id, data)
        return instance<IOrder>({
            url: `${orders}/${id}`,
            method: 'PUT',
            data: {
                status: data.status
            }
        })
    },

    async place(data: TypeData) {
        return instance<IOrder[]>({
            url: orders,
            method: 'POST',
            data
        })
    }
}

export default OrderService