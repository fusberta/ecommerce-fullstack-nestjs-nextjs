import Hero from "@/components/ui/hero/Hero"
import Overview from "@/components/ui/overview/Overview"
import { Wobble } from "@/components/ui/wobble/Wobble"
import { IPaginationProducts, IProducts } from "@/types/product.interface"
import { FC, useState } from "react"
import { fallDown as Sidebar } from 'react-burger-menu'
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import Header from "./layout/header/Header"

export const Home: FC<IPaginationProducts> = ({ products, length }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <>
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
            <main className="overflow-y-scroll snap-y snap-mandatory h-screen bg-slate-950">
                <Hero />
                <Wobble />
                <Overview />
            </main>

        </>
    )
}