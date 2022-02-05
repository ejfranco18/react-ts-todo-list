import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 90%;
  margin: 20px;
`;

export const InputStyled = styled.input`
  font-family: Poppins-Medium;
  font-size: 15px;
  line-height: 1.5;
  color: #666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 25px;
  border: none;

  &:focus-visible {
    outline: thick double #32a1ce;
  }
`;

export const TextAreaStyled = styled.textarea`
  font-family: Poppins-Medium;
  font-size: 15px;
  line-height: 1.5;
  color: #666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 100px;
  border-radius: 25px;
  padding: 15px 25px;
  border: none;

  &:focus-visible {
    outline: thick double #32a1ce;
  }
`;
