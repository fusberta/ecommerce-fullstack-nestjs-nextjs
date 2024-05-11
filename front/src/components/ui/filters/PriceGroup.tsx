import { useFilters } from '@/hooks/useFilters'
import type { FC } from 'react'
import Range from '../range/Range'
import FilterWrapper from './FilterWrapper'

const PriceGroup: FC = () => {
    const { queryParams, updateQueryParams } = useFilters()
    return (
        <FilterWrapper title="Цена">
            <Range 
                max={2000}
                fromInitial={queryParams.minPrice}
                toInitial={queryParams.maxPrice}
                onChangeFrom={value => {
                    updateQueryParams('minPrice', value)
                }}
                onChangeTo={value => {
                    updateQueryParams('maxPrice', value)
                }}
                min={0}
            />
        </FilterWrapper>
    )
}

export default PriceGroup