import { useState, useEffect } from 'react';

interface IState {
    data: any;
    isLoading: boolean;
    error: any;
}

export const useFetch = (url: string) => {
    const [state, setState] = useState<IState>({
        data: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setState({ data, isLoading: false, error: null });
            } catch (error: any) {
                setState({ data: null, isLoading: false, error });
            }
        };

        fetchData();
    }, [url]);

    return state;
};
