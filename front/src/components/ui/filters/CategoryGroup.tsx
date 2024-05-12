import { useFilters } from '@/hooks/useFilters'
import React, { FC } from 'react'
import FilterWrapper from './FilterWrapper'
import Checkbox from '../Checkbox'
import { useCategories } from '@/hooks/useCategories'
import { HashLoader } from 'react-spinners'

const CategoryGroup: FC = () => {

    const { queryParams, updateQueryParams } = useFilters()
    const { data: categories, isLoading } = useCategories()

    return (
        <FilterWrapper title="Категория">
            {isLoading ? (
                <div className="flex items-center justify-center py-14">
                    <HashLoader color="#1f2547" />
                </div>
            ) : categories?.length ? (
                categories.map(category => {
                    const isChecked = queryParams.categoryId === category.id.toString()
                    return (
                        <Checkbox
                            key={category.id}
                            isChecked={isChecked}
                            onClick={() => updateQueryParams('categoryId', isChecked ? '' : category.id.toString())}
                            className='mb-2'
                        >
                            {category.name}
                        </Checkbox>
                    )
                })

            ) : ''
            }
        </FilterWrapper >
    )
}

export default CategoryGroup