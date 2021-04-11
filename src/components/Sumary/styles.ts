import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.75rem;

  div {
    background-color: var(--shape);
    padding: 1.5625rem 2rem 1.125rem;
    border-radius: 0.3125rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 26.67px;
        height: 26.67px;
        object-fit: contain;
      }
    }

    strong {
      display: inline-block;
      margin-top: 0.875rem;
      font-size: 2rem;
      line-height: 3.375rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
