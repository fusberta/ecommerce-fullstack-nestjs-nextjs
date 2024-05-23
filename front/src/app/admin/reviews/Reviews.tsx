'use client'
import React, { FC } from 'react'
import { useAdminReviews } from './useAdminReviews'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

/**
 * Renders the Reviews component, which displays a list of reviews for the admin.
 * 
 * The component uses the `useAdminReviews` hook to fetch the review data, and
 * renders an `AdminList` component to display the reviews.
 * 
 * @returns {JSX.Element} The rendered Reviews component.
 */
const Reviews: FC = () => {
    const { data, isFetching } = useAdminReviews()
    return (
        <div className='px-28 py-32'>
            <Heading title='Reviews' className='mb-4'/>
            <AdminList
                isLoading={isFetching}
                items={data}
            />
        </div>
    )
}

export default Reviews