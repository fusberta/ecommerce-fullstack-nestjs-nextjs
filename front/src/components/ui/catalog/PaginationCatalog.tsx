'use client'

import { EnumProductSort, IPaginationProducts, IProduct, IProductUpdate } from "@/types/product.interface"
import { FC, useState } from "react"
import ProductItem from "./product-item/ProductItem"
import { HashLoader } from "react-spinners"
import Heading from "../Heading"
import SortDropdown from "./sort/SortDropdown"
import { Button } from "../button/button"
import { useQuery } from "@tanstack/react-query"
import ProductService from "@/services/product.service"
import { CategoriesMenu } from "../Categories-menu"

interface IPaginationCatalog {
    data: IPaginationProducts
    title?: string
    isPagination?: boolean
}

const PaginationCatalog: FC<IPaginationCatalog> = ({ data, title, isPagination = false }) => {

    const [page, setPage] = useState(1)
    const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

    const { data: response, isLoading } = useQuery<IPaginationProducts>(
        {
            queryKey: ['products', sortType, page],
            queryFn: () => ProductService.getAll({
                page,
                perPage: 8,
                sort: sortType,
                ratings: '1,2,3,4,5'
            }),
            initialData: data as IPaginationProducts
        }
    )

    return (
        <section className="">
            <div className="flex justify-between items-center mb-7">
                {title && <Heading title={title}></Heading>}
                {isPagination && <CategoriesMenu /> }
                {isPagination && <SortDropdown />}
            </div>
            {
                response.length ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {response.products?.map(product => <ProductItem key={product.id} product={product} />)}
                        </div>
                        <div className="text-center mt-4">
                            {isPagination && Array.from({ length: response.length / 4 }).map((_, index) => {
                                const pageNumber = index + 1
                                return (
                                    <Button
                                        variant={'outline'} 
                                        className="text-lg font-thin mx-2" 
                                        onClick={() => setPage(pageNumber)} 
                                        key={index}
                                    >
                                        {pageNumber}
                                    </Button>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <div>There are no products</div>
                )
            }
        </section>
    )
}


export default PaginationCatalog