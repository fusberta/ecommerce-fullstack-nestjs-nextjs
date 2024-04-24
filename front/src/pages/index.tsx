import { Home } from "@/components/screens/home/Home"
import ProductService from "@/services/product.service"
import { IPaginationProducts } from "@/types/product.interface"
import { GetStaticProps, NextPage } from "next"

const indexPage: NextPage<IPaginationProducts> = ({ length, products }) => {
    return <Home products={products} length={length} />
}

export default indexPage

export const getStaticProps: GetStaticProps<IPaginationProducts> = async () => {
    const { data } = await ProductService.getAll({
        page: 1,
        perPage: 10
    })

    return {
        props: data
    }
}