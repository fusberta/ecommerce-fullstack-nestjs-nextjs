import type { FC } from 'react'
import PriceGroup from './PriceGroup'
import RatingGroup from './RatingGroup'
import CategoryGroup from './CategoryGroup'

const Filters: FC = () => {
  return (
    <div>
        <PriceGroup />
        <CategoryGroup />
        <RatingGroup />
    </div>
  )
}

export default Filters