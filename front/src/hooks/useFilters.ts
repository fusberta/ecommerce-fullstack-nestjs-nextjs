import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useActions } from "./useActions"
import { useTypedSelector } from "./useTypedSelector"
import { useEffect, useState } from "react"
import { EnumProductSort, IProductFilters } from "@/types/product.interface"

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
    const { updateQueryParam, resetFilters } = useActions()
    const { replace } = useRouter()

    const { queryParams, isFilterUpdated } = useTypedSelector(state => state.filters)
    const [localQueryParams, setLocalQueryParams] = useState<IProductFilters>(queryParams);

    useEffect(() => {
        searchParams?.forEach((value, key) => {
            updateQueryParam({ key: key as keyof IProductFilters, value });
        });
    }, [searchParams, updateQueryParam]);

    useEffect(() => {
        setLocalQueryParams(queryParams);
    }, [queryParams]);

    const updateQueryParams = (key: keyof IProductFilters, value: string) => {
        const newParams = new URLSearchParams(searchParams?.toString())

        if (value)
            newParams.set(key, String(value))
        else
            newParams.delete(key);

        replace(pathname + `?${newParams.toString()}`)

        setLocalQueryParams(prev => ({
            ...prev,
            [key]: value
        }));

        updateQueryParam({ key, value })
    }

    const resetQueryParams = () => {
        if (pathname) {
            replace(`${pathname}?page=1`)

            setLocalQueryParams({
                sort: EnumProductSort.NEWEST,
                searchTerm: '',
                page: 1,
                perPage: 8,
                ratings: ''
            });

            resetFilters()
        }
    }

    return {
        updateQueryParams,
        queryParams: localQueryParams,
        resetQueryParams,
        isFilterUpdated
    }
}