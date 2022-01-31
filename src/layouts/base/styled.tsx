import styled, { css } from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { zIndex } from '@theme/DesignSystem/Variables';

export const StyledBar = styled(AppBar)`
  z-index: ${zIndex.flat} !important;
  ${(props) => props.position && `position: ${props.position ? props.position : 'sticky'};`}
`;