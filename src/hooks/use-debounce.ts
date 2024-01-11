import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay: number) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const changeDebounceValue = setInterval(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(changeDebounceValue);
        };
    }, [value, delay]);

    return { debounceValue };
}
