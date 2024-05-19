import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/assets/constants'
import Orders from './Orders'

export const metadata: Metadata = {
    title: 'Orders - Admin',
    ...NO_INDEX_PAGE
}

export default function OrdersPage() {
    return <Orders />
}
