import { useRef } from 'react';

export const useCache = () => {

    type Cache<T> = { [url: string]: T };

    const cache = useRef<Cache<string>>({});
    
    const get = (key: any) => {
        return cache.current[key];
    };
    
    const set = (key: any, value: any) => {
        cache.current[key] = value;
    };
    
    return { get, set };
}
