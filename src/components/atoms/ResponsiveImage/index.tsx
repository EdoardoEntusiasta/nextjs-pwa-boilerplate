// @ts-nocheck

import { breakpoints } from '@theme/Variables';
import { useViewport } from '@hooks/index';
import { useState } from 'react';
import { StyledResponsiveImage, Placeholder, Picture, Img } from './styled';
import { IResponsiveImage } from './interfaces';
import { useInView } from 'react-intersection-observer';

const ResponsiveImage = ({
    class_name,
    dimensions_fit,
    lazy,
    alt,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
}: IResponsiveImage) => {
    const { viewportName } = useViewport();
    const [isLoaded, setIsLoaded] = useState(false);
    const [pictureRef, inView] = useInView({
        threshold: 0,
        rootMargin: '0px',
        triggerOnce: true,
    });

    const sourcesFrag = () => {
        const sourcesProps = [xs, sm, md, lg, xl, xxl].reverse();
        let sources: any = [];
        Object.keys(breakpoints)
            .reverse()
            .forEach((breakpoint, i) => {
                if(typeof sourcesProps[i] != 'undefined') {
                    sources.push(
                        <source
                            key={i}
                            srcSet={sourcesProps[i].image.url}
                            media={`(min-width:${breakpoints[breakpoint]}px)`}
                        />
                    );
                }
            });

        return sources;
    };

    const getDimensions = () => {
        let dimensions;
        switch (viewportName) {
            default:
                dimensions = undefined;
            case 'xs':
                dimensions = [xs.width, xs.height];
                break;
            case 'sm':
                if (sm.width != null) {
                    dimensions = [sm.width, sm.height];
                } else {
                    dimensions = [xs.width, xs.height];
                }
                break;
            case 'md':
                if (md.width != null) {
                    dimensions = [md.width, md.height];
                } else if (sm.width != null) {
                    dimensions = [sm.width, sm.height];
                } else {
                    dimensions = [xs.width, xs.height];
                }
                break;
            case 'lg':
                if (lg.width != null) {
                    dimensions = [lg.width, lg.height];
                } else if (md.width != null) {
                    dimensions = [md.width, md.height];
                } else if (sm.width != null) {
                    dimensions = [sm.width, sm.height];
                } else {
                    dimensions = [xs.width, xs.height];
                }
                break;
            case 'xl':
                if (xl.width != null) {
                    dimensions = [xl.width, xl.height];
                } else if (lg.width != null) {
                    dimensions = [lg.width, lg.height];
                } else if (md.width != null) {
                    dimensions = [md.width, md.height];
                } else if (sm.width != null) {
                    dimensions = [sm.width, sm.height];
                } else {
                    dimensions = [xs.width, xs.height];
                }
                break;
            case 'xxl':
                if (xxl.width != null) {
                    dimensions = [xxl.width, xxl.height];
                } else if (xl.width != null) {
                    dimensions = [xl.width, xl.height];
                } else if (lg.width != null) {
                    dimensions = [lg.width, lg.height];
                } else if (md.width != null) {
                    dimensions = [md.width, md.height];
                } else if (sm.width != null) {
                    dimensions = [sm.width, sm.height];
                } else {
                    dimensions = [xs.width, xs.height];
                }
                break;
        }
        return dimensions;
    };

    const dynamicPadding = () => {
        return (getDimensions()[1] / getDimensions()[0]) * 100 + '%';
    };

    const pictureFrag = (
        <Picture>
            {sourcesFrag()}
            <Img
                lazy={lazy}
                alt={alt}
                onLoad={() => {
                    setIsLoaded(true);
                }}
                width={getDimensions()[0]}
                height={getDimensions()[1]}
            />
        </Picture>
    );

    const placeHolderFrag = (
        <Placeholder>
            <source
                srcSet={xs.image.url + `?format=jpg&quality=5`}
            />
            <Img
                alt={alt}
                width={getDimensions()[0]}
                height={getDimensions()[1]}
                className={isLoaded && 'isLoaded'}
            />
        </Placeholder>
    );

    return (
        <StyledResponsiveImage
            ref={pictureRef}
            className={class_name}
            dynamicPadding={!dimensions_fit && dynamicPadding()}
            width={getDimensions()[0]}
            height={getDimensions()[1]}
            dimensions_fit={dimensions_fit}
        >
            {lazy ? (
                <>
                    {placeHolderFrag}
                    {inView && pictureFrag}
                </>
            ) : (
                pictureFrag
            )}
        </StyledResponsiveImage>
    );
};

ResponsiveImage.defaultProps = {
    class_name: null,
    dimensions_fit: false,
    lazy: true,
    xs: { image: {} },
    sm: {},
    md: {},
    lg: {},
    xl: {},
    xxl: {},
};

export default ResponsiveImage;
