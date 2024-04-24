import { IField } from "@/types/field.interface";
import { cn } from "@/utils/utils";
import { forwardRef } from "react";

const InputMessage = forwardRef<HTMLInputElement, IField>(({
    placeholder,
    error,
    className,
    Icon,
    type = 'text',
   ...props
}, ref) => {
    return (
        <div className={cn(
            "flex flex-col items-start",
            className
        )}>
            <input
                type={type}
                className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className,
                    error && "border-red-500"
                )}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
            {error && (
                <span className="text-red-500 text-xs mt-2">
                    {error}
                </span>
            )}
        </div>
    )
    }
)

export default InputMessage