'use client'

import { Button } from '@/components/ui/button/button'
import PaginationCatalog from '@/components/ui/catalog/PaginationCatalog'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerPortal, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
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
    const [isFilterOpen, setIsFilterOpen] = useState(false)

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
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className='mb-7 font-bold flex items-center'
                    >
                        <MdFilterAlt size={25} className='-translate-x-2' /> {isFilterOpen ? 'Скрыть' : 'Показать'} фильтры
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>Фильтры</DrawerTitle>
                        </DrawerHeader>

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
                <PaginationCatalog title={
                    queryParams.searchTerm ? `Поиск по запросу: ${queryParams.searchTerm}` : 'Explorer'
                } data={data} isPagination />
            </section>
        </div >
    )
}

export default ProductExplorer