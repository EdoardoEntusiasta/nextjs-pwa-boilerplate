import { useState, useEffect } from 'react';

export function useWebPSupport() {
    const [{ webP: supportsWebP }, setWebPSupport] = useState({ webP: false });

    const webPCheck = new Promise((resolve) => {
        const image = new Image();
        image.onerror = () => resolve(false);
        image.onload = () => resolve(image.width === 1);
        image.src =
            'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    }).catch(() => false);

    useEffect(() => {
        let mounted = true;
        let browserSupportsWebP;

        const checkForSupport = async () => {
            return (browserSupportsWebP = await webPCheck);
        };

        checkForSupport().then(() => {
            if (mounted) {
                setWebPSupport({ webP: browserSupportsWebP });
            }
        });

        return () => {
            mounted = false;
        };
    }, []);

    return supportsWebP;
}
