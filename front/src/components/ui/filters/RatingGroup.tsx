import { useFilters } from '@/hooks/useFilters'
import type { FC } from 'react'
import FilterWrapper from './FilterWrapper'
import Checkbox from '../Checkbox'
import { updateRatingsQuery } from './update-ratings-query'
import { Rating } from 'react-simple-star-rating'

const ratingVariants = [1, 2, 3, 4, 5]

const RatingGroup: FC = () => {
    const { queryParams, updateQueryParams } = useFilters()
    return (
        <FilterWrapper title="Рейтинг">
            {ratingVariants.map(rating => (
                <Checkbox
                    key={rating}
                    isChecked={queryParams.ratings?.includes(rating.toString())}
                    onClick={() => updateQueryParams('ratings', updateRatingsQuery(queryParams.ratings, rating.toString()))}
                    className='mb-2'
                >
                    <Rating
                        readonly
                        initialValue={rating}
                        SVGstyle={{
                            display: 'inline-block',
                        }}
                        size={20}
                        transition
                    />
                </Checkbox>    
            ))}
        </FilterWrapper>
    )
}

export default RatingGroup