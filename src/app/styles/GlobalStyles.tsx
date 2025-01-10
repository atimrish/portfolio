import {createGlobalStyle} from "styled-components";
import PixelifySansFont from "@src/shared/ui/assets/fonts/PixelifySans-VariableFont_wght.ttf"
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";

export const GlobalWrap = createGlobalStyle<{theme: Theme}>`

    @font-face {
        font-family: 'PixelifySans';
        src: url("${PixelifySansFont}") format('truetype');
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    button {
        padding: 0;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'PixelifySans', sans-serif;
        background-color: ${p => p.theme.bgColor};
    }
    
    * {
        box-sizing: border-box;
    }
    
    #tooltip-portal {
        position: absolute;
        width: 0;
        height: 0;
        left: 0;
        top: 0;
    }
`

export const GlobalStyles = () => {
    const {theme} = useTheme();

    return <GlobalWrap theme={theme}/>
}