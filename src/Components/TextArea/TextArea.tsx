import React from 'react';

import { InputWrapper } from '../Input/Input.styled';
import { TextAreaStyled } from './TextArea.styled';
import { TextAreaStyledProps } from './TextArea.types';

const TextArea: React.FC<TextAreaStyledProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <TextAreaStyled
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default TextArea;
