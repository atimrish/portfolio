import {Header} from "@src/widgets/header";
import styled, {css} from "styled-components";
import {MouseEffectBlock} from "@src/widgets/mouse-effect-block";
import {useEffect, useRef} from "react";
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {Typography} from "@src/shared/ui/typography";
import {Button} from "@src/shared/ui/button";
import {Wrapper} from "@src/shared/ui/wrapper";
import {AboutList} from "@src/widgets/about-list/ui/AboutList";
import {ContactList} from "@src/widgets/contact-list";
import {Footer} from "@src/widgets/footer";
import {CareerBlock} from "@src/pages/landing/ui/CareerBlock";
import {TechsBlock} from "@src/pages/landing/ui/TechsBlock";
import {ProjectBlock} from "@src/pages/landing/ui/ProjectsBlock";

const HeaderBlock = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

const MouseEffect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const Cursor = styled.div<{ theme: Theme }>`
    width: 16px;
    height: 16px;
    background-color: ${p => p.theme.bgColor};
    border: 4px solid ${p => p.theme.borderColor};
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 1;
    
    @media screen and (max-width: 560px) {
        & {
            display: none;
        }
    }
`

const HeadingLogoStyles = css`
    text-align: center;
    font-weight: 700;
    font-size: clamp(40px, 12.5vw, 96px);

    &::selection {
        background: transparent;
    }
    &::-moz-selection {
        background: transparent;
    }
`

const SubHeadingLogoStyles = css`
    text-align: center;
    font-size: clamp(20px, 6.25vw, 64px);
    font-weight: 400;

    &::selection {
        background: transparent;
    }
    &::-moz-selection {
        background: transparent;
    }
`

const HeadingLogoCenter = styled.div`
    margin: 100px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

const HeadingCss = css`
    margin: 74px 0
`

const FooterMargin = styled.div`
    margin-top: 74px;
`

export const LandingPage = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const {theme} = useTheme()

    useEffect(() => {
        const cursorMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform =
                    `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`
            }
        }
        document.body.addEventListener('mousemove', cursorMove)
        return () => document.body.removeEventListener('mousemove', cursorMove)
    }, []);

    return (
        <>
            <Cursor ref={cursorRef} theme={theme}/>
            <HeaderBlock>
                <MouseEffect>
                    <MouseEffectBlock/>
                </MouseEffect>
                <Header/>
                <HeadingLogoCenter>
                    <Typography.Text css={HeadingLogoStyles}>Atimrish</Typography.Text>
                    <Typography.Text css={SubHeadingLogoStyles}>Frontend Developer</Typography.Text>
                    <Button>Скачать резюме</Button>
                </HeadingLogoCenter>
            </HeaderBlock>

            <Wrapper>
                <Typography.Heading id="about" css={HeadingCss}>#обо мне</Typography.Heading>
                <AboutList/>
                <CareerBlock/>
                <TechsBlock/>
                <ProjectBlock/>
                <Typography.Heading id="contact" css={HeadingCss}>#контакты</Typography.Heading>
                <ContactList/>
            </Wrapper>

            <FooterMargin>
                <Footer/>
            </FooterMargin>
        </>
    );
};