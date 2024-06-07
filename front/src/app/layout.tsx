import { type PropsWithChildren } from 'react'
import '@/assets/styles/globals.css';
import Providers from '@/providers/Providers';

import { Nunito } from 'next/font/google'

import type { Metadata } from 'next'
import { SITE_NAME } from '@/assets/constants';
import { getSiteUrl } from '@/config/url.config';
import Header from './layout/header/Header';
import { Toaster } from '@/components/ui/toaster';

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

const nunito = Nunito({
    subsets: ['latin', 'cyrillic-ext', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: "swap",
    style: "normal",
    variable: '--font-nto'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
    return (
        <html lang='en' className={nunito.variable}>
            <body>
                <Providers>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Toaster />
                </Providers>
            </body>
        </html>
    )
}
