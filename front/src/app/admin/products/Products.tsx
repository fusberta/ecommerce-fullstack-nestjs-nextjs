'use client'
import React, { FC } from 'react'
import { useAdminProducts } from './useAdminProducts'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'
import ProductService from '@/services/product.service'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button/button'
import { FiPlus } from 'react-icons/fi'

/**
 * Renders the Products component, which displays a list of products in the admin interface.
 * 
 * This component uses the `useAdminProducts` hook to fetch the product data, and renders an `AdminList`
 * component to display the list of products. The `removeHandler` prop is passed to the `AdminList`
 * component to handle the removal of products.
 */
const Products: FC = () => {
    const router = useRouter();
    const { data, isFetching, mutate } = useAdminProducts()

    const handleCreateProduct = async () => {
        try {
            const productId = await ProductService.create();

            router.push(`/admin/products/edit/${productId}`);
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };
    return (
        <div className='px-28 py-32'>
            <div className="flex justify-between items-center">
                <Heading title='Products' className='mb-4' />
                <Button variant="default" className="mb-4" onClick={handleCreateProduct}>
                    <FiPlus />
                </Button>
            </div>
            <AdminList
                isLoading={isFetching}
                items={data}
                removeHandler={mutate}
            />
        </div>
    )
}

export default Products