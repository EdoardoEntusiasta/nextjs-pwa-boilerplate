import styled, { css, keyframes } from 'styled-components';
import { transitions } from '@theme/Variables';

export const Placeholder = styled.picture``;
export const Picture = styled.picture``;
export const Img = styled.img`
    ${(props) => props.lazy && animation}
    max-width: 100%;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const animation = css`
    animation: ${fadeIn} ${transitions.pace}s ease;
`;

const dimensionsFit = css`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;

    ${Placeholder}, ${Picture} {
        ${Img} {
            width: auto;
            height: auto;
        }
    }
`;

export const StyledResponsiveImage = styled.div`
    text-align: left;
    padding-bottom: ${(props) => props.dynamicPadding};
    overflow: hidden;
    position: relative;

    ${Placeholder} {
        ${Img} {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: opacity ${transitions.fast}s ease;
            filter: blur(1rem);
            opacity: 1;
            &.isLoaded {
                opacity: 0;
            }
        }
    }

    ${Picture} {
        display: block;
        ${Img} {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }

    ${(props) => !!props.dimensions_fit && dimensionsFit}
`;

const ResposiveImageStyles = {
    StyledResponsiveImage,
    Placeholder,
    Picture,
    Img,
};

export default ResposiveImageStyles;
