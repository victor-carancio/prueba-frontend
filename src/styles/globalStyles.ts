import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
    
    #root{
        padding: 0;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        
    }
    
    body{
        background-color: ${colors.bodyBg};
        font-family: "Roboto", sans-serif;
        min-height: 100vh;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    h1,h2, p, span{
        color: ${colors.titleFont};
    }

    input{
        background-color: ${colors.modalBg};
        width: 100%;
        height: 40px;
        padding: 8px 16px;
        border: 1px solid ${colors.inputBorder};
        color: ${colors.titleFont};


    }

    button:focus { outline: none; }

    svg {
    color: ${colors.logo};
    font-size: 24px;
    }

    h1{
        
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0;
        text-transform: uppercase;
    }
    h2{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.1px; 
    }
`;

export default GlobalStyles;
