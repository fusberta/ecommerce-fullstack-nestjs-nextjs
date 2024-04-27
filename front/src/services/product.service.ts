import { instance } from '@/api/api.interceptor'
import { IPaginationProducts, IProduct, IProductFilters, IProductUpdate } from '@/types/product.interface'

const products = '/products'

export const ProductService = {
    async getAll(queryData = {} as IProductFilters) {
        const { data } = await instance<IPaginationProducts>({
            url: products,
            method: 'GET',
            params: queryData
        })
        return data
    },
    async getSimilar(id: number | string) {
        return instance<IProduct[]>({
            url: `${products}/similar/${id}`,
            method: 'GET'
        })
    },
    async getBySlug(slug: string) {
        return instance<IProduct>({
            url: `${products}/by-slug/${slug}`,
            method: 'GET'
        })
    },
    async getById(id: string | number) {
        return instance<IProduct>({
            url: `${products}/${id}`,
            method: 'GET'
        })
    },
    async getByCategory(categorySlug: string) {
        return instance<IProduct[]>({
            url: `${products}/by-category/${categorySlug}`,
            method: 'GET'
        })
    },
    async create() {
        return instance<IProduct>({
            url: products,
            method: 'POST'
        })
    },
    async update(id: string | number, data: IProductUpdate) {
        return instance<IProduct>({
            url: `${products}/${id}`,
            method: 'PUT',
            data
        })
    },
    async delete(id: string | number) {
        return instance<IProduct>({
            url: `${products}/${id}`,
            method: 'DELETE'
        })
    }
}

export default ProductService