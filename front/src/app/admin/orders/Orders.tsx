'use client'
import React, { FC } from 'react'
import { useAdminOrders } from './useAdminOrders'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

const Orders: FC = () => {
    const { data, isFetching, mutate } = useAdminOrders()
    return (
        <div className='px-28 py-32'>
            <Heading title='Products' className='mb-4'/>
            <AdminList
                isLoading={isFetching}
                items={data}
                removeHandler={mutate}
            />
        </div>
    )
}

export default Orders