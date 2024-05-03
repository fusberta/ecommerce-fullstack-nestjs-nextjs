'use client'

import React, { FC } from 'react';

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
    children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggle, children }) => {
    return (
        <aside className={`z-[100] bg-black border-black opacity-90 top-0 left-0 lg:w-[35vw] sm:w-[50vw] p-10 pl-20 fixed text-white h-screen ease-in-out duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            {children}
        </aside>
    );
};

export default Sidebar;
