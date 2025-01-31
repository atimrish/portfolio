import styled from "styled-components";
import {Wrapper} from "@src/shared/ui/wrapper";
import {PixelizedImage} from "@src/widgets/pixelized-image";

import HTMLImage from "@src/shared/ui/assets/images/techs/html.png"
import CSSImage from "@src/shared/ui/assets/images/techs/css.png"
import JSImage from "@src/shared/ui/assets/images/techs/javascript.png"
import TSImage from "@src/shared/ui/assets/images/techs/typescript.png"
import ReactImage from "@src/shared/ui/assets/images/techs/react.png"
import ReduxImage from "@src/shared/ui/assets/images/techs/redux.png"
import GitImage from "@src/shared/ui/assets/images/techs/git.png"
import StyledComponentsImage from "@src/shared/ui/assets/images/techs/styled-components.png"
import WebpackImage from "@src/shared/ui/assets/images/techs/webpack.png"
import StorybookImage from "@src/shared/ui/assets/images/techs/storybook.png"
import {Tooltip} from "@src/shared/ui/tooltip";

const Container = styled.div`
    display: flex;
    gap: clamp(21px, 6.5625vw, 52px);
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;

    @media screen and (max-width: 560px) {
        padding: 0;
    }
`

export const TechList = () => {
    return (
        <Wrapper>
            <Container>
                <Tooltip text="HTML">
                    <PixelizedImage imageSource={HTMLImage} deviation={30} />
                </Tooltip>
                <Tooltip text="CSS">
                    <PixelizedImage imageSource={CSSImage} deviation={30} />
                </Tooltip>
                <Tooltip text="Javascript">
                    <PixelizedImage imageSource={JSImage} deviation={70} />
                </Tooltip>
                <Tooltip text="Typescript">
                    <PixelizedImage imageSource={TSImage} deviation={50} />
                </Tooltip>
                <Tooltip text="React">
                    <PixelizedImage imageSource={ReactImage} deviation={120} />
                </Tooltip>
                <Tooltip text="Redux">
                    <PixelizedImage imageSource={ReduxImage} deviation={50} />
                </Tooltip>
                <Tooltip text="Git">
                    <PixelizedImage imageSource={GitImage} deviation={30} />
                </Tooltip>
                <Tooltip text="Styled Components">
                    <PixelizedImage imageSource={StyledComponentsImage} deviation={40} />
                </Tooltip>
                <Tooltip text="Webpack">
                    <PixelizedImage imageSource={WebpackImage} deviation={50} />
                </Tooltip>
                <Tooltip text="Storybook">
                    <PixelizedImage imageSource={StorybookImage} deviation={50} />
                </Tooltip>
            </Container>
        </Wrapper>
    );
};