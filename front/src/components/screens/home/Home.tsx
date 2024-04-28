import Meta from "@/components/ui/Meta"
import Catalog from "@/components/ui/catalog/Catalog"
import PaginationCatalog from "@/components/ui/catalog/PaginationCatalog"
import Hero from "@/components/ui/hero/Hero"
import Header from "@/components/ui/layout/header/Header"
import Overview from "@/components/ui/overview/Overview"
import { Wobble } from "@/components/ui/wobble/Wobble"
import { IPaginationProducts, IProducts } from "@/types/product.interface"
import { FC, useState } from "react"
import { fallDown as Sidebar } from 'react-burger-menu'
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";

export const Home: FC<IPaginationProducts> = ({ products, length }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <Meta title="Home" description="Home page">
            <Sidebar
                isOpen={showSidebar}
                customBurgerIcon={false}
                onStateChange={(state) => setShowSidebar(state.isOpen)}
                burgerBarClassName='-translate-x-24'>
                <div className="bg-black border-black opacity-85 top-0 left-0 w-[80vw] lg:w-[25vw] sm:w-[40vw] fixed text-white h-screen">
                    <div className="py-8 px-14">
                        <button className="text-white z-30 fixed top-[35px] left-10" onClick={toggleSidebar}>
                            <RiCloseFill size={28} />
                        </button>
                    </div>
                </div>
            </Sidebar>
            <Header></Header>
            <button className="text-white z-30 fixed top-[35px] left-10" onClick={toggleSidebar}>
                <RiMenu5Fill size={28} />
            </button>
            {/* <Catalog title="New products" products={products} isLoading={false}></Catalog> */}
            <div className="overflow-y-scroll snap-y snap-mandatory h-screen bg-slate-950">
                <PaginationCatalog title="New" data={{products, length}} isPagination />
                <Hero />
                <Wobble />
                <Overview />
            </div>

        </Meta>
    )
}