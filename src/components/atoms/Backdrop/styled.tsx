import styled, { css } from 'styled-components';
import { gray } from '@assets/designSystem/colors';
import { rgba } from 'polished';
import { zIndex } from '@assets/designSystem/variables';

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${zIndex.modal - 1};
    background: ${rgba(gray.black, 0.6)};
`

