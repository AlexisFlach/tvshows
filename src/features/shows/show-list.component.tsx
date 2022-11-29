import { useContext, useEffect } from "react";
import ShowContext from "../../context/ShowsContext";
import { showListType } from "../../types/show/showList.types";
import { Item } from "./show-item.component";
import { usePagination } from "../../hooks/usePagination";
import { SearchForm } from "../search";
import { Grid } from '../../components/UI/Grid/Grid.styled'

export const List = () => {
    const { shows, isLoading, fetchShows } = useContext(ShowContext);
    const { currentItems, paginateBack, paginateForward } = usePagination(shows, 16);

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            <SearchForm />
            <Grid>
                {shows && currentItems.map((show: showListType) => (
                    <Item key={show.id} show={show} />
                )
                )}
            </Grid>
            <button onClick={paginateBack}>Back</button>
            <button onClick={paginateForward}>Next</button>
        </div>
    );
};
