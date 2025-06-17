import styled, {css} from "styled-components";
import {Wrapper} from "@src/shared/ui/wrapper";
import {Typography} from "@src/shared/ui/typography";
import TelegramImage from "@src/shared/ui/assets/images/contacts/telegram.png"
import GmailImage from "@src/shared/ui/assets/images/contacts/gmail.png"
import GithubImage from "@src/shared/ui/assets/images/contacts/github.png"
import {Tooltip} from "@src/shared/ui/tooltip";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
    padding: 74px 0 174px 0;
    
    @media screen and (max-width: 560px) {
        padding: 0 0 74px 0;
    }
`

const LinkStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Image = styled.img`
    width: 128px;
    height: 128px;
    object-position: center;
    object-fit: cover;
`

const TextStyles = css`
    text-align: center;
    font-size: clamp(24px, 7.5vw, 40px);
`

export const ContactList = () => {
    return (
        <Wrapper>
            <Container>
                <Tooltip text="Telegram">
                    <Typography.Link css={LinkStyles} href="https://t.me/str7ct">
                        <Image src={TelegramImage} alt=""/>
                        <Typography.Text css={TextStyles}>@str7ct</Typography.Text>
                    </Typography.Link>
                </Tooltip>

                <Tooltip text="Gmail">
                    <Typography.Link css={LinkStyles} href="mailto:strcty11@gmail.com">
                        <Image src={GmailImage} alt=""/>
                        <Typography.Text css={TextStyles}>strcty11@gmail.com</Typography.Text>
                    </Typography.Link>
                </Tooltip>

                <Tooltip text="Github">
                    <Typography.Link css={LinkStyles} href="https://github.com/atimrish">
                        <Image src={GithubImage} alt=""/>
                        <Typography.Text css={TextStyles}>atimrish</Typography.Text>
                    </Typography.Link>
                </Tooltip>
            </Container>
        </Wrapper>
    );
};
