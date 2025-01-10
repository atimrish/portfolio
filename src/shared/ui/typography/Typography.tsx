import styled, {css} from "styled-components";
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {PropsWithChildren} from "react";

type ProvidedStyles = ReturnType<typeof css>

type StyledTypographyProps = {
    theme: Theme;
    css?: ProvidedStyles
}

type TypographyProps = PropsWithChildren<{
    css?: ProvidedStyles
}>

const StyledHeading = styled.h2<StyledTypographyProps>`
    font-size: clamp(24px, 7.5vw, 64px);
    font-weight: 700;
    color: ${p => p.theme.color};
    ${p => p.css && p.css}
`

const Heading = (p: TypographyProps) => {
    const {theme} = useTheme();
    return <StyledHeading theme={theme} css={p.css}>{p.children}</StyledHeading>
}

const StyledText = styled.div<StyledTypographyProps>`
    font-size: 20px;
    color: ${p => p.theme.color};
    ${p => p.css && p.css}
`

const Text = (p: TypographyProps) => {
    const {theme} = useTheme();
    return <StyledText theme={theme} css={p.css}>{p.children}</StyledText>;
}

const StyledParagraph = styled.p<StyledTypographyProps>`
    color: ${p => p.theme.color};
    font-size: clamp(14px, 4.4vw, 16px);
    ${p => p.css && p.css}
`

const Paragraph = (p: TypographyProps) => {
    const {theme} = useTheme();
    return <StyledParagraph theme={theme} css={p.css}>{p.children}</StyledParagraph>
}

export const Typography = {
    Heading,
    Text,
    Paragraph
}