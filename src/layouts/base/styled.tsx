import styled, { css } from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const StyledBar = styled(AppBar)`
  ${(props) => props.position && `height: ${props.position ? props.position : 'sticky'};`}
`;