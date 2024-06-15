import { instance } from '@/api/api.interceptor'
import { TypeStatisticResponce } from '@/types/statistic.type'

const statistic = '/statistic'

export const StatisticService = {
    async getMain() {
        return instance<TypeStatisticResponce>({
            url: `${statistic}/main`,
            method: 'GET'
        })
    },
    async logFileSystem() {
        return instance({
            url: `${statistic}/log-file-system`,
            method: 'GET',
        })
    }
}

export default StatisticService