import {Typography} from "@src/shared/ui/typography";
import {WorkCard} from "@src/widgets/work-card";
import ReactIcon from "@src/shared/ui/assets/images/techs/react.png";
import TypeScriptIcon from "@src/shared/ui/assets/images/techs/typescript.png";
import ExpressIcon from "@src/shared/ui/assets/images/techs/express.png";
import NodeJSIcon from "@src/shared/ui/assets/images/techs/nodejs.png";
import DockerIcon from "@src/shared/ui/assets/images/techs/docker.png";
import PostgresIcon from "@src/shared/ui/assets/images/techs/postgres.png";
import VueIcon from "@src/shared/ui/assets/images/techs/vue.png";
import PhpIcon from "@src/shared/ui/assets/images/techs/php.png";
import YiiIcon from "@src/shared/ui/assets/images/techs/yii.png";
import MongoIcon from "@src/shared/ui/assets/images/techs/mongo.png";
import {useTheme} from "@src/app/providers/ThemeProvider";
import styled, {css} from "styled-components";
import {Theme} from "@src/app/providers/themes";

const CareerWayStyles = css`
    font-weight: 500;
    font-size: clamp(16px, 5vw, 40px);
    text-align: center;
    margin: 74px 0;
`

const CareerWayHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(15px, 4.6875vw, 48px);
    margin-top: 74px;
`

const CareerWayImage = styled.img`
    width: clamp(70px, 21.875vw, 198px);
    aspect-ratio: 3.5;
    object-fit: contain;
    object-position: center;
`

const CareerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    & > *:nth-child(odd) {
        align-self: start;
    }

    & > *:nth-child(even) {
        align-self: end;
    }

    & > * {
        flex-shrink: 0;
    }
`

const MarginCss = css`
    margin: 24px 0;
    display: block;
`

const List = styled.ul<{ theme: Theme }>`
    list-style: square;
    padding: 0 0 0 20px;

    & li::marker {
        color: ${p => p.theme.color};
    }
`

const ListTitleCss = css`
    margin: 16px 0;
`

const BoldCss = css`
    font-size: 28px;
    margin-bottom: 24px;
`

export const CareerBlock = () => {
    const {theme} = useTheme()

    return (
        <>
            <CareerWayHeading>
                <CareerWayImage src={theme.careerWayIcon} alt=""/>
                <Typography.Text css={CareerWayStyles}>путь в карьере</Typography.Text>
                <CareerWayImage src={theme.careerWayIcon} alt=""/>
            </CareerWayHeading>

            <CareerContainer>
                <WorkCard
                    year={2024}
                    month={'август'}
                    job={'Freelance'}
                    techsImageSources={[ReactIcon, TypeScriptIcon, ExpressIcon, NodeJSIcon, DockerIcon, PostgresIcon]}
                    renderDescription={() => (
                        <>
                            <Typography.Text>
                                Полностью создал сайт от разработки до деплоя - онлайн магазин портативных
                                электростанций.
                            </Typography.Text>
                            <Typography.Link
                                href="https://pro134.store"
                                css={MarginCss}
                                target="_blank"
                            >PRO134.store</Typography.Link>

                            <Typography.Text css={ListTitleCss}>Использованные технологии: </Typography.Text>
                            <List theme={theme}>
                                <li><Typography.Text>React</Typography.Text></li>
                                <li><Typography.Text>Typescript</Typography.Text></li>
                                <li><Typography.Text>ExpressJs</Typography.Text></li>
                                <li><Typography.Text>Docker</Typography.Text></li>
                                <li><Typography.Text>PostgreSQL</Typography.Text></li>
                                <li><Typography.Text>Nginx</Typography.Text></li>
                            </List>
                        </>
                    )}
                />

                <WorkCard
                    year={2023}
                    month={'август'}
                    durationTime={'1 год'}
                    job={'Fullstack Developer'}
                    techsImageSources={[ReactIcon, VueIcon, PhpIcon, DockerIcon, PostgresIcon, YiiIcon, MongoIcon]}
                    renderDescription={() => (
                        <>
                            <Typography.Text css={BoldCss}>SaasCredit Group</Typography.Text>
                            <Typography.Text>
                                Был нанят в SaasCredit Group в качестве Junior Fullstack разработчика.
                            </Typography.Text>
                            <Typography.Text css={ListTitleCss}>Использованные технологии: </Typography.Text>
                            <List theme={theme}>
                                <li><Typography.Text>React</Typography.Text></li>
                                <li><Typography.Text>Vue</Typography.Text></li>
                                <li><Typography.Text>PHP</Typography.Text></li>
                                <li><Typography.Text>yii2</Typography.Text></li>
                                <li><Typography.Text>Docker</Typography.Text></li>
                                <li><Typography.Text>PostgreSQL</Typography.Text></li>
                                <li><Typography.Text>MongoDB</Typography.Text></li>
                            </List>
                        </>
                    )}
                />

                <WorkCard
                    year={2022}
                    month={'июнь'}
                    durationTime={'1 год, 2 месяца'}
                    job={'Стажер'}
                    techsImageSources={[ReactIcon, VueIcon, PhpIcon, DockerIcon, YiiIcon]}
                    renderDescription={() => (
                        <>
                            <Typography.Text css={BoldCss}>SaasCredit Group</Typography.Text>
                            <Typography.Text>
                                Был нанят в DosLab в качестве стажера.
                            </Typography.Text>
                            <Typography.Text css={ListTitleCss}>Использованные технологии: </Typography.Text>
                            <List theme={theme}>
                                <li><Typography.Text>React</Typography.Text></li>
                                <li><Typography.Text>Vue</Typography.Text></li>
                                <li><Typography.Text>PHP</Typography.Text></li>
                                <li><Typography.Text>yii2</Typography.Text></li>
                                <li><Typography.Text>Docker</Typography.Text></li>
                                <li><Typography.Text>PostgreSQL</Typography.Text></li>
                                <li><Typography.Text>MongoDB</Typography.Text></li>
                            </List>
                        </>
                    )}
                />
            </CareerContainer>
        </>
    );
};