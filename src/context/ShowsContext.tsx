import React, { createContext, useState, useMemo, useRef } from 'react';
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
    

    type Cache<T> = { [url: string]: T };

    // Two different approaches to cache API Responses -> 1. useRef, 2. useMemo

    // 1. useRef
    const cache = useRef<Cache<string>>({});

    // 2. useMemo
    // const cache = useMemo(() => {
    //     return new Map();
    // }, []);

    // DRY -> skulle man kunna skapa en custom hook för att fetcha data? fetchshows, fetchshow -> useFetch
    
    const fetchShows = async () => {
        setIsLoading(true);

        // 1. useRef
        
        if(cache.current["shows"]) {
            setShows(JSON.parse(cache.current["shows"]));
            console.log("data from cache");
            setIsLoading(false);
            return;
        }

        // 2. useMemo
        // if (cache.has('shows')) {
        //     setShows(cache.get('shows'));
        //     setIsLoading(false);

        //     console.log("data from cache");
            
        //     return;
        // }

         else {
            try {
                const response = await fetch("https://api.tvmaze.com/shows");
                const data = await response.json();
                console.log("data from api");
                
                setShows(data);
                cache.current["shows"] = JSON.stringify(data);
                setIsLoading(false);
               // cache.set('shows', data);
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

