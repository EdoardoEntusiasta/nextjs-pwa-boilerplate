import { breakpoints } from './Variables';
import { css } from 'styled-components';

const mediaQuery =
    (...query) =>
    (...rules) =>
        css`
            @media ${css(...query)} {
                ${css(...rules)}
            }
        `;

const media = {
    min: {
        xs: mediaQuery`(min-width: ${breakpoints.xs}px)`,
        sm: mediaQuery`(min-width: ${breakpoints.sm}px)`,
        md: mediaQuery`(min-width: ${breakpoints.md}px)`,
        lg: mediaQuery`(min-width: ${breakpoints.lg}px)`,
        xl: mediaQuery`(min-width: ${breakpoints.xl}px)`,
        xxl: mediaQuery`(min-width: ${breakpoints.xxl}px)`,
    },
    max: {
        xs: mediaQuery`(max-width: ${breakpoints.xs - 1}px)`,
        sm: mediaQuery`(max-width: ${breakpoints.sm - 1}px)`,
        md: mediaQuery`(max-width: ${breakpoints.md - 1}px)`,
        lg: mediaQuery`(max-width: ${breakpoints.lg - 1}px)`,
        xl: mediaQuery`(max-width: ${breakpoints.xl - 1}px)`,
        xxl: mediaQuery`(max-width: ${breakpoints.xxl - 1}px)`,
    },
    tabletOnly: mediaQuery`
        (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg - 1}px)
    `,
};

export default media;