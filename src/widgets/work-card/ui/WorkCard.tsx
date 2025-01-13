import styled, {css} from "styled-components";
import {ReactNode} from "react";
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {Typography} from "@src/shared/ui/typography";

const Container = styled.div<{ theme: Theme }>`
    width: clamp(292px, 91.25vw, 542px);
    padding: clamp(14px, 4.375vw, 25px);
    border: 6px solid ${props => props.theme.borderColor};
    transition: all 0.3s ease;

    @media screen and (max-width: 560px) {
        border-width: 4px;
    }
    
    &:hover {
        transform: scale(1.01);
    }
`

const HeadingBlock = styled.div`
    display: flex;
    gap: 10px;
    align-items: end;
`

const TechBlock = styled.div`
    display: flex;
    gap: clamp(5px, 1.5625vw, 18px);
`

const TechImage = styled.img`
    width: clamp(28px, 8.75vw, 48px);
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
`

const DescriptionBlock = styled.div`
    margin: 25px 0;
`

const YearStyles = css`
    font-size: clamp(20px, 6.25vw, 48px);
    font-weight: 400;
`

const MonthStyles = css`
    font-size: clamp(14px, 4.375vw, 32px);
    font-weight: 400;
`

const DurationStyles = css`
    margin-top: 6px;
    font-size: clamp(14px, 4.375vw, 32px);
    font-weight: 400;   
`

const JobStyles = css`
    margin: 25px 0;
    font-size: clamp(20px, 6.25vw, 40px);
    font-weight: 400;
`

type Props = {
    year: number,
    month: string,
    durationTime?: string,
    job: string,
    techsImageSources: string[],
    renderDescription: () => ReactNode,
}

export const WorkCard = (p: Props) => {
    const {theme} = useTheme()

    return (
        <Container theme={theme}>
            <HeadingBlock>
                <Typography.Text css={YearStyles}>{p.year}</Typography.Text>
                <Typography.Text css={MonthStyles}>{p.month}</Typography.Text>
            </HeadingBlock>

            {p.durationTime && <Typography.Text css={DurationStyles}>{p.durationTime}</Typography.Text>}

            <Typography.Text css={JobStyles}>{p.job}</Typography.Text>

            <DescriptionBlock>
                {p.renderDescription()}
            </DescriptionBlock>

            <TechBlock>
                {p.techsImageSources.map(i => <TechImage src={i} alt=""/>)}
            </TechBlock>
        </Container>
    );
};