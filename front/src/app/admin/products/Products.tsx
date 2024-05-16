import React, { FC } from 'react'
import { useAdminProducts } from './useAdminProducts'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'

const Products: FC = () => {
    const { data, isFetching, mutate } = useAdminProducts()
    return (
        <>
            <Heading title='Products' />
            <AdminList
                isLoading={isFetching}
                items={data}
                removeHandler={mutate}
            />
        </>
    )
}

export default Products