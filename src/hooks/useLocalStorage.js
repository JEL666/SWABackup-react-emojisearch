import { useState } from 'react';

export function useLocalStorage(key, initialState) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialState;
        } catch (error) {
            console.log(error);
            return initialState;
        }
    })

    function setValue(value) {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }
    
    return [storedValue, setValue];
}