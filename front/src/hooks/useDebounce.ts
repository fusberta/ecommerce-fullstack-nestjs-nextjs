import { useEffect, useState } from "react"

/**
 * A custom React hook that debounces a value, returning the debounced value after a specified delay.
 *
 * @param value - The value to be debounced.
 * @param delay - The delay in milliseconds before the debounced value is updated.
 * @returns The debounced value.
 */
export const useDebounce = <T>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}