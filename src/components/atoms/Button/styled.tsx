import styled, { css } from 'styled-components';
import Button from '@mui/material/Button';


export const StyledButton = styled(Button)`
  ${(props) => !!props.margin && `margin: ${props.margin}px };`}
`;