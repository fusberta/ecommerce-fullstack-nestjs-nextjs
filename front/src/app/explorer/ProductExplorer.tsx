'use client'

import Search from '@/components/ui/Search'
import { Button } from '@/components/ui/button/button'
import Catalog from '@/components/ui/catalog/Catalog'
import Pagination from '@/components/ui/catalog/Pagination'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import Filters from '@/components/ui/filters/Filters'
import { useFilters } from '@/hooks/useFilters'
import ProductService from '@/services/product.service'
import StatisticService from '@/services/statistic.service'
import { IPaginationProducts } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import React, { FC, useEffect, useState } from 'react'
import { MdFilterAlt } from 'react-icons/md'
import { HashLoader } from 'react-spinners'

interface IProductExplorer {
    initialProducts: IPaginationProducts
}

/**
 * The `ProductExplorer` component is the main entry point for the product explorer feature. It handles the state management of the product filters, fetches the product data, and renders the product catalog and pagination components.
 *
 * The component receives an `initialProducts` prop, which is used as the initial data for the product list. It then uses the `useFilters` hook to manage the state of the product filters, and the `useQuery` hook from React Query to fetch the product data based on the current filter settings.
 *
 * The component renders a drawer with the product filters, and a section that displays the product catalog and pagination controls. The product catalog is rendered using the `Catalog` component, and the pagination is rendered using the `Pagination` component.
 *
 * The component also handles the reset of the product filters using the `resetQueryParams` function from the `useFilters` hook.
 */
const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {

    const { isFilterUpdated, queryParams, updateQueryParams, resetQueryParams } = useFilters()

    const { data, isFetching, refetch } = useQuery({
        queryKey: ['product explorer', queryParams],
        queryFn: () => ProductService.getAll(queryParams),
        initialData: initialProducts,
        enabled: isFilterUpdated,
    })

    const { data: files, isFetching: isFetchingFiles } = useQuery({
        queryKey: ['files'],
        queryFn: () => StatisticService.logFileSystem(),
    })

    isFetchingFiles && console.log(files)

    useEffect(() => {
        if (isFilterUpdated) {
            refetch();
        }
    }, [queryParams, isFilterUpdated, refetch]);

    if (isFetching) {
        <div className="flex items-center justify-center py-14 h-screen">
            <HashLoader color="#1f2547" />
        </div>
    }

    return (
        <div className='px-28 py-32'>
            <Search />
            <Drawer >
                <DrawerTrigger>
                    <Button
                        variant={'default'}
                        size={'lg'}
                        className='font-bold flex items-center'
                    >
                        <MdFilterAlt size={25} className='-translate-x-2' /> Показать фильтры
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>Фильтры</DrawerTitle>
                        </DrawerHeader>
                        <div className="p-4">
                            <Filters />
                        </div>
                        <DrawerFooter>
                            <Button
                                variant={'destructive'}
                                onClick={() => resetQueryParams()}
                            >
                                Сбросить фильтры
                            </Button>
                            <DrawerClose>
                                <Button className='w-full' variant="outline">Закрыть</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
            <section className='mt-5'>
                <Catalog title={
                    queryParams.searchTerm ? `Поиск по запросу: ${queryParams.searchTerm}` : 'Каталог'
                } data={data.products} isSort />
                <Pagination
                    numberPages={data.length % +queryParams.perPage === 0 ? data.length / +queryParams.perPage : Math.floor(data.length / +queryParams.perPage) + 1}
                    currentPage={queryParams.page}
                    changePage={page => updateQueryParams('page', page.toString())}
                />
            </section>
        </div>
    )
}

export default ProductExplorer