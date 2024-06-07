import { useState } from "react";
import { ISelect, ISelectItem } from "./select.interface";
import { BsCaretDownFill } from "react-icons/bs";

function Select<K>({ data, onChange, value, title }: ISelect<K>) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<ISelectItem<K> | null>(value || null);

    const handleItemClick = (item: ISelectItem<K>) => {
        setSelectedValue(item);
        onChange && onChange(item);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-black text-sm text-nowrap">
            <button
                type="button"
                className="border border-gray-300 bg-white rounded-md px-4 py-2 flex flex-col items-center justify-between focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title && <b className="mb-0.5 text-xs">{title}:</b>}
                <div className="flex items-center text-[15px]">
                    {selectedValue?.label || 'Default'}
                    <BsCaretDownFill className="ml-2" />
                </div>
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-2 w-full border-2 border-white bg-white rounded-md shadow-lg shadow-gray-400">
                    {data.map(item => (
                        <li
                            key={item.key?.toString()}
                            onClick={() => {
                                onChange(item);
                                setIsOpen(false);
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => handleItemClick(item)}
                                className={`block w-full px-4 py-2 animate-opacity duration-150 text-left border border-white text-xs rounded-md bg-white ${item.key === value?.key
                                    ? 'bg-slate-300'
                                    : 'hover:bg-slate-300'
                                    }`}
                                disabled={item.key === value?.key}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Select;
