import { FC } from "react";
import { IconType } from "react-icons";

interface ISquareButton {
    Icon?: IconType
    onClick?: () => void
    number?: number
}

/**
 * A square button component that displays an icon and an optional number.
 *
 * @param Icon - The icon component to display in the button.
 * @param onClick - The function to call when the button is clicked.
 * @param number - An optional number to display in the top-right corner of the button.
 * @returns A React functional component that renders the square button.
 */
const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }: ISquareButton) => {
    return (
        <button
            onClick={onClick}
            className="h-10 w-10 bg-sky-800 flex items-center justify-center border-2 border-sky-950 hover:bg-sky-900 transition-colors duration-300 relative rounded"
        >
            {!!number && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center rounded-full h-4 w-4 bg-white text-black text-[0.75rem] p-0.5 font-semibold">
                    {number}
                </span>
            )}
            {Icon && <Icon className="text-amber-500 h-5 w-5" />}
        </button>
    )
}

export default SquareButton;