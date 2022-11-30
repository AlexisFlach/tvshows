import { useState } from "react";

export const usePagination = (items: any[], itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    
    const paginateForward = () => setCurrentPage(currentPage + 1);
    const paginateBack = () =>
        currentPage > 1 ? setCurrentPage(currentPage - 1) : null;
    
    return {
        currentItems,
        paginateForward,
        paginateBack,
    };
    }
