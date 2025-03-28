import {useMemo} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

type Pagination = {
    currentPage: number
    totalPages: number
    togglePagination: (selectedPage: number) => void
}


export const Pagination = ({currentPage, totalPages, togglePagination}: Pagination) => {

    const pageNumbers = useMemo(() => {

        const pages: (number | string)[] = [];
        const startPagesCount = 2;
        const endPagesCount = 2;
        const sidePages = 3;
        const aroundCurrentCount = 2 * sidePages + 1;

        if (totalPages <= startPagesCount + endPagesCount + aroundCurrentCount) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            for (let i = 1; i <= startPagesCount; i++) {
                pages.push(i);
            }

            let startAroundCurrent = Math.max(startPagesCount + 1, currentPage - sidePages);
            let endAroundCurrent = Math.min(totalPages - endPagesCount, currentPage + sidePages);

            if (endAroundCurrent - startAroundCurrent + 1 < aroundCurrentCount) {
                if (startAroundCurrent === startPagesCount + 1) {
                    endAroundCurrent = startAroundCurrent + aroundCurrentCount - 1;
                } else if (endAroundCurrent === totalPages - endPagesCount) {
                    startAroundCurrent = endAroundCurrent - aroundCurrentCount + 1;
                }
            }

            if (startAroundCurrent > startPagesCount + 1) {
                pages.push('. . .');
            }

            for (let i = startAroundCurrent; i <= endAroundCurrent; i++) {
                pages.push(i);
            }

            if (endAroundCurrent < totalPages - endPagesCount) {
                pages.push('. . .');
            }

            for (let i = totalPages - endPagesCount + 1; i <= totalPages; i++) {
                if (i > endAroundCurrent) {
                    pages.push(i);
                }
            }
        }

        return pages;
    }, [totalPages, currentPage])

    const handlerPrevPage = () => {
        if (currentPage > 1) {
            togglePagination(currentPage - 1)
        }
    }

    const handlerNextPage = () => {
        if (currentPage < totalPages) {
            togglePagination(currentPage + 1)
        }
    }

    const handlerPage = (pageNumber: number) => {
        togglePagination(pageNumber)
    }


    return (
        <div className='w-full flex '>
            <div className='mx-auto my-4 flex items-center'>
                <button
                    className='w-10 h-10 items-center text-2xl p-1 mx-2 hover:text-blue-700 disabled:text-gray-400'
                    disabled={currentPage === 1}
                    onClick={handlerPrevPage}>
                    <AiOutlineArrowLeft/>
                </button>
                {pageNumbers.map((pageNumber, index) =>
                    typeof pageNumber === 'string'
                        ? <span key={index} className='text-2xl'>{pageNumber}</span>
                        : <button
                            key={index}
                            className={`w-10 h-10 items-center text-2xl p-1 mx-1 hover:bg-blue-100 hover:text-blue-700
                            ${currentPage === pageNumber ? `bg-blue-100 text-blue-700` : ``}
                            `}
                            onClick={() => {
                                handlerPage(pageNumber)
                            }}
                        >{pageNumber}</button>
                )}
                <button
                    className='w-10 h-10 items-center text-2xl p-1 mx-2 hover:text-blue-700 disabled:text-gray-400'
                    disabled={currentPage === totalPages}
                    onClick={handlerNextPage}
                >
                    <AiOutlineArrowRight/>
                </button>
            </div>
        </div>
    );
};

