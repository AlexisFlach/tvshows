import React, { createContext, useState, useMemo, useRef } from 'react';
import { useCache } from '../hooks/useCache';
import { showListType } from '../types/show/showList.types';
import { showPageType } from '../types/show/showPage.types';
import { ApiService } from '../services/api';

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
    error: ErrorHandling;
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

    const { get, set } = useCache();

    const fetchShows = async () => {
        setIsLoading(true);

        const cachedShows = get('shows');

        if (cachedShows) {
            setShows(JSON.parse(cachedShows));
            setIsLoading(false);
            return;
        } else {
            try {
                const { data } = await ApiService.getShows();
                setShows(data);
                set('shows', JSON.stringify(data));
                setIsLoading(false);
            } catch (error: any) {
                setError({ hasError: true, message: error.message });
                setIsLoading(false);
            }
        }
    };

    const fetchShow = async (id: number) => {
        setIsLoading(true);

        const cachedShow = get(`show-${id}`);

        if (cachedShow) {
            setShow(JSON.parse(cachedShow));
            setIsLoading(false);
            return;
        } else {
            try {
                const { data } = await ApiService.getShow(id);
                setShow(data);
                set(`show-${id}`, JSON.stringify(data));
                setIsLoading(false);
            } catch (error: any) {
                setError({ hasError: true, message: error.message });
                setIsLoading(false);
            }
        }
    };

    return (
        <ShowsContext.Provider value={{ isLoading, fetchShows, fetchShow, shows, show, error }}>
            {children}
        </ShowsContext.Provider>
    )
}

export default ShowsContext;

