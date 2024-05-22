import { instance } from '@/api/api.interceptor'
import { ICartItem } from '@/types/cart.interface'
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
            method: 'GET',
        })
    },

    async getByUserId() {
        return instance<IOrder[]>({
            url: `${orders}/by-user`,
            method: 'GET'
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