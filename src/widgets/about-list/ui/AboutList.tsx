import styled, {css} from "styled-components";
import {AboutCard} from "@src/widgets/about-card";
import {Typography} from "@src/shared/ui/typography";
import {Wrapper} from "@src/shared/ui/wrapper";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 200px 0;
    
    @media screen and (max-width: 560px) {
        flex-direction: column;
        gap: 60px;
        padding: 0;
    }
`

const TextStyles = css`
    font-size: 64px;
    font-weight: 400;
    text-align: center;
    flex-shrink: 0;
`

export const AboutList = () => {
    return (
        <Wrapper>
            <Container>
                <AboutCard variant="education"/>
                <Typography.Text css={TextStyles}>UTC +4</Typography.Text>
                <AboutCard variant="award"/>
            </Container>
        </Wrapper>
    );
};
