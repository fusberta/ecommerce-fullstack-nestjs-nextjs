'use client'

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHeart } from'react-icons/ai';
import HeaderCart from './cart/HeaderCart';
import HeaderProfile from './HeaderProfile';
import Navbar from './navbar/Navbar';
import { HoveredLink } from '@/components/ui/navbar-menu';
import { useAdminPanel } from '@/hooks/useAdminPanel';

const Header: FC = () => {   
    const { isAdminPanel } = useAdminPanel()

    return (
        <header 
            className="bg-transparent absolute opacity-95 w-full h-[94px] px-28 flex items-center justify-between z-10" 
        >
            <Link href="/" className='w-16 h-16 flex items-center justify-center'>
                {isAdminPanel ? (
                    <h2 className='text-3xl text-white font-semibold'>Admin Panel</h2>
                ): (
                    <Image priority src="/images/main-logo.svg" width={70} height={70} className='w-16 h-16' alt="CustomWORLD" />
                )}
            </Link>

            <div className="relative w-full flex items-center justify-center">
                <Navbar className='top-2'/>
            </div>
            
            <div className="flex items-center space-x-6">
                <HeaderCart />
                <HoveredLink href="/favorites">
                    <AiOutlineHeart size={28} className="text-amber-400" />
                </HoveredLink>
                <HeaderProfile />
            </div>
        </header>
    );
};

export default Header;
