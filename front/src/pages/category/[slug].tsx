
import PaginationCatalog from "@/components/ui/catalog/PaginationCatalog"
import Layout from "@/components/ui/layout/Layout"
import CategoryService from "@/services/category.service"
import ProductService from "@/services/product.service"
import { ICategory } from "@/types/category.interface"
import { IPaginationProducts, IProduct } from "@/types/product.interface"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

const CategoryPage: NextPage<{
    products: IProduct[]
    category: ICategory
}> = ({ products, category }) => {
    
    return (
            <Layout>
                <PaginationCatalog title={category.name} data={{products, length}} isPagination />
            </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category => {
        return {
            params: { slug: category.slug }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data: products } = await ProductService.getByCategory(params?.slug as string)

    const { data: category } = await ProductService.getBySlug(params?.slug as string)

    return {
        props: {
            products,
            category
        }
    }
}

export default CategoryPage