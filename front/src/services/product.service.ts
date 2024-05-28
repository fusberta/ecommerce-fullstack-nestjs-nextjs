import { axiosClassic, instance } from '@/api/api.interceptor'
import { IPaginationProducts, IProduct, IProductFilters, IProductUpdate } from '@/types/product.interface'

const products = '/products'

export const ProductService = {
    async getAll(queryData = {} as IProductFilters) {
        const { data } = await axiosClassic<IPaginationProducts>({
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
        const product = await instance<IProduct>({
            url: products,
            method: 'POST'
        })
        return product.data.id;
    },
    async update(id: string | number, data: IProductUpdate, files: File[]) {
        const formData = new FormData();
    
        // Append product data
        formData.append('name', data.name);
        formData.append('description', data.description || '');
        formData.append('price', data.price.toString());
        formData.append('categoryId', data.categoryId.toString());
    
        // Append images
        files.forEach((file, index) => {
          formData.append('images', file);
        });
    
        return instance({
          url: `${products}/${id}`,
          method: 'PUT',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
    },
    async delete(id: string | number) {
        return instance<IProduct>({
            url: `${products}/${id}`,
            method: 'DELETE'
        })
    }
}

export default ProductService