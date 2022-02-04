import React from 'react';

import { ButtonStyled } from './Button.styled';
import { ButtonStyledProps } from './Button.types';

const Button: React.FC<ButtonStyledProps> = ({ text, onClick }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;
