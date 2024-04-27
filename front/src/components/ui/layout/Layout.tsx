import React, { PropsWithChildren, useState } from 'react'
import { RiCloseFill, RiMenu5Fill } from 'react-icons/ri';
import Header from './header/Header';
import { fallDown as Sidebar } from 'react-burger-menu'

const Layout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <div>
            <Sidebar
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
            <Header />
            <button className="text-white z-30 fixed top-[35px] left-10" onClick={toggleSidebar}>
                <RiMenu5Fill size={28} />
            </button>
            <main className='px-20 py-10'>
                {children}
            </main>
        </div>
    )
}

export default Layout