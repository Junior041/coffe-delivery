import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    select:focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-400']};
        background-color: ${(props) => props.theme['purple-100']};
    }

    body{
        background-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-700']};
    }

    body, input, text-area, button{
        font-weight: 400;
        font-size:1rem;
    }

    body, input, text-area{
        font-family: 'Roboto', sans-serif;
    }

    button{
        font-family: 'Baloo 2', cursive;
    }
`;
