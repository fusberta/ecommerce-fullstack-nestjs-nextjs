import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/assets/constants'
import { IPageIdParam } from '@/types/page-params'
import OrderService from '@/services/order.service'
import UpdateOrderForm from './UpdateOrderForm'

export const metadata: Metadata = {
    title: 'Update Order',
    ...NO_INDEX_PAGE
}

export async function generateStaticParams() {
    const orders = await OrderService.getAll()

    const paths = orders.data.map(order => {
        return {
            params: {
                id: order.id,
            }
        }
    })

    return paths
}


export default function UpdateProductPage({ params }: IPageIdParam) {
    return <UpdateOrderForm id={params.id} />
}
