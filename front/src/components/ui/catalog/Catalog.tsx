import { EnumProductSort, IPaginationProducts, IProduct, IProductUpdate } from "@/types/product.interface"
import { FC, useState } from "react"
import ProductItem from "./product-item/ProductItem"
import { HashLoader } from "react-spinners"
import Heading from "../Heading"
import SortDropdown from "./SortDropdown"
import { Button } from "../button/button"
import { useQuery } from "@tanstack/react-query"
import ProductService from "@/services/product.service"

interface ICatalog {
    data: IPaginationProducts
    title?: string
    isPagination?: boolean
}

const Catalog: FC<ICatalog> = ({ data, title, isPagination = false }) => {

    const [page, setPage] = useState(1)
    const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

    const { data: response, isLoading } = useQuery(
        {
            queryKey: ['products', sortType, page],
            queryFn: () => ProductService.getAll({
                page,
                perPage: 8,
                sort: sortType
            }),
            initialData: data,
            keepPreviousData: true
        }
    ) 

    return (
        <section className="px-28 py-20 snap-start">
            {title && <Heading title={title}></Heading>}
            {isPagination && <SortDropdown sortType={sortType} setSortType={setSortType}/>}
            {
                response.length ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {response.products?.map(product => <ProductItem key={product.id} product={product} />)}
                        </div>
                        <div className="text-center mt-4">
                            {isPagination && 
                                <Button variant={'outline'} className="text-lg font-thin" onClick={() => setPage(page + 1)}>
                                    Load more
                                </Button>
                            }
                        </div>
                    </>
                ) : (
                    <div>There are no products</div>
                )
            }
        </section>
    )
}


export default Catalog