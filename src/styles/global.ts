import { createGlobalStyle } from 'styled-components'

import { darken } from 'polished'


export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --blue-light: #6933ff;
    --green: #33CC95;
    --red: #E62E4D;
    
    --shape: #FFFFFF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --background: #F0F2F5;
    
    --input-background: #e7e9ee;
    --input-border: #d7d7d7;
    --input-border: ${darken(0.2, "#d7d7d7")};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--text-title);
  }

  strong {
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0,0.5);
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 4rem 3rem;
    border-radius: 0.3125rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;

    display: inline-flex;
    padding: 0.5rem;
    
    border: 0;
    background-color: transparent;
    filter: brightness(0.9);
    
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.5);
    }
  }
`