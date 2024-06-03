'use client'

import Hero from "@/components/ui/hero/Hero"
import Overview from "@/components/ui/overview/Overview"
import { Wobble } from "@/components/ui/wobble/Wobble"
import { IPaginationProducts, IProducts } from "@/types/product.interface"
import { FC, useState } from "react"
import { fallDown as Sidebar } from 'react-burger-menu'
import { RiCloseFill, RiMenu5Fill } from "react-icons/ri"

/**
 * The `Home` component is the main entry point for the application's home page. It renders a sidebar with a menu, a hero section, a wobble section, and an overview section.
 *
 * The sidebar is toggled open and closed using a button in the top-left corner of the screen. The sidebar is positioned fixed to the top-left of the screen and takes up 80% of the screen width on small screens and 25% on larger screens.
 *
 * The main content area below the sidebar contains the hero, wobble, and overview sections, which are vertically scrollable using the `snap-y` and `snap-mandatory` classes.
 *
 * @param products - An object containing the products to be displayed on the home page.
 * @param length - The total number of products.
 * @returns The rendered `Home` component.
 */
export const Home: FC<IPaginationProducts> = ({ products, length }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <>
            {/* <Sidebar
                isOpen={showSidebar}
                customBurgerIcon={false}
                onStateChange={(state: { isOpen: boolean }) => setShowSidebar(state.isOpen)}
                burgerBarClassName='-translate-x-24'>
                <div className="bg-black border-black opacity-85 top-0 left-0 w-[80vw] lg:w-[25vw] sm:w-[40vw] fixed text-white h-screen">
                    <div className="py-8 px-14">
                        <button className="text-white z-30 fixed top-[35px] left-10" onClick={toggleSidebar}>
                            <RiCloseFill size={28} />
                        </button>
                    </div>
                </div>
            </Sidebar>
            <button className="text-white z-30 fixed top-[35px] left-10" onClick={toggleSidebar}>
                <RiMenu5Fill size={28} />
            </button> */}
            <div className="overflow-y-scroll snap-y snap-mandatory h-screen bg-slate-950">
                <Hero />
                <Wobble />
                <Overview />
            </div>
        </>
    )
}