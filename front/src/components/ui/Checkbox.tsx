import { useState, type FC, type PropsWithChildren } from 'react'

interface CheckboxProps {
    className?: string;
    onClick: () => void;
    isChecked?: boolean;
}

const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({ onClick, isChecked, className, children }) => {
    return (
        <button
            className={`inline-flex items-center rounded-md px-3 py-2 focus:outline-none text-sm ${className}`}
            onClick={onClick}
        >
            <span className={`h-4 w-4 border border-gray-300 rounded-sm ${isChecked ? 'bg-blue-500' : ''} mr-2`} />
            <span>{children}</span>
        </button>
    )
}

export default Checkbox