import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/assets/constants'
import Categories from './Categories'

export const metadata: Metadata = {
    title: 'Categories - Admin',
    ...NO_INDEX_PAGE
}

export default function CategoriesPage() {
    return <Categories />
}
