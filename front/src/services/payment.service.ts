import { instance } from '@/api/api.interceptor'
import { IPayment } from '@/types/payment.interface'

const payment = '/payment'

export const PaymentService = {
    async createPayment(amount: number) {
        return instance<IPayment>({
            url: payment,
            method: 'POST',
            data: { amount }
        })
    },
}

export default PaymentService