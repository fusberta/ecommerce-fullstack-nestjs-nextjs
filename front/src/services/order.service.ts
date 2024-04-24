import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'

const orders = '/orders'

export const OrderService = {
    async getAll() {
        return instance<IOrder[]>({
            url: orders,
            method: 'GET',
        })
    }
}

export default OrderService