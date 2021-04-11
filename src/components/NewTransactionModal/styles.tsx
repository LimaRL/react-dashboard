import styled from 'styled-components';
import { transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  > input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.3125rem;
    border: 1px solid var(--input-border);
    background-color: var(--input-background);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    
    border-radius: 0.3125rem;
    border: 0;
    background-color: var(--green);
    
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;


export const TransactionsTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

interface RadioBoxProps {
  isChecked: boolean;
  activeColor: 'green' | 'red'
}

const color = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  
  background-color: ${ props => props.isChecked
    ? transparentize(0.9, color[props.activeColor])
    : 'transparent'
  };
  
  border: 1.5px solid var(--input-border);

  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.3125rem;

  transition: border-color 0.2s ease;
  
  &:hover {
    border-color: var(--input-border-daken);
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`
