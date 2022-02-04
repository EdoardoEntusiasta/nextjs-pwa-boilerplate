import { useState, useEffect } from 'react';
import { breakpoints } from '@theme/DesignSystem/Variables';

export const useViewport = () => {
    const { xs, sm, md, lg, xl } = breakpoints;

    const [viewport, setViewport] = useState({
        width: undefined,
        height: undefined,
        viewportName: undefined,
    });

    useEffect(() => {
        function handleResize() {
            let width = window.innerWidth;
            let height = window.innerHeight;

            let getViewportName = () => {
                if (width >= xs && width < sm) {
                    return 'xs';
                } else if (width >= sm && width < md) {
                    return 'sm';
                } else if (width >= md && width < lg) {
                    return 'md';
                } else if (width >= lg && width < xl) {
                    return 'lg';
                } else if (width >= xl) {
                    return 'xl';
                }
            };

            setViewport({
                width: width,
                height: height,
                viewportName: getViewportName(),
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);

        
    }, []);
    return viewport;
};