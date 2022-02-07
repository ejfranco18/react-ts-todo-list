import styled from 'styled-components';

export const TaskStyled = styled.div`
  background: ${({ theme }) => theme.colors.transparentWhite};
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  width: 200px;

  button {
    background: ${({ theme }) => theme.colors.orange};
    width: 120px;
  }

  p {
    color: ${({ theme }) => theme.colors.onyx};
  }

  span {
    color: ${({ theme }) => theme.colors.onyx};
    font-weight: bold;
  }
`;
