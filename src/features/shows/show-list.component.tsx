import { useContext, useEffect } from "react";
import ShowContext from "../../context/ShowsContext";
import { showListType } from "../../types/show/showList.types";
import { Item } from "./show-item.component";
import { usePagination } from "../../hooks/usePagination";

export const List = () => {
    const { shows, isLoading, fetchShows } = useContext(ShowContext);
    const {currentItems, paginateBack, paginateForward} = usePagination(shows, 10);

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            <h1>Tv Shows</h1>
            {shows && currentItems.map((show: showListType) => (
                <Item key={show.id} show={show} />
            )
            )}
            <br />
            <button onClick={paginateBack}>Back</button>
            <button onClick={paginateForward}>Next</button>

        </div>
    );
};
