import styled, {css} from "styled-components";
import {Theme} from "@src/app/providers/themes";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {useState} from "react";

const InputContainer = styled.div<{ theme: Theme, focus: boolean }>`
    border: 6px solid ${p => p.theme.borderColor};
    width: clamp(297px, 92.9vw, 581px);
    background-color: ${p => p.theme.bgColor};
    display: flex;
    align-items: center;
    padding-right: clamp(14px, 4.37vw, 30px);
    position: relative;
    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    @media screen and (max-width: 560px) {
        border-width: 4px;
    }

    ${p => p.focus && css`
        &::before {
            inset: -10px;
            border: 1px solid ${p => p.theme.borderColor};
        }
    `}
`

const Input = styled.input<{ theme: Theme }>`
    padding: clamp(10px, 3.125vw, 24px) clamp(14px, 4.37vw, 30px);
    width: 100%;
    font-size: clamp(16px, 5vw, 36px);
    font-family: 'PixelifySans', sans-serif;
    background-color: ${p => p.theme.bgColor};
    color: ${p => p.theme.color};
    border: none;
    outline: none;
`

const SearchIcon = styled.img`
    width: clamp(28px, 8.75vw, 48px);
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    cursor: pointer;
`

type Props = {
    value: string
    setValue: (value: string) => void
}

export const SearchInput = (p: Props) => {
    const {theme} = useTheme()
    const [isFocused, setFocused] = useState(false)

    return (
        <InputContainer theme={theme} focus={isFocused}>
            <Input
                theme={theme}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={e => p.setValue(e.currentTarget.value)}
                type="search"
                value={p.value}
            />

            <SearchIcon src={theme.searchIcon} alt=""/>
        </InputContainer>
    )
}
