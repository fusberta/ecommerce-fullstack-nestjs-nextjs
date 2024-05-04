import { type PropsWithChildren } from 'react'
import '@/assets/styles/globals.css';
import Providers from '@/providers/Providers';


import type { Metadata } from 'next'
import { SITE_NAME } from '@/assets/constants';
import { getSiteUrl } from '@/config/url.config';
import Header from './layout/header/Header';

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.svg',
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
    return <html lang='en'>
        <body>
            <Providers>
                <Header />
                <main>
                    {children}
                </main>
            </Providers>
            <div id='modal'></div>
        </body>
    </html>
}
