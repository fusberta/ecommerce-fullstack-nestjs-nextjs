
import { useState, type PropsWithChildren } from 'react'
import '@/assets/styles/globals.css';
import Providers from '@/providers/Providers';
import { fallDown as Sidebar } from 'react-burger-menu'

import type { Metadata } from 'next'
import { SITE_NAME } from '@/assets/constants';
import { getSiteUrl } from '@/config/url.config';
import { RiCloseFill, RiMenu5Fill } from 'react-icons/ri';
import Header from './layout/header/Header';

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.ico',
    },
    title: {
        absolute: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    metadataBase: new URL(getSiteUrl()),
    openGraph: {
        type: 'website',
        emails: ['info@customworld.ru'],
        siteName: SITE_NAME,
    }
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return <html lang='en'>
        <body>
            <Providers>
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
                <main className='px-28'>
                    {children}
                </main>
            </Providers>
            <div id='modal'></div>
        </body>
    </html>
}
