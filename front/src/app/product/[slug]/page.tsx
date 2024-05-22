import ProductService from '@/services/product.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import type { Metadata } from 'next'
import Product from './Product'

export const revalidate = 60

export async function generateStaticParams() {
    const response = await ProductService.getAll()

    const paths = response.products.map(product => {
        return {
            params: {
                slug: product.slug
            }
        }
    })

    return paths
}

async function getProducts(params: TypeParamSlug) {
    const product = await ProductService.getBySlug(params?.slug as string)

    const { data: similarProducts } = await ProductService.getSimilar(product.data.id)

    return {
        product,
        similarProducts
    }
}

export async function generateMetadata({
    params
}: IPageSlugParam): Promise<Metadata> {
    const response = await getProducts(params);
    if (!response) {
        // Если данные не найдены, возвращаем метаданные для страницы "Не найдено"
        return {
            title: 'Page Not Found',
            description: 'This page does not exist.',
        };
    }

    const { product } = response;
    const data = product.data

    return {
        title: data.name,
        description: data.description,
        category: data.category.name,
        openGraph: {
            images: data?.images || [],
            description: data.description,
        }
    }
}

export default async function ProductPage({ params }: IPageSlugParam) {
    const { product, similarProducts } = await getProducts(params);

    return <Product initialProduct={product.data} similarProducts={similarProducts} slug={params.slug} />
}
