import React, { useEffect, useState } from "react";
import { Item } from "./show-list--item.component";
import { Grid } from '../../components/UI/Grid/Grid.styled'

import { ShowSearchList } from "./show-list--item_search.component";
import { useShows } from "./hooks/useShows";

export const List: React.FC = () => {
    const data = useShows();

    const [searchValue, setSearchValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const filteredShows = data.filter(show => show.name.includes(searchValue));

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                value={searchValue}
            />
            {filteredShows.length === 0 && searchValue.length > 0 && (
                <h1>No shows found</h1>
            )}
            <Grid>
                {filteredShows.map((show, index) => (
                    <ShowSearchList show={show} key={index} />
                ))}
                {filteredShows.length === 0 && searchValue.length === 0 &&
                    data.map((show, index) => <Item show={show} key={index} />)}
            </Grid>
        </div>
    );
};
