import { instance } from '@/api/api.interceptor'
import { IPayment } from '@/types/payment.interface'
import { TypeStatisticResponce } from '@/types/statistic.type'

const statistic = '/statistic'

export const StatisticService = {
    async getMain() {
        return instance<TypeStatisticResponce>({
            url: `${statistic}/main`,
            method: 'GET'
        })
    },
}

export default StatisticService