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
import JavaScriptIcon from "@src/shared/ui/assets/images/techs/javascript.png";
import {useTheme} from "@src/app/providers/ThemeProvider";
import styled, {css} from "styled-components";

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
                    renderDescription={() => <Typography.Paragraph>Тут будет описание</Typography.Paragraph>}
                />

                <WorkCard
                    year={2023}
                    month={'август'}
                    durationTime={'1 год'}
                    job={'Fullstack Developer'}
                    techsImageSources={[VueIcon, PhpIcon, DockerIcon, PostgresIcon, YiiIcon, MongoIcon]}
                    renderDescription={() => <Typography.Paragraph>Тут будет описание</Typography.Paragraph>}
                />

                <WorkCard
                    year={2022}
                    month={'сентябрь'}
                    durationTime={'4 мес'}
                    job={'Стажер'}
                    techsImageSources={[JavaScriptIcon, PhpIcon, DockerIcon, YiiIcon]}
                    renderDescription={() => <Typography.Paragraph>Тут будет описание</Typography.Paragraph>}
                />
            </CareerContainer>
        </>
    );
};