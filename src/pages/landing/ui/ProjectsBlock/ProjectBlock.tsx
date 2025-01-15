import {Typography} from "@src/shared/ui/typography";
import {SearchInput} from "@src/shared/ui/search-input";
import styled, {css} from "styled-components";
import {ProjectCard} from "@src/widgets/project-card";
import {useState} from "react";

import ReactImage from '@src/shared/ui/assets/images/techs/react.png'
import ReduxImage from '@src/shared/ui/assets/images/techs/redux.png'
import HTMLImage from '@src/shared/ui/assets/images/techs/html.png'
import CSSImage from '@src/shared/ui/assets/images/techs/css.png'
import JSImage from '@src/shared/ui/assets/images/techs/javascript.png'
import TSImage from '@src/shared/ui/assets/images/techs/typescript.png'
import MongoImage from '@src/shared/ui/assets/images/techs/mongo.png'
import NuxtImage from '@src/shared/ui/assets/images/techs/nuxt.png'

import Crystals from '@src/shared/ui/assets/images/projects/crystals.png'
import Hydra from '@src/shared/ui/assets/images/projects/hydra.png'
import Wordle from '@src/shared/ui/assets/images/projects/wordle.png'
import Game2048 from '@src/shared/ui/assets/images/projects/2048.png'
import Greenery from '@src/shared/ui/assets/images/projects/greenery.png'

const HeadingCss = css`
    margin: 74px 0
`

const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: clamp(14px, 4.375vw, 54px) 0;
    gap: 16px;
`

export const ProjectBlock = () => {
    const [query, setQuery] = useState<string>('')

    return (
        <>
            <Typography.Heading id="projects" css={HeadingCss}>#проекты</Typography.Heading>
            <SearchInput value={query} setValue={setQuery}/>

            <ProjectList>
                <ProjectCard
                    heading={'Wordle'}
                    description={'Игра Wordle. Цель игры - отгадать загаданное слово.'}
                    techImageSources={[ReactImage, ReduxImage, TSImage]}
                    projectCover={Wordle}
                    githubLink={'https://github.com/atimrish/wordle'}
                    previewLink={'https://atimrish.github.io/wordle/'}
                />
                <ProjectCard
                    heading={'2048'}
                    description={'Игра, в которой нужно собрать ячейку с числом 2048.'}
                    techImageSources={[ReactImage, TSImage]}
                    projectCover={Game2048}
                    githubLink={'https://github.com/atimrish/2048'}
                />
                <ProjectCard
                    heading={'Crystals landing'}
                    description={'Лендинг-страница сайта crystals.com. Сделана для демонстрации верстки.'}
                    techImageSources={[HTMLImage, CSSImage, JSImage]}
                    projectCover={Crystals}
                    githubLink={'https://github.com/atimrish/crystals-landing'}
                />
                <ProjectCard
                    heading={'Hydra landing'}
                    description={'Лендинг-страница сайта VR-технологий. Сделана для демонстрации верстки.'}
                    techImageSources={[HTMLImage, CSSImage, JSImage]}
                    projectCover={Hydra}
                    githubLink={'https://github.com/atimrish/hydra-landing'}
                />
                <ProjectCard
                    heading={'Greenery'}
                    description={'Интернет-магазин товаров для сада.'}
                    techImageSources={[NuxtImage, MongoImage]}
                    projectCover={Greenery}
                    githubLink={'https://github.com/atimrish/Greenery'}
                />
                <ProjectCard
                    heading={'Queline'}
                    description={'Тематический видеохостинг по играм.'}
                    techImageSources={[ReactImage]}
                    projectCover={ReactImage}
                    githubLink={'https://github.com/atimrish/Queline'}
                />
            </ProjectList>
        </>
    );
};