import React, { FC } from 'react'
import PriceGroup from './PriceGroup'
import RatingGroup from './RatingGroup'

const Filters: FC = () => {
  return (
    <div>
        <PriceGroup />
        <RatingGroup />
    </div>
  )
}

export default Filters