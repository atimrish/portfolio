import styled, {css} from "styled-components";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {Typography} from "@src/shared/ui/typography";

const ImageContainer = styled.div`
    position: relative;
    width: 184px;
    height: 184px;
`

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
`

const Image = styled.img`
    width: 128px;
    height: 128px;
    object-position: center;
    object-fit: cover;
    position: absolute;
    top: calc(50% - 64px);
    left: calc(50% - 64px);
`

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 292px;
    gap: 20px;
`

const TextStyles = css`
    text-align: center;
    font-size: 20px;
    font-weight: 400;
`

type Props = {
    variant: 'education' | 'award'
}

export const AboutCard = (p: Props) => {
    const {theme} = useTheme()

    return (
        <Container>
            <ImageContainer>
                <BackgroundImage
                    src={theme.imageCover}
                    alt=""
                />
                <Image
                    src={p.variant === 'education' ? theme.educationIcon : theme.awardIcon}
                    alt=""
                />
            </ImageContainer>

            <Typography.Text css={TextStyles}>
                {
                    p.variant === 'education' ?
                    <>Окончил “Астраханский колледж вычислительной техники” (АКВТ)</> :
                    <>Призер регионального этапа Worldskills<br/> 2 место</>
                }
            </Typography.Text>
        </Container>
    );
};