import { useEffect, useRef } from 'react';

export const useOnMount = (callback: () => void) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current();
    }, []);
};
