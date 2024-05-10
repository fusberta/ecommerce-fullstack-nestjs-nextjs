import { useFilters } from '@/hooks/useFilters';
import { EnumProductSort } from '@/types/product.interface'
import { Dispatch, FC, SetStateAction } from 'react'
import { SORT_SELECT_DATA } from './sort-select.data';
import { ISelectItem } from '../../select/select.interface';
import Select from '../../select/Select';

const SortDropdown: FC = () => {
    const { queryParams, updateQueryParams } = useFilters()

    return (
        <Select<EnumProductSort>
            data={SORT_SELECT_DATA}
            value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
            onChange={value => updateQueryParams('sort', value.key.toString())}
            title='Sort By'
        />
    )
}

export default SortDropdown