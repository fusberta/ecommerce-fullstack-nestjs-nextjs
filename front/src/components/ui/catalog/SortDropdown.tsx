import { EnumProductSort } from '@/types/product.interface'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISortDropdown {
    sortType: EnumProductSort
    setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {

    return (
            <select value={sortType} onChange={(e) => setSortType(e.target.value as any)} className='appearance-none py-1 px-2 bg-white rounded-sm border-gray-500 text-black'>
                {(
                    Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
                ).map(key => {
                    return (
                        <option
                            key={key}
                            onChange={() => setSortType(EnumProductSort[key])} 
                            value={EnumProductSort[key]}
                        >
                            {EnumProductSort[key]}
                        </option>
                    )
                })}
            </select>
    )
}

export default SortDropdown