import { IProductFilters } from "@/types/product.interface"

export interface IFiltersState {
    isFilterUpdated: boolean
    queryParams: IProductFilters
}

export interface IFiltersActionsPayload {
    key: keyof IProductFilters
    value: string
}