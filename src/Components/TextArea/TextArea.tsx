import React from 'react';

import { TextAreaStyled, InputWrapper } from './TextArea.styled';
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
