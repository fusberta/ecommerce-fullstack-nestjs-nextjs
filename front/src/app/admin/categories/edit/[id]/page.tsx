import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/assets/constants'
import { IPageIdParam } from '@/types/page-params'
import CategoryService from '@/services/category.service'
import UpdateCategoryForm from './UpdateCategoryForm'

export const metadata: Metadata = {
    title: 'Update Category',
    ...NO_INDEX_PAGE
}

export async function generateStaticParams() {
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category => {
        return {
            params: {
                id: category.id,
            }
        }
    })

    return paths
}


export default function UpdateProductPage({ params }: IPageIdParam) {
    return <UpdateCategoryForm id={params.id} />
}
