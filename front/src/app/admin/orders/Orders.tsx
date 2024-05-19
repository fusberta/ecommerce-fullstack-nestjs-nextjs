'use client'
import React, { FC } from 'react'
import { useAdminOrders } from './useAdminOrders'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

const Orders: FC = () => {
    const { data, isFetching } = useAdminOrders()
    return (
        <div className='px-28 py-32'>
            <Heading title='Orders' className='mb-4'/>
            <AdminList
                isLoading={isFetching}
                items={data}
            />
        </div>
    )
}

export default Orders