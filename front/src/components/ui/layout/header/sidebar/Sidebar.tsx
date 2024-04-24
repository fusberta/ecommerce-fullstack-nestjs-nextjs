import React, { FC } from 'react';

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggle }) => {
    return (
        <aside className={`z-[100] bg-black border-black opacity-90 top-0 left-0 lg:w-[35vw] sm:w-[50vw] p-10 pl-20 fixed text-white h-screen ease-in-out duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            {/* Содержимое боковой панели */}
        </aside>
    );
};

export default Sidebar;
