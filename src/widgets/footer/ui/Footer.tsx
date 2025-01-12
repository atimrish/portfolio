import styled, {css} from "styled-components";
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {Wrapper} from "@src/shared/ui/wrapper";
import {Typography} from "@src/shared/ui/typography";

const Container = styled.div<{theme: Theme}>`
    background-image: url("${p => p.theme.footerBack}");
    background-repeat: repeat-x;
    width: 100%;
    padding: 62px 0;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
`

const Image = styled.img`
    width: 48px;
    height: 48px;
    object-position: center;
    object-fit: cover;
`

const TextStyles = css`
    font-size: clamp(16px, 5vw, 24px);
    font-weight: 700;
`

export const Footer = () => {
    const {theme} = useTheme()

    return (
        <Container theme={theme}>
            <Wrapper>
                <Flex>
                    <Image src={theme.copyrightIcon} alt=""/>
                    <Typography.Text css={TextStyles}>2025 | All rights reserved</Typography.Text>
                </Flex>
            </Wrapper>
        </Container>
    );
};