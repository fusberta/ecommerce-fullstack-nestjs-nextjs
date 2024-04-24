import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import cn from "clsx";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'dark' | 'light' | 'outline'
}

const CButton: FC<PropsWithChildren<IButton>> = ({ children, className, variant = 'light', ...props }: IButton) => {
    return (
        <button 
            {...props} 
            className={cn('font-semibold shadow transition-all duration-300 ease-in-out', {
                'text-zinc-100 bg-indigo-500 hover:bg-indigo-700': variant === 'dark',
                'bg-zinc-100 text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-zinc-100'
                    : variant === 'light',
                'bg-transparent text-zinc-950 border border-zinc-950': variant === 'outline'
            }, className)}>
                {children}
        </button>
    )
}

export default CButton;