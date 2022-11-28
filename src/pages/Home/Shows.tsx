import { useState, useContext, useEffect } from "react";
import ShowContext from "../../context/ShowsContext";
import { showListType } from "../../types/show/showList.types";
import ShowListItem from "./ShowListItem";

const Shows = () => {
    const { shows, isLoading, fetchShows } = useContext(ShowContext);

    // Vill extrahera denna logiken till en egen hook

    const [showsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastShow = currentPage * showsPerPage;
    const indexOfFirstShow = indexOfLastShow - showsPerPage;
    const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
    const paginateForward = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {shows && currentShows.map((show: showListType) => (
                <ShowListItem key={show.id} show={show} />
            )
            )}
            <br />
            <button onClick={paginateBack}>Back</button>
            <button onClick={paginateForward}>Next</button>

        </div>
    );
};

export default Shows;