import { useFilters } from "@/hooks/useFilters";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { MdSearch } from "react-icons/md";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const { queryParams, updateQueryParams } = useFilters()

    const placeholders = [
        "Введите запрос...",
        "Akko...",
        "Varmilo...",
        "Leopold FC660M...",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateQueryParams('searchTerm', searchTerm)
    };

    return (
        <div className="flex flex-col justify-center items-center px-4 mb-6">
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Search;