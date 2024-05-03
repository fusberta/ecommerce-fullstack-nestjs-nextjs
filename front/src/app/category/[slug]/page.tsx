import Catalog from '@/components/ui/catalog/Catalog'
import CategoryService from '@/services/category.service'
import ProductService from '@/services/product.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import { Metadata } from 'next'

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

export async function generateMetadata({
    params
}: IPageSlugParam): Promise<Metadata> {
    const { products, category } = await getProducts(params)

    return {
        title: category.name,
        description: `Viewing ${category.name} category.`,
        openGraph: {
            images: products[0].images,
            description: `Viewing ${category.name} category.`
        }
    }
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
        <>
            <Catalog title={data.category.name} data={data.products} />
        </>
    )

}
