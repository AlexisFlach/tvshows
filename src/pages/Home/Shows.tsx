import React, { useState, useContext, useEffect } from "react";
import ShowContext from "../../context/ShowsContext";
import { showListType } from "../../types/show/showList.types";
import ShowListItem from "./ShowListItem";
import { usePagination } from "../../hooks/usePagination";

const Shows = () => {
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