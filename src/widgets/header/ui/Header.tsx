import styled, {css} from "styled-components";
import {Typography} from "@src/shared/ui/typography";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {Tooltip} from "@src/shared/ui/tooltip";

const Container = styled.div`
    padding: clamp(5px, 1.5625vw, 27px) clamp(9px, 2.8125vw, 38px);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoStyles = css`
    font-size: clamp(36px, 11.25vw, 48px);
    font-weight: 400;
    cursor: pointer;
`

const RightContainer = styled.div`
    display: flex;
    gap: clamp(10px, 2.6vw, 37px);
    align-items: center;

    @media screen and (max-width: 560px) {
        & a {
            display: none;
        }
    }
`

const ThemeIcon = styled.img`
    width: clamp(36px, 1.125vw, 48px);
    aspect-ratio: 1;
    object-position: center;
    object-fit: cover;
`

const LinkStyles = css`
    font-size: clamp(16px, 2vw, 24px);
`

const ThemeButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`

export const Header = () => {
    const {theme, setTheme} = useTheme()

    return (
        <Container>
            <Typography.Link
                css={LogoStyles}
                href="/"
            >AT</Typography.Link>

            <RightContainer>
                <Typography.Link href="#about" css={LinkStyles}>обо мне</Typography.Link>
                <Typography.Link href="#techs" css={LinkStyles}>технологии</Typography.Link>
                <Typography.Link href="#projects" css={LinkStyles}>проекты</Typography.Link>
                <Typography.Link href="#contact" css={LinkStyles}>контакты</Typography.Link>

                <Tooltip text="сменить тему">
                    <ThemeButton
                        onClick={() => setTheme(theme.name === 'light' ? 'dark' : 'light')}
                    >
                        <ThemeIcon src={theme.themeIcon} alt="" />
                    </ThemeButton>
                </Tooltip>
            </RightContainer>
        </Container>
    )
}
