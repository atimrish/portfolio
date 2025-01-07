import {createGlobalStyle} from "styled-components";
import PixelifySansFont from "@src/shared/ui/assets/fonts/PixelifySans-VariableFont_wght.ttf"

export const GlobalStyles = createGlobalStyle`
    :root {
        --black: #1A1919;
        --white: #FBFBFB;
    }

    @font-face {
        font-family: 'PixelifySans';
        src: url("${PixelifySansFont}") format('truetype');
    }
    
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PixelifySans', sans-serif;
    }
`