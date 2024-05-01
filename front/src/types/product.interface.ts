import { ICategory } from "./category.interface";
import { IReview } from "./review.interface";

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    images: string[]
    reviews: IReview[]
    category: ICategory
    createdAt: string
}

export interface IProductDetails {
    product: IProduct
}

export interface IProductUpdate {
    name: string
    description?: string
    price: number
    images: string[]
    categoryId: number
}

export interface IProductFilters {
    sort?: EnumProductSort | string
    searchTerm?: string
    page?: string | number
    perPage?: string | number
    ratings?: string
    minPrice?: string
    maxPrice?: string
    categoryId?: string
}

export enum EnumProductSort {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest'
}

export interface IProducts {
    products: IProduct[]
}

export interface IPaginationProducts extends IProducts {
    length: number
}