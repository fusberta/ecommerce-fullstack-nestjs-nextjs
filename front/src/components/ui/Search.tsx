import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { MdSearch } from "react-icons/md";

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const { push } = useRouter()

    return (
        <div className="">
            <div 
                className="border border-solid border-gray-600 grid w-1/2 rounded-md overflow-hidden"
                style={{gridTemplateColumns: '1fr 0.1fr'}}
            >
                <input
                    className="bg-slate-200 text-sm py-2 px-4 text-white outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Введите запрос..."
                />
                <button
                    onClick={() => push(`/q?searchTerm=${searchTerm}`)}
                    className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-2 px-4 cursor-pointer"
                >
                    <MdSearch />
                </button>
            </div>
        </div>
    )
}