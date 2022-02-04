/** 
 * For this component I have to thank two smart guys 
 * Jacopo Panzera https://github.com/Sliver02
 * and 
 * Andrea Caccia 
 */

import React from 'react';
import { StyledButton } from './styled';
import IButton from './interfaces';

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  variant,
  ...props
}: IButton) => {
  return (
    <StyledButton {...props} variant={variant ? variant : 'contained'}>{label}</StyledButton>
  );
};
