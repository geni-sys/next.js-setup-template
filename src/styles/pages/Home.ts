import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 7rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 1rem;

    p {
      margin-top: 2px;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
`;
