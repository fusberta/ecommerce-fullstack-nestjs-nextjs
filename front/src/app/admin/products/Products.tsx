'use client'
import React, { FC } from 'react'
import { useAdminProducts } from './useAdminProducts'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

/**
 * Renders the Products component, which displays a list of products in the admin interface.
 * 
 * This component uses the `useAdminProducts` hook to fetch the product data, and renders an `AdminList`
 * component to display the list of products. The `removeHandler` prop is passed to the `AdminList`
 * component to handle the removal of products.
 */
const Products: FC = () => {
    const { data, isFetching, mutate } = useAdminProducts()
    return (
        <div className='px-28 py-32'>
            <Heading title='Products' className='mb-4' />
            <AdminList
                isLoading={isFetching}
                items={data}
                removeHandler={mutate}
            />
        </div>
    )
}

export default Products