'use client'
import React, { FC } from 'react'
import { useAdminCategories } from './useAdminCategories'
import Heading from '@/components/ui/Heading'
import AdminList from '@/components/ui/admin-list/AdminList'
import CategoryService from '@/services/category.service'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button/button'
import { FiPlus } from 'react-icons/fi'

/**
 * Renders the Categories component, which displays a list of categories.
 * 
 * The component uses the `useAdminCategories` hook to fetch the category data,
 * and renders an `AdminList` component to display the categories.
 * 
 * @returns {JSX.Element} The rendered Categories component.
 */
const Categories: FC = () => {
    const { data, isFetching, mutate } = useAdminCategories()

    const router = useRouter()

    const handleCreateCategory = async () => {
        try {
            const category = await CategoryService.create();

            router.push(`/admin/categories/edit/${category.data.id}`);
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };
    return (
        <div className='px-28 py-32'>
            <div className="flex justify-between items-center">
                <Heading title='Categories' className='mb-4' />
                <Button variant="default" className="mb-4" onClick={handleCreateCategory}>
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

export default Categories