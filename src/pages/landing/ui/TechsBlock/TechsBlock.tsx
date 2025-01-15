import {Typography} from "@src/shared/ui/typography";
import {TechList} from "@src/widgets/tech-list/ui/TechList";
import {css} from "styled-components";

const TechHeadingStyles = css`
    margin: 74px 0 0 0
`

const TechSubHeadingStyles = css`
    font-size: 40px;
    margin-bottom: 74px;
`

export const TechsBlock = () => {
    return (
        <>
            <Typography.Heading id="techs" css={TechHeadingStyles}>#технологии</Typography.Heading>
            <Typography.Text css={TechSubHeadingStyles}>основной стек</Typography.Text>
            <TechList/>
        </>
    );
};