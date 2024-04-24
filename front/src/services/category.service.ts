import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'

const categories = '/categories'

export const CategoryService = {
    async getAll() {
        return instance<ICategory[]>({
            url: categories,
            method: 'GET',
        })
    },
    async getById(id: number | string) {
        return instance<ICategory>({
            url: `${categories}/${id}`,
            method: 'GET'
        })
    },
    async getBySlug(slug: string) {
        return instance<ICategory>({
            url: `${categories}/by-slug/${slug}`,
            method: 'GET'
        })
    },
    async create() {
        return instance<ICategory>({
            url: categories,
            method: 'POST'
        })
    },
    async update(id: string | number, name: string) {
        return instance<ICategory>({
            url: `${categories}/${id}`,
            method: 'PUT',
            data: { name }
        })
    },
    async delete(id: string | number) {
        return instance<ICategory>({
            url: `${categories}/${id}`,
            method: 'DELETE'
        })
    }
}

export default CategoryService