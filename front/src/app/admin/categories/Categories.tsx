'use client'
import React, { FC } from 'react'
import { useAdminCategories } from './useAdminCategories'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

const Categories: FC = () => {
    const { data, isFetching, mutate } = useAdminCategories()
    return (
        <div className='px-28 py-32'>
            <Heading title='Categories' className='mb-4'/>
            <AdminList
                isLoading={isFetching}
                items={data}
                removeHandler={mutate}
            />
        </div>
    )
}

export default Categories