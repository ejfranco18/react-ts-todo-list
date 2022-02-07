import styled from 'styled-components';

export const TextAreaStyled = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: block;
  font-family: Poppins-Medium;
  font-size: 15px;
  height: 100px;
  line-height: 1.5;
  padding: 15px 25px;
  width: 100%;

  &:focus-visible {
    outline: thick double ${({ theme }) => theme.colors.blue};
  }
`;
