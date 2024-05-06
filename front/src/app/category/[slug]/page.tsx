import NotFound from '@/app/not-found'
import Catalog from '@/components/ui/catalog/Catalog'
import CategoryService from '@/services/category.service'
import ProductService from '@/services/product.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import { AxiosError } from 'axios'
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
    const data = await getProducts(params);
    if (!data) {
        // Если данные не найдены, возвращаем метаданные для страницы "Не найдено"
        return {
            title: 'Page Not Found',
            description: 'This page does not exist.',
        };
    }

    const { products, category } = data;

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
    try {
        const { data: products } = await ProductService.getByCategory(params?.slug as string)
        const { data: category } = await CategoryService.getBySlug(params?.slug as string)

        return {
            products,
            category
        }
    } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) {
            // Возвращаем null, чтобы показать страницу NotFound
            return null
        } else {
            throw error
        }
    }
}

export default async function CategoryPage({ params }: IPageSlugParam) {
    const data = await getProducts(params);
    if (!data) {
        return <NotFound />
    }
    return (
        <div className='px-28'>
            <Catalog title={data.category.name} data={data.products} />
        </div>
    )
}
