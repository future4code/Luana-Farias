import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: white;
    }

    a {
        text-decoration: none;
    }

    input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #D61D56;
        width: 40%;
        height: 8%;
        

    }

    body {
        height: 100vh;
        width: 100vw;
        background-color: #080F2B;
        margin: 0;
        padding: 2%;
    }

    button {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 2%;
    }

    textarea, select {
        background-color: transparent;
        border: 2px solid #D61D56;
    }

    form {
        width: 800px
    }

    input, textarea {
        display: block;
        margin: 3%;
    }

    select {
        display: inline;
        margin: 3%;
    }


`

export default GlobalStyle;