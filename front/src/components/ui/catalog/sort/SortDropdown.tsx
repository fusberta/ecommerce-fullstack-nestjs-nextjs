import { useFilters } from '@/hooks/useFilters';
import { EnumProductSort } from '@/types/product.interface'
import { FC } from 'react'
import { SORT_SELECT_DATA } from './sort-select.data';
import Select from '../../select/Select';

/**
 * Renders a dropdown component for sorting products in the catalog.
 * The selected sort option is stored in the query parameters and updated when the user makes a selection.
 */
const SortDropdown: FC = () => {
    const { queryParams, updateQueryParams } = useFilters()

    return (
        <Select<EnumProductSort>
            data={SORT_SELECT_DATA}
            value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
            onChange={value => updateQueryParams('sort', value.key.toString())}
            title='Сортировать по'
        />
    )
}

export default SortDropdown