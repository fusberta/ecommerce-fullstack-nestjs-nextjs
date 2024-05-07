import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useActions } from "./useActions"
import { useTypedSelector } from "./useTypedSelector"
import { useEffect } from "react"
import { IProductFilters } from "@/types/product.interface"

export const useFilters = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { updateQueryParam } = useActions()
    const { replace } = useRouter()

    const { queryParams, isFilterUpdated } = useTypedSelector(state => state.filters)

    useEffect(() => {
        searchParams?.forEach((value, key) => {
            updateQueryParam({ key: key as keyof IProductFilters, value })
        })
    }, [])

    const updateQueryParams = (key: keyof IProductFilters, value: string) => {
        const newParams = new URLSearchParams(searchParams?.toString())

        if (value)
            newParams.set(key, String(value))
        else
            newParams.delete(key);

        replace(pathname + `?${newParams.toString()}`)

        updateQueryParam({key, value})

        return {
            updateQueryParams,
            queryParams,
            isFilterUpdated
        }
    }
}