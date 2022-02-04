import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scroll, setScroll] = useState({
        scrollY: undefined,
        scrollX: undefined,
    });
    
    useEffect(() => {
        const handleScroll = () => {
            setScroll({
                scrollY: window.scrollY,
                scrollX: window.scrollX,
            });
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scroll
}