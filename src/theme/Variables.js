/** 
 * For this component I have to thank two smart guys 
 * Jacopo Panzera https://github.com/Sliver02
 * and 
 * Andrea Caccia 
 */

export const unit = 8;

// grid
export const grid = {
    columns: 12,
    gutter: {
        xs: 16,
        sm: 16,
        md: 16,
        lg: 16,
        xl: 24,
        xxl: 24,
    },
    outerMargin: {
        xs: 24,
        sm: 26,
        md: 28,
        lg: 24,
        xl: 24,
        xxl: 166,
    },
    maxWidth: {
        xs: 375,
        sm: 716,
        md: 968,
        lg: 1208,
        xl: 1680,
        xxl: '100%',
    },
};

// breakpoints
export const breakpoints = {
    xs: 0,
    sm: 458,
    md: 821,
    lg: 1025,
    xl: 1441,
    xxl: 1921,
};

// font size in vw relative to 16px for each w breakpoint
export const fontSize = {
    xs: 3.50109409190372,
    sm: 2.0833333333333335,
    md: 1.5625,
    lg: 1.1111111111111112,
    xl: 0.8333333333333334,
};

// scaling font types
export const fontTypes = {
    lg: {
        displayLarge: 80,
        displayRegular: 64,
        page: 52,
        section: 38,
        bodyLarge: 26,
        bodyRegular: 18,
        bodySmall: 16,
        legal: 14,
        bodyFluid: 18,
    },
    md: {
        displayLarge: 64,
        displayRegular: 48,
        page: 42,
        section: 30,
        bodyLarge: 24,
        bodyRegular: 18,
        bodySmall: 16,
        legal: 14,
        bodyFluid: 16,
    },
    sm: {
        displayLarge: 48,
        displayRegular: 34,
        page: 28,
        section: 24,
        bodyLarge: 20,
        bodyRegular: 18,
        bodySmall: 16,
        legal: 14,
        bodyFluid: 14,
    },
};

// transtions
export const transitions = {
    fast: 0.2,
    pace: 0.4,
    slow: 1.2,
};

// z-index
export const zIndex = {
    lower: -2,
    low: -1,
    flat: 0,
    up: 1,
    upper: 2,
    above: 11,
    over: 22,
    top: 49,
    header: 50,
    modal: 100,
};