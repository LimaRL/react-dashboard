import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      color: var(--text-body);
      text-align: left;
      line-height: 1.5rem;
      font-weight: 400;
    }

    td {
      padding: 1rem 2rem;
      background-color: var(--shape);
      border: 0;
      color: var(--text-body);
      border-radius: 0.3125rem;

      &:first-of-type {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
