import { IProduct } from "@/types/product.interface"
import { FC } from "react"
import ProductItem from "./product-item/ProductItem"
import { HashLoader } from "react-spinners"
import Heading from "../Heading"

interface ICatalog {
    products: IProduct[]
    isLoading?: boolean
    title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {

    if (isLoading) return <HashLoader color="#1f2547" />

    return (
        <section className="px-28 py-5">
            {title && <Heading title={title}></Heading>}
            {
                products.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {products?.map(product => <ProductItem key={product.id} product={product} />)}
                    </div>
                ) : (
                    <div>There are no products</div>
                )
            }
        </section>
    )
}


export default Catalog