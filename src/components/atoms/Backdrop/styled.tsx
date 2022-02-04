import styled, { css } from 'styled-components';
import { gray } from '@theme/Colors';
import { rgba } from 'polished';
import { zIndex } from '@theme/Variables';

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    z-index: ${zIndex.modal - 1};
    background: ${rgba(gray.black, 0.6)};
`

