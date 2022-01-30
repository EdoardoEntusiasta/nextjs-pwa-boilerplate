import { remCalc } from '@utils/helpers';
import styled, { css } from 'styled-components';

// sub-elements
export const FlippedImage = styled.div``;

// modifiers
const roundedCorners = css`
    border-radius: 4px;
`;

export const StyledImage = styled.div`
    position: relative;
    width: 100%;
    ${(props) => !!props.mirror && `margin-bottom: ${remCalc(25)};`}

    img {
        width: 100%;
        ${(props) => !!props.rounded_corners && roundedCorners}
    }

    ${FlippedImage} {
        position: absolute;
        width: 100%;
        top: 100%;
        left: 0;
        pointer-events: none;
        transform: scaleY(-1);
        filter: FlipV;
        -webkit-mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 10%);
        mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 10%);
    }
`;

const ImageStyles = {
    StyledImage,
    FlippedImage,
};

export default ImageStyles;
