import { textGradient, defaultColorIcon } from '@theme/DesignSystem/Colors';
import styled, { css } from 'styled-components';

export const StyledIcon = styled.i`
    color: ${(props) => (!!props.color ? props.color : defaultColorIcon)} !important;
    ${(props) =>
        !!props.gradient &&
        props.gradient != 'none' &&
        textGradient(props.gradient, 'to bottom right')}
`;

const iconStyles = {
    StyledIcon,
};

export default iconStyles;
