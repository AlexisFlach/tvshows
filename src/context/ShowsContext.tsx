import React, { createContext, useState, useMemo, useRef } from 'react';
import { useCache } from '../hooks/useCache';
import { showListType } from '../types/show/showList.types';
import { showPageType } from '../types/show/showPage.types';

type ErrorHandling = {
    hasError: boolean;
    message: string;
}

interface IState {
    shows: showListType[];
    show: showPageType | null;
    isLoading: boolean;
    fetchShows: () => void;
    fetchShow: (id: number) => void;
    error:  ErrorHandling;
}


const initialState: IState = {
    shows: [],
    isLoading: false,
    show: null,
    fetchShows: () => { },
    fetchShow: (id: any) => { },
    error: {
        hasError: false,
        message: ""
    }
};

export const ShowsContext = createContext(initialState);

export const ShowsProvider = ({ children }: React.PropsWithChildren) => {

    const [isLoading, setIsLoading] = useState(false);
    const [shows, setShows] = useState<showListType[]>([]);
    const [show, setShow] = useState<showPageType | null>(null);
    const [error, setError] = useState<ErrorHandling>({ hasError: false, message: "" });

    const {get, set} = useCache();
    
    const fetchShows = async () => {
        setIsLoading(true);

        if(get("shows")) {
            setShows(JSON.parse(get("shows")));
            setIsLoading(false);
            console.log("from cache");
            return;
        } else {
            try {
                const response = await fetch("https://api.tvmaze.com/shows");
                const data = await response.json();
                console.log("data from api");
                
                setShows(data);
                set("shows", JSON.stringify(data));
                setIsLoading(false);
            } catch (error: any) {
                setError({ hasError: true, message: error.message });
            }
        }
    }

    const fetchShow = async (id: number) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            setShow(data);
            setIsLoading(false);
        } catch (error: any ) {
           setError({ hasError: true, message: error.message });
        }
    }

    return (
        <ShowsContext.Provider value={{ isLoading, fetchShows, fetchShow, shows, show, error }}>
            {children}
        </ShowsContext.Provider>
    )
}

export default ShowsContext;

