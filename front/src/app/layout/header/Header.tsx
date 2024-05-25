'use client'

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import HeaderCart from './cart/HeaderCart';
import HeaderProfile from './HeaderProfile';
import Navbar from './navbar/Navbar';
import { HoveredLink } from '@/components/ui/navbar-menu';
import { useAdminPanel } from '@/hooks/useAdminPanel';

/**
 * Renders the header component for the application.
 * 
 * The header component includes the following elements:
 * - A logo or admin panel link, depending on whether the user is in the admin panel
 * - A navigation bar
 * - A cart icon
 * - A favorites icon
 * - A profile icon
 * 
 * The header is positioned absolutely at the top of the page and has a transparent background with 95% opacity.
 */
const Header: FC = () => {
    const { isAdminPanel } = useAdminPanel()

    return (
        <header
            className="bg-transparent absolute opacity-95 w-full h-[94px] px-28 flex items-center justify-between z-10"
        >
            {isAdminPanel ? (
                <Link href="/admin" className='w-16 h-16 flex items-center justify-center'>
                    <h2 className='text-xl text-white text-center font-bold'>Admin Panel</h2>
                </Link>
            ) : (
                <Link href="/" className='w-16 h-16 flex items-center justify-center'>
                    <Image priority src="/images/main-logo.svg" width={70} height={70} className='w-16 h-16' alt="CustomWORLD" />
                </Link>
            )}

            <div className="relative w-full flex items-center justify-center">
                <Navbar className='top-2' />
            </div>

            <div className="flex items-center space-x-6">
                {!isAdminPanel && (
                    <>
                        <HeaderCart />
                        <HoveredLink href="/favorites">
                            <AiOutlineHeart size={28} className="text-amber-400" />
                        </HoveredLink>
                    </>
                )}
                <HeaderProfile />
            </div>
        </header>
    );
};

export default Header;
