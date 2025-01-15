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

    &::selection {
        background: transparent;
    }

    &::-moz-selection {
        background: transparent;
    }
`

const ThemeButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
`

export const Header = () => {
    const {theme, setTheme} = useTheme()

    const links: Array<{ href: string, title: string }> = [
        {
            title: 'обо мне',
            href: '#about',
        },
        {
            title: 'технологии',
            href: '#techs',
        },
        {
            title: 'проекты',
            href: '#projects',
        },
        {
            title: 'контакты',
            href: '#contact',
        },
    ]

    return (
        <Container>
            <Typography.Link
                css={LogoStyles}
                href="/"
            >AT</Typography.Link>

            <RightContainer>
                {
                    links.map(i =>
                        <Typography.Link
                            href={i.href}
                            css={LinkStyles}
                            key={i.href}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(i.href)?.scrollIntoView({behavior: 'smooth'})
                            }}
                        >{i.title}</Typography.Link>)
                }
                <Tooltip text="сменить тему">
                    <ThemeButton
                        onClick={() => setTheme(theme.name === 'light' ? 'dark' : 'light')}
                    >
                        <ThemeIcon src={theme.themeIcon} alt=""/>
                    </ThemeButton>
                </Tooltip>
            </RightContainer>
        </Container>
    )
}
