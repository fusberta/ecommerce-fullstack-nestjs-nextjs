'use client'

import { Button } from '@/components/ui/button/button'
import Catalog from '@/components/ui/catalog/Catalog'
import Pagination from '@/components/ui/catalog/Pagination'
import PaginationCatalog from '@/components/ui/catalog/PaginationCatalog'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerPortal, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import Range from '@/components/ui/range/Range'
import { useFilters } from '@/hooks/useFilters'
import ProductService from '@/services/product.service'
import { IPaginationProducts } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { MdFilterAlt } from 'react-icons/md'

interface IProductExplorer {
    initialProducts: IPaginationProducts
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {

    const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

    const { data, isFetching } = useQuery({
        queryKey: ['product explorer', queryParams],
        queryFn: () => ProductService.getAll(queryParams),
        initialData: initialProducts,
        enabled: isFilterUpdated
    })
    return (
        <div className='px-28 py-32'>
            <Drawer>
                <DrawerTrigger>
                    <Button
                        variant={'default'}
                        size={'lg'}
                        className='mb-7 font-bold flex items-center'
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
                            <Range max={150} onChangeFrom={ () => console.log('0') } onChangeTo={() => console.log('0')} />
                        </div>
                        <DrawerFooter>
                            <Button>Подтвердить</Button>
                            <DrawerClose>
                                <Button className='w-full' variant="outline">Отмена</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
            <section>
                <Catalog title={
                    queryParams.searchTerm ? `Поиск по запросу: ${queryParams.searchTerm}` : 'Explorer'
                } data={data.products} />
                <Pagination 
                    numberPages={data.length % +queryParams.perPage === 0 ? data.length / +queryParams.perPage : Math.floor(data.length / +queryParams.perPage) + 1}
                    currentPage={queryParams.page}
                    changePage={page => updateQueryParams('page', page.toString())}
                />
            </section>
        </div >
    )
}

export default ProductExplorer