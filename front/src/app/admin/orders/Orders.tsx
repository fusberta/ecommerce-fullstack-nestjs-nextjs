'use client'
import React, { FC } from 'react'
import { useAdminOrders } from './useAdminOrders'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

/**
 * Renders the Orders component, which displays a list of orders in the admin interface.
 * 
 * The component uses the `useAdminOrders` hook to fetch the order data, and renders an `AdminList` component to display the orders.
 * 
 * @returns {JSX.Element} The rendered Orders component.
 */
const Orders: FC = () => {
    const { data, isFetching } = useAdminOrders()
    return (
        <div className='px-28 py-32'>
            <Heading title='Orders' className='mb-4' />
            <AdminList
                isLoading={isFetching}
                items={data}
            />
        </div>
    )
}

export default Orders