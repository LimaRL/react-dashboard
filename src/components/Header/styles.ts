import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 2rem 1rem 8.25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.3125rem;
    height: 3rem;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
