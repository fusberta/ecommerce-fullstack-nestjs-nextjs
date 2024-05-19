'use client'
import React, { FC } from 'react'
import { useAdminReviews } from './useAdminReviews'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

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