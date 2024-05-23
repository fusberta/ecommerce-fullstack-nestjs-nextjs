import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useActions } from "./useActions"
import { useTypedSelector } from "./useTypedSelector"
import { useEffect } from "react"
import { IProductFilters } from "@/types/product.interface"

/**
 * A custom React hook that manages product filters and updates the URL query parameters.
 * 
 * @returns {Object} An object containing the following properties:
 *   - `updateQueryParams`: A function that updates the query parameters in the URL and the global state.
 *   - `queryParams`: An object containing the current query parameters.
 *   - `resetQueryParams`: A function that resets the query parameters to the initial state.
 *   - `isFilterUpdated`: A boolean indicating whether the filters have been updated.
 */
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

        updateQueryParam({ key, value })

    }

    const resetQueryParams = () => {
        if (pathname) {
            const newParams = new URLSearchParams()
            replace(pathname)
        }
    }

    return {
        updateQueryParams,
        queryParams,
        resetQueryParams,
        isFilterUpdated
    }
}