import PaginationCatalog from '@/components/ui/catalog/PaginationCatalog'
import Layout from '@/components/ui/layout/Layout'
import CategoryService from '@/services/category.service'
import ProductService from '@/services/product.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category => {
        return {
            params: {
                slug: category.slug
            }
        }
    })

    return paths
}

async function getProducts(params: TypeParamSlug) {
    const { data: products } = await ProductService.getByCategory(params?.slug as string)

    const { data: category } = await ProductService.getBySlug(params?.slug as string)

    return {
        products,
        category
    }
}

export default async function CategoryPage({ params }: IPageSlugParam) {
    const data = await getProducts(params)
    return (
        <Layout>
            <PaginationCatalog title={data.category.name} data={{products, length}} isPagination />
        </Layout>
    )

}
