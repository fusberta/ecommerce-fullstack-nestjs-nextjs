import { FC } from "react";
import { Button } from "../button/button";

interface IPagination {
    numberPages: number
    changePage: (page: string) => void
    currentPage?: number | string
}

/**
 * A React functional component that renders a pagination UI for a catalog.
 *
 * @param {IPagination} props - The props for the Pagination component.
 * @param {number} props.numberPages - The total number of pages.
 * @param {(pageNumber: string) => void} props.changePage - A function to call when the user clicks on a page number.
 * @param {string} props.currentPage - The current page number.
 * @returns {React.ReactElement} - The rendered Pagination component.
 */
const Pagination: FC<IPagination> = ({ numberPages, changePage, currentPage }) => {
    return (
        <div className="text-center mt-12">
            {Array.from({ length: numberPages > 1 ? numberPages : 1 }).map(
                (_, i) => {
                    const pageNumber = (i + 1).toString();

                    return (
                        <Button
                            key={pageNumber}
                            size='lg'
                            variant={currentPage === pageNumber ? 'secondary' : 'outline'}
                            onClick={() => changePage(pageNumber)}
                            className="mx-2"
                            disabled={currentPage === pageNumber}
                        >
                            {pageNumber}
                        </Button>
                    )
                }
            )}
        </div>
    )
}

export default Pagination;