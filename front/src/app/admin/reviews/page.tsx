import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/assets/constants'
import Products from './Reviews'

export const metadata: Metadata = {
    title: 'Products - Admin',
    ...NO_INDEX_PAGE
}

export default function ProductsPage() {
    return <Products />
}
