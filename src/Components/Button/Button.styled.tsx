import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  display: block;
  width: 200px;
  height: 36px;
  border-radius: 18px;
  background-color: #acbfa4;
  border: solid 1px transparent;
  color: #423629;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #b09398;
    border-color: #fff;
    transition: all 0.1s ease-in-out;
  }
`;
