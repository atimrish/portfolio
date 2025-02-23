import styled from "styled-components";
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";
import githubImage from "@src/shared/ui/assets/images/contacts/github.png"
import {Tooltip} from "@src/shared/ui/tooltip";
import {ReactNode} from "react";

const Container = styled.div<{ theme: Theme }>`
    padding: clamp(14px, 4vw, 36px);
    border: 6px solid ${p => p.theme.borderColor};
    background-color: ${p => p.theme.bgColor};
    width: clamp(292px, 70vw, 413px);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 560px) {
        border-width: 4px;
        width: 100%;
    }
    
    &:hover {
        transform: scale(1.01);
    }
`

const Image = styled.img`
    width: 100%;
    aspect-ratio: 1;
    background-color: transparent;
    object-fit: cover;
    object-position: center;

`

const Heading = styled.h3<{ theme: Theme }>`
    font-size: 24px;
    font-weight: 600;
    margin: 19px 0;
    color: ${p => p.theme.color};

    @media screen and (max-width: 560px) {
        font-size: 20px;
    }
`

const Description = styled.div<{ theme: Theme }>`
    font-size: 16px;
    font-weight: 400;
    color: ${p => p.theme.color};
    margin-bottom: 24px;

    @media screen and (max-width: 560px) {
        font-size: 14px;
    }
`

const TechContainer = styled.div`
    display: flex;
    gap: clamp(6px, 1.8vw, 18px);
    margin-top: auto;
    margin-bottom: 24px;
`

const TechBlock = styled.div<{ theme: Theme }>`
    padding: 8px;
    border: 1px solid ${p => p.theme.borderColor};
`

const TechImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: center;
`

const LinksBlock = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: clamp(6px, 1.8vw, 18px);
`

const LinkBlock = styled.a`
    display: block;
`

const LinkImage = styled.img<{ $size: number }>`
    width: ${p => p.$size}px;
    height: ${p => p.$size}px;
    object-fit: contain;
    object-position: center;
`

type Props = {
    heading: string,
    description: string | (() => ReactNode),
    techImageSources: string[],
    projectCover: string,

    previewLink?: string,
    githubLink?: string,
}

export const ProjectCard = (p: Props) => {
    const {theme} = useTheme()

    return (
        <Container theme={theme}>
            <Image src={p.projectCover} alt=""/>
            <Heading theme={theme}>{p.heading}</Heading>
            <Description theme={theme}>
                {typeof p.description === 'string' ? p.description : p.description()}
            </Description>

            <TechContainer>
                {
                    p.techImageSources.map(i =>
                        <TechBlock
                            theme={theme}
                            key={i}
                        >
                            <TechImage src={i} alt=""/>
                        </TechBlock>)
                }
            </TechContainer>

            <LinksBlock>
                {p.previewLink && <LinkBlock href={p.previewLink}>
                    <Tooltip text="Ссылка на сайт">
                        <LinkImage $size={32} src={theme.linkIcon}/>
                    </Tooltip>
                </LinkBlock>}

                {p.githubLink && <LinkBlock href={p.githubLink}>
                    <Tooltip text="Ссылка на репозиторий GitHub">
                        <LinkImage $size={48} src={githubImage}/>
                    </Tooltip>
                </LinkBlock>}
            </LinksBlock>
        </Container>
    )
}